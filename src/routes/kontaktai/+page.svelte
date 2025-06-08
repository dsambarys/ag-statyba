<script lang="ts">
	export let data;

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

	const subjects = [
		'Namų projektavimas',
		'Statybos darbai',
		'Namo sąmata',
		'Interjero priežiūra',
		'Konsultacija',
		'Kita'
	];

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
								success
								message
								contact {
									id
									name
									email
									phone
									subject
									message
								}
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

			if (result.data.createContact.success) {
				success = true;
				// Reset form
				formData = {
					name: '',
					email: '',
					phone: '',
					subject: '',
					message: ''
				};

				// Hide success message after 5 seconds
				setTimeout(() => {
					success = false;
				}, 5000);
			} else {
				throw new Error(result.data.createContact.message || 'Failed to send message');
			}
		} catch (err) {
			error = err instanceof Error ? err.message : 'An unexpected error occurred';
		} finally {
			loading = false;
		}
	};
</script>

<!-- Hero Section with Centered Form -->
<section class="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center py-20" aria-labelledby="contact-title">
	<div class="max-w-[1200px] w-full mx-auto px-5">
		<div class="text-center mb-12">
			<h1 class="text-5xl font-bold" data-translate="contact.title">Susisiekite su mumis</h1>
			<p class="mt-4 text-gray-600" data-translate="contact.subtitle">Pasiruošę atsakyti į jūsų klausimus ir aptarti projektus</p>
		</div>
		
		<!-- Centered Contact Form -->
		<div class="max-w-2xl mx-auto mb-20">
			<div class="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
				<h2 class="text-2xl font-semibold mb-6">Parašykite mums</h2>

				{#if success}
					<div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
						✅ Jūsų žinutė sėkmingai išsiųsta. Susisieksime su jumis artimiausiu metu.
					</div>
				{/if}

				{#if error}
					<div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
						❌ {error}
					</div>
				{/if}

				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 mb-1">
								Vardas Pavardė *
							</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								disabled={loading}
								class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
							/>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-1">
								El. paštas *
							</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								disabled={loading}
								class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
							/>
						</div>
					</div>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div>
							<label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
								Telefono numeris
							</label>
							<input
								type="tel"
								id="phone"
								bind:value={formData.phone}
								disabled={loading}
								class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
							/>
						</div>
						<div>
							<label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
								Tema *
							</label>
							<select
								id="subject"
								bind:value={formData.subject}
								required
								disabled={loading}
								class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
							>
								<option value="">Pasirinkite temą</option>
								{#each subjects as subject}
									<option value={subject}>{subject}</option>
								{/each}
							</select>
						</div>
					</div>
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-1">
							Žinutė *
						</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							disabled={loading}
							rows="5"
							class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
						></textarea>
					</div>
					<div class="text-right">
						<button
							type="submit"
							disabled={loading}
							class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
						>
							{#if loading}
								<svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
									<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
									<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
								</svg>
								<span>Siunčiama...</span>
							{:else}
								<span>Siųsti</span>
							{/if}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<!-- Additional Information Section -->
<section class="bg-white py-20">
	<div class="max-w-[1200px] mx-auto px-5">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- Company Info -->
			<div class="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
				<h2 class="text-2xl font-semibold mb-6">Kontaktinė informacija</h2>
				<div class="space-y-4">
					<div class="flex items-start">
						<div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium">{data.contactInfo.companyName}</h3>
							<p class="text-gray-600">{data.contactInfo.address}</p>
						</div>
					</div>
					<div class="flex items-start">
						<div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium">Telefonas</h3>
							<a href={`tel:${data.contactInfo.phone}`} class="text-blue-600 hover:text-blue-800">
								{data.contactInfo.phone}
							</a>
						</div>
					</div>
					<div class="flex items-start">
						<div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium">El. paštas</h3>
							<a href={`mailto:${data.contactInfo.email}`} class="text-blue-600 hover:text-blue-800">
								{data.contactInfo.email}
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Working Hours -->
			<div class="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
				<h2 class="text-2xl font-semibold mb-6">Darbo laikas</h2>
				<div class="space-y-4">
					{#each data.contactInfo.workingHours as { days, hours }}
						<div class="flex justify-between items-center">
							<span class="text-gray-600">{days}</span>
							<span class="font-medium">{hours}</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Social Media -->
			<div class="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
				<h2 class="text-2xl font-semibold mb-6">Socialiniai tinklai</h2>
				<div class="flex space-x-4">
					{#each data.contactInfo.socialMedia as { platform, url, icon }}
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
							title={platform}
						>
							{@html icon}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Map -->
		<div class="mt-8 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
			<h2 class="text-2xl font-semibold mb-6">Mūsų lokacija</h2>
			<div class="aspect-w-16 aspect-h-9">
				<iframe
					title="Location map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147636.3813106001!2d25.1799908!3d54.6870458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2sVilnius!5e0!3m2!1sen!2slt!4v1234567890"
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
		background-color: white;
	}
</style>