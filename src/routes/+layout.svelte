<script lang="ts">
  import MainHeader from "$lib/components/MainHeader.svelte";
  import { fly } from "svelte/transition";
  import "../app.css";
  import type { LayoutData } from "./$types";
	import HomeHeader from "$lib/components/HomeHeader.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Contacts from "$lib/components/Contacts.svelte";

  export let data: LayoutData;

  $: pagePath = data.pathname;
</script>

  <MainHeader />
  <HomeHeader />
  <Hero/>
  <Contacts/>
  <Footer/>
  {#key pagePath}
    <main
      in:fly={{ y: -15, duration: 200, delay: 300 }}
      out:fly={{ y: 15, duration: 200 }}
      class="pt-24 max-w-5xl mx-auto"
    >
      <slot />
    </main>
  {/key}
