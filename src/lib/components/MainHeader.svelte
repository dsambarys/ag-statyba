<script lang="ts">
	import Logo from "./svg/Logo.svelte";
	import DarkmodeButton from "./DarkmodeButton.svelte";


</script>

<header class="fixed z-10 top-0 inset-x-0 border-b bg-white dark:bg-dark-background dark:border-gray-800">
		<nav class="flex items-center justify-between max-w-5xl mx-auto px-4 h-24">
			<a href="/" class="flex items-center gap-2 font-bold">
				<Logo className="w-12 h-12" />
				<span class="text-black">agstatyba.lt</span>
			</a>
			<div class="flex space-x-1 items-center">
				
				<a class="p-2 rounded-lg text-gray-700 hover:bg-gray-1" href="/apie" target="_blank">
					Apie
				</a>
				<a class="p-2 rounded-lg text-gray-700 hover:bg-gray-1" href="/paslaugos" target="_blank">
					Paslaugos
				</a>
				<a class="p-2 rounded-lg text-gray-700 hover:bg-gray-1" href="/projektai" target="_blank">
					Portfolio
				</a>
				<a class="p-2 rounded-lg text-gray-700 hover:bg-gray-1" href="/kontaktai" target="_blank">
					Kontaktai
				</a>
				<DarkmodeButton/>
			</div>
		</nav>
	</header>