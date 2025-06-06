<script lang="ts">
	export let data;

	let formData = {
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	};

	const subjects = [
		'Namų projektavimas',
		'Statybos darbai',
		'Namo sąmata',
		'Interjero priežiūra',
		'Konsultacija',
		'Kita'
	];

	const handleSubmit = () => {
		// Here you would typically handle form submission
		console.log('Form submitted:', formData);
		// Reset form after submission
		formData = {
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: ''
		};
	};
</script>

<!-- contact section -->
<section class="py-20 bg-[#f9fafb]" aria-labelledby="contact-title">
	<div class="max-w-[1200px] mx-auto px-5 ">
		<div class="text-center mb-12">
			<h1 class="text-5xl font-bold" data-translate="contact.title">Susisiekite su mumis</h1>
			<p data-translate="contact.subtitle">Pasiruošę atsakyti į jūsų klausimus ir aptarti projektus</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
			<!-- Contact Form -->
			<div class="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
				<h2 class="text-2xl font-semibold mb-6">Parašykite mums</h2>
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
								class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
								class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
								class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
								class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
							rows="5"
							class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						></textarea>
					</div>
					<div class="text-right">
						<button
							type="submit"
							class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							Siųsti
						</button>
					</div>
				</form>
			</div>

			<!-- Contact Information -->
			<div class="space-y-8">
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
		</div>

		<!-- Map -->
		<div class="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
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
{#if success}
	<p>✅ Kontaktų kredencialai sėkmingai atsiųsti</p>
{/if}

<!-- footer -->
<footer class="bg-[#1f2937] text-white py-12 pb-4">
	<div class="max-w-[1200px] mx-auto px-5">
		<div class="grid gap-8 mb-8" style="grid-template-columns:repeat(auto-fit,minmax(250px,1fr));">
			<div class="footer-section">
				<h3 class="mb-4 text-[var(--secondary-color)]">AGStatyba</h3>
				<p data-translate="footer.description">Profesionalios statybų paslaugos. Kokybiški sprendimai jūsų projektams.</p>
			</div>
		</div>
		
		<div class="footer-bottom text-center pt-8 border-t border-[#374151] opacity-80">
			<p>&copy; 2026 AGStatyba. <span data-translate="footer.rights">Visos teisės saugomos.</span></p>
		</div>
	</div>
</footer>