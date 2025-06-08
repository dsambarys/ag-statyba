<script lang="ts">
  export let src: string;
  export let alt: string;
  export let className = '';

  let error = false;
  const fallbackImage = '/images/placeholder-service.svg';

  function handleError() {
    error = true;
  }
</script>

<div class="relative overflow-hidden rounded-lg {className}">
  <img
    src={error ? fallbackImage : src}
    {alt}
    on:error={handleError}
    class="w-full h-full object-cover"
  />
  {#if error}
    <div class="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-90">
      <p class="text-gray-500 text-center px-4">
        {alt}
      </p>
    </div>
  {/if}
</div> 