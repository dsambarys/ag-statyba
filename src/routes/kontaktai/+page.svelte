<script lang="ts">
	import { t } from '$lib/i18n/translate';
	import { currentLanguage } from '$lib/stores/language';
	import ThemeLanguageControls from '$lib/components/ThemeLanguageControls.svelte';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import ReCaptcha from '$lib/components/ReCaptcha.svelte';
	import type { ActionData } from './$types';

	export let data;
	export let form: ActionData;

	let formData = {
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	};

	let success = false;
	let error: string | null = null;
	let loading = false;
	let isAuthenticated = false;
	let isAdmin = false;
	let contacts: any[] = [];
	let recaptchaToken: string | null = null;
	let isSubmitting = false;

	const subjects = [
		'Namų projektavimas',
		'Statybos darbai',
		'Namo sąmata',
		'Interjero priežiūra',
		'Konsultacija',
		'Kita'
	];

	onMount(async () => {
		const token = localStorage.getItem('token');
		if (token) {
			try {
				const response = await fetch('/graphql', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`
					},
					body: JSON.stringify({
						query: `
							query {
								me {
									id
									email
									role
								}
							}
						`
					})
				});

				const result = await response.json();
				if (result.data?.me) {
					isAuthenticated = true;
					isAdmin = result.data.me.role === 'ADMIN';
					if (isAdmin) {
						await loadContacts();
					}
				}
			} catch (err) {
				console.error('Error checking authentication:', err);
			}
		}
	});

	const loadContacts = async () => {
		try {
			const token = localStorage.getItem('token');
			const response = await fetch('/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({
					query: `
						query {
							contacts {
								id
								name
								email
								phone
								subject
								message
								status
								createdAt
							}
						}
					`
				})
			});

			const result = await response.json();
			if (result.data?.contacts) {
				contacts = result.data.contacts;
			}
		} catch (err) {
			console.error('Error loading contacts:', err);
		}
	};

	const handleSubmit = async () => {
		try {
			loading = true;
			error = null;

			const response = await fetch('/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query: `
						mutation CreateContact($input: CreateContactInput!) {
							createContact(input: $input) {
								id
								name
								email
								phone
								subject
								message
							}
						}
					`,
					variables: {
						input: formData
					}
				})
			});

			const result = await response.json();

			if (result.errors) {
				throw new Error(result.errors[0].message);
			}

			success = true;
			// Reset form
			formData = {
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: ''
			};

			if (isAdmin) {
				await loadContacts();
			}

			// Hide success message after 5 seconds
			setTimeout(() => {
				success = false;
			}, 5000);
		} catch (err) {
			error = err instanceof Error ? err.message : 'An unexpected error occurred';
		} finally {
			loading = false;
		}
	};

	const updateContactStatus = async (id: string, status: string) => {
		try {
			const token = localStorage.getItem('token');
			const response = await fetch('/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({
					query: `
						mutation UpdateContactStatus($id: ID!, $status: ContactStatus!) {
							updateContactStatus(id: $id, status: $status) {
								id
								status
							}
						}
					`,
					variables: {
						id,
						status
					}
				})
			});

			const result = await response.json();
			if (result.errors) {
				throw new Error(result.errors[0].message);
			}

			await loadContacts();
		} catch (err) {
			console.error('Error updating contact status:', err);
		}
	};

	const handleLogin = async (event: Event) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		
		try {
			const response = await fetch('/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query: `
						mutation Login($input: LoginInput!) {
							login(input: $input) {
								token
								user {
									id
									email
									role
								}
							}
						}
					`,
					variables: {
						input: {
							email: formData.get('email'),
							password: formData.get('password')
						}
					}
				})
			});

			const result = await response.json();
			if (result.errors) {
				throw new Error(result.errors[0].message);
			}

			localStorage.setItem('token', result.data.login.token);
			isAuthenticated = true;
			isAdmin = result.data.login.user.role === 'ADMIN';
			if (isAdmin) {
				await loadContacts();
			}
		} catch (err) {
			error = err instanceof Error ? err.message : 'An unexpected error occurred';
		}
	};

	const handleLogout = async () => {
		try {
			const token = localStorage.getItem('token');
			await fetch('/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({
					query: `
						mutation {
							logout
						}
					`
				})
			});

			localStorage.removeItem('token');
			isAuthenticated = false;
			isAdmin = false;
			contacts = [];
		} catch (err) {
			console.error('Error logging out:', err);
		}
	};

	function handleRecaptchaVerify(token: string) {
		recaptchaToken = token;
	}

	function handleRecaptchaExpire() {
		recaptchaToken = null;
	}

	function handleRecaptchaError() {
		recaptchaToken = null;
	}
</script>

<ThemeLanguageControls />

<!-- Hero Section with Centered Form -->
<section class="min-h-screen bg-[#f9fafb] dark:bg-gray-900 flex flex-col items-center justify-center py-20" aria-labelledby="contact-title">
	<div class="max-w-[1200px] w-full mx-auto px-5">
		<div class="text-center mb-12">
			<h1 class="text-5xl font-bold text-gray-900 dark:text-white">{t('contact.title')}</h1>
			<p class="mt-4 text-gray-600 dark:text-gray-300">{t('contact.subtitle')}</p>
		</div>
		
		{#if !isAuthenticated}
			<!-- Contact Form -->
			<div class="max-w-2xl mx-auto mb-20">
				<div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
					<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{t('contact.form.title')}</h2>

					{#if success}
						<div class="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg text-green-700 dark:text-green-200">
							{t('contact.form.success')}
						</div>
					{/if}

					{#if error}
						<div class="mb-6 p-4 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-lg text-red-700 dark:text-red-200">
							❌ {error}
						</div>
					{/if}

					<form
						method="POST"
						use:enhance={() => {
							isSubmitting = true;
							return async ({ result }) => {
								isSubmitting = false;
								if (result.type === 'success') {
									// Reset form and reCAPTCHA
									recaptchaToken = null;
									grecaptcha.reset();
								}
							};
						}}
						class="space-y-6"
					>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
									{t('contact.form.name')} *
								</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									disabled={loading}
									class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
								/>
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
									{t('contact.form.email')} *
								</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									disabled={loading}
									class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
								/>
							</div>
						</div>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div>
								<label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
									{t('contact.form.phone')}
								</label>
								<input
									type="tel"
									id="phone"
									bind:value={formData.phone}
									disabled={loading}
									class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
								/>
							</div>
							<div>
								<label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
									{t('contact.form.subject')} *
								</label>
								<select
									id="subject"
									bind:value={formData.subject}
									required
									disabled={loading}
									class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
								>
									<option value="">{t('contact.form.subject')}</option>
									{#each subjects as subject}
										<option value={subject}>{t(`contact.subjects.${subject}`)}</option>
									{/each}
								</select>
							</div>
						</div>
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
								{t('contact.form.message')} *
							</label>
							<textarea
								id="message"
								bind:value={formData.message}
								required
								disabled={loading}
								rows="5"
								class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
							></textarea>
						</div>
						<ReCaptcha
							onVerify={handleRecaptchaVerify}
							onExpire={handleRecaptchaExpire}
							onError={handleRecaptchaError}
						/>
						<input type="hidden" name="recaptchaToken" value={recaptchaToken || ''} />
						<div class="text-right">
							<button
								type="submit"
								disabled={!recaptchaToken || isSubmitting}
								class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
							>
								{isSubmitting ? 'Siunčiama...' : 'Siųsti'}
							</button>
						</div>
					</form>
				</div>
			</div>

			<!-- Login Form -->
			<div class="max-w-md mx-auto">
				<div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
					<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Admin Login</h2>
					<form on:submit={handleLogin} class="space-y-4">
						<div>
							<label for="login-email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
							<input
								type="email"
								id="login-email"
								name="email"
								required
								class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
							/>
						</div>
						<div>
							<label for="login-password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
							<input
								type="password"
								id="login-password"
								name="password"
								required
								class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
							/>
						</div>
						<button
							type="submit"
							class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
						>
							Login
						</button>
					</form>
				</div>
			</div>
		{:else}
			<!-- Admin Panel -->
			<div class="max-w-6xl mx-auto">
				<div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
					<div class="flex justify-between items-center mb-6">
						<h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Contact Submissions</h2>
						<button
							on:click={handleLogout}
							class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
						>
							Logout
						</button>
					</div>

					<div class="overflow-x-auto">
						<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
							<thead class="bg-gray-50 dark:bg-gray-900">
								<tr>
									<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
									<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
									<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Subject</th>
									<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
									<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
								</tr>
							</thead>
							<tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
								{#each contacts as contact}
									<tr>
										<td class="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">{contact.name}</td>
										<td class="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">{contact.email}</td>
										<td class="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">{contact.subject}</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<span class={`px-2 py-1 rounded-full text-xs font-medium
												${contact.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : ''}
												${contact.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
												${contact.status === 'COMPLETED' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
												${contact.status === 'REJECTED' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : ''}
											`}>
												{contact.status}
											</span>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<select
												value={contact.status}
												on:change={(e) => updateContactStatus(contact.id, e.target.value)}
												class="rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
											>
												<option value="PENDING">Pending</option>
												<option value="IN_PROGRESS">In Progress</option>
												<option value="COMPLETED">Completed</option>
												<option value="REJECTED">Rejected</option>
											</select>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- Additional Information Section -->
<section class="bg-white dark:bg-gray-900 py-20">
	<div class="max-w-[1200px] mx-auto px-5">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Company Info -->
			<div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{t('contact.info.title')}</h2>
				<div class="space-y-4">
					<div class="flex items-start">
						<div class="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium text-gray-900 dark:text-white">{data.contactInfo.companyName}</h3>
							<p class="text-gray-600 dark:text-gray-300">{data.contactInfo.address}</p>
						</div>
					</div>
					<div class="flex items-start">
						<div class="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium text-gray-900 dark:text-white">{t('contact.form.phone')}</h3>
							<a href={`tel:${data.contactInfo.phone}`} class="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200">
								{data.contactInfo.phone}
							</a>
						</div>
					</div>
					<div class="flex items-start">
						<div class="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium text-gray-900 dark:text-white">{t('contact.form.email')}</h3>
							<a href={`mailto:${data.contactInfo.email}`} class="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200">
								{data.contactInfo.email}
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Working Hours -->
			<div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{t('contact.info.workingHours')}</h2>
				<div class="space-y-4">
					{#each data.contactInfo.workingHours as { days, hours }}
						<div class="flex justify-between items-center">
							<span class="text-gray-600 dark:text-gray-300">{days}</span>
							<span class="font-medium text-gray-900 dark:text-white">{hours}</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Social Media -->
			<div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
				<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{t('contact.info.socialMedia')}</h2>
				<div class="flex space-x-4">
					{#each data.contactInfo.socialMedia as { platform, url, icon }}
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
							title={platform}
						>
							{@html icon}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Map -->
		<div class="mt-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700">
			<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{t('contact.info.location')}</h2>
			<div class="aspect-w-16 aspect-h-9">
				<iframe
					title="Location map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72481.55799545107!2d21.107636574650635!3d55.70345235622799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4dbf2a5fa5b49%3A0xa00d18ec9ba72c0!2sKlaip%C4%97da!5e0!3m2!1sen!2slt!4v1710182400"
					width="100%"
					height="450"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
					class="rounded-lg"
				></iframe>
			</div>
		</div>
	</div>
</section>

<style>
	:global(body) {
		@apply bg-white dark:bg-gray-900;
	}
</style>