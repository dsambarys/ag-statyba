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
  $: showHomeComponents = data.showHomeComponents;
  $: hideMainHeader = data.hideMainHeader;
</script>

{#if !hideMainHeader}
  <MainHeader />
{/if}

{#if showHomeComponents}
  <HomeHeader />
  <Hero/>
  <Contacts/>
{/if}

{#key pagePath}
  <main
    in:fly={{ y: -15, duration: 200, delay: 300 }}
    out:fly={{ y: 15, duration: 200 }}
    class={`${hideMainHeader ? 'pt-0' : 'pt-24'} min-h-screen`}
  >
    <slot />
  </main>
{/key}

<Footer/>
