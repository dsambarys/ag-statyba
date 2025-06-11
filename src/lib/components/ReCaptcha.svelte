<script lang="ts">
    import { onMount } from 'svelte';
    import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';

    export let onVerify: (token: string) => void;
    export let onExpire: () => void;
    export let onError: () => void;

    let recaptchaContainer: HTMLDivElement;
    let recaptchaId: number;

    onMount(() => {
        // Load reCAPTCHA script
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            // Initialize reCAPTCHA
            recaptchaId = grecaptcha.render(recaptchaContainer, {
                sitekey: PUBLIC_RECAPTCHA_SITE_KEY,
                callback: onVerify,
                'expired-callback': onExpire,
                'error-callback': onError,
                theme: 'light',
                size: 'normal'
            });
        };
    });
</script>

<div class="recaptcha-container" bind:this={recaptchaContainer}></div>

<style>
    .recaptcha-container {
        margin: 1rem 0;
        display: flex;
        justify-content: center;
    }
</style> 