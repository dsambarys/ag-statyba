<script lang="ts">;
    import Logo from "./svg/Logo.svelte";
</script>

<header class="fixed z-10 top-0 w-full shadow-md inset-x-0 border-b bg-white dark:bg-dark-background dark:border-gray-800">
    <nav class="flex items-center justify-between max-w-5xl mx-auto px-4 h-24">
        <a href="/" class="flex items-center gap-2 font-bold">
            <Logo className="w-12 h-12" />
            <span class="text-black ">agstatyba.lt</span>
        </a>
        <div class="flex space-x-1 items-center">
            <!-- Dropdown for Paslaugos -->
            <div class="relative group">
                <a href="/routes/paslaugos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                    Paslaugos
                </a>
                <div class="absolute hidden group-hover:block bg-gray-50 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg">
					<a href="#" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Statybos darbai</a>
                    <a href="#" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų projektavimas</a>
                    <a href="#" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Interjero dizainas</a>
                    <a href="#" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Autorinė priežiūra</a>
                    <a href="#" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Konsultacija</a>
                    <a href="#" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namo sąmata</a>
                    <a href="#" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Kitos paslaugos</a>
                </div>
            </div>
			<div class="relative group">
				<a href="/routes/portfolio" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
					Portfolio
				</a>
				<div class="absolute hidden group-hover:block bg-gray-50 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg">
					<a href="#" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų projektai</a>
					<a href="#" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų interjerai</a>
				</div>
			</div>
            <a href="/routes/sip-namai" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                SIP namai
            </a>
            <a href="/routes/kainos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Kainos
            </a>
            <a href="/routes/konsultacijos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Konsultacijos
            </a>
            <a href="/routes/kontaktai" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Kontaktai
            </a>
        </div>
    </nav>
</header>