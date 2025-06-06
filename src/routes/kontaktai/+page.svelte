<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";

    let name = '';
  let email = '';
  let message = '';
  let success = false;

  const handleSubmit = async () => {
    const query = `
      mutation SubmitContactForm($name: String!, $email: String!, $message: String!) {
        submitContactForm(name: $name, email: $email, message: $message)
      }
    `;

    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { name, email, message },
      }),
    });

    const result = await response.json();

    if (result.data?.submitContactForm) {
      success = true;
      name = email = message = '';
    } else {
      alert('Pateikti kontaktų kredencialus nepavyko');
    }
  };
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
                <a href="/paslaugos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                    Paslaugos
                </a>
                <div class="absolute hidden group-hover:block bg-gray-50 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg">
                    <a href="/paslaugos/staybos-darbai" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Statybos darbai</a>
                    <a href="/paslaugos/namu-projektavimas" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų projektavimas</a>
                    <a href="/paslaugos/interjero-prieziura" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Interjero dizainas</a>
                    <a href="/paslaugos/autorine-prieziura" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Autorinė priežiūra</a>
                    <a href="/paslaugos/konsultacija" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Konsultacija</a>
                    <a href="/paslaugos/namo-samata" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namo sąmata</a>
                    <a href="/paslaugos/kitos-paslaugos" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Kitos paslaugos</a>
                </div>
            </div>
            <div class="relative group">
                <a href="/portfolio" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                    Portfolio
                </a>
                <div class="absolute hidden group-hover:block bg-gray-50 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg">
                    <a href="/portfolio/namu-projektai" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų projektai</a>
                    <a href="/portfolio/namu-interjerai" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų interjerai</a>
                </div>
            </div>
            <a href="/sip-namai" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                SIP namai
            </a>
            <a href="/kainos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Kainos
            </a>
            <a href="/konsultacijos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Konsultacijos
            </a>
            <a href="/kontaktai" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Kontaktai
            </a>
        </div>
    </nav>
</header>
        <!-- end of navbar  -->

        <!-- header -->
        <header class = "flex header-sm">
            <div class = "container">
                <div class = "header-title">
                    <h1>Kontaktai</h1>
                </div>
            </div>
        </header>
        <!-- header -->

        <!-- contact section -->
        <section class="py-20 bg-[#f9fafb]" aria-labelledby="contact-title">
    <div class="max-w-[1200px] mx-auto px-5 ">
        <div class="text-center mb-12">
            <h2 class="text-5xl font-bold" data-translate="contact.title">Susisiekite su mumis</h2>
            <p data-translate="contact.subtitle">Pasiruošę atsakyti į jūsų klausimus ir aptarti projektus</p>
        </div>
        
        <div class="grid grid-cols-2 gap-16 items-start">
            <div>
                <h3 class="text-2xl mb-4" data-translate="contact.info.title">Kontaktinė informacija</h3>
                
                <div class="flex items-center gap-4 mb-4">
                    <span class="contact-icon" aria-hidden="true">📍</span>
                    <div>
                        <strong data-translate="contact.info.address.label">Adresas:</strong><br>
                        <span data-translate="contact.info.address.value">Baltijos pr. 7-76, Klaipėda</span>
                    </div>
                </div>
                
                <div class="flex items-center gap-4 mb-4">
                    <span class="text-lg text-[#1d4ed8]" aria-hidden="true">📞</span>
                    <div>
                        <strong data-translate="contact.info.phone.label">Telefonas:</strong><br>
                        <a href="tel:+37068142619" data-translate="contact.info.phone.value">+370 681 42619</a>
                    </div>
                </div>
                
                <div class="flex items-center gap-4 mb-4">
                    <span class="text-lg text-[#1d4ed8]" aria-hidden="true">✉️</span>
                    <div>
                        <strong data-translate="contact.info.email.label">El. paštas:</strong><br>
                        <a href="mailto:dsambarys@gmail.com" data-translate="contact.info.email.value">test@agstatyba.lt</a>
                    </div>
                </div>
                
                <div class="flex items-center gap-4 mb-4">
                    <span class="text-lg text-[#1d4ed8]" aria-hidden="true">🕐</span>
                    <div>
                        <strong data-translate="contact.info.hours.label">Darbo laikas:</strong><br>
                        <span data-translate="contact.info.hours.value">Pr-Pt: 8:00-18:00<br>Št: 9:00-15:00</span>
                    </div>
                </div>
            </div>
            
            <div class="contact-form">
                <form id="contactForm" aria-labelledby="contact-form-title">
                    <h3 id="contact-form-title" data-translate="contact.form.title">Susisiekimo forma</h3>
                    
                    <div class="form-row">
                        <div class="mb-[1.5rem]">
                            <label class="block mb-[0.5rem] font-medium" for="firstName" data-translate="contact.form.firstName">Vardas *</label>
                            <input type="text" id="firstName" name="firstName" class="w-full p-3 border-2 border-[#e5e7eb] rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-[#2563eb]" required aria-required="true">
                        </div>
                        <div class="mb-[1.5rem]">
                            <label class="block mb-[0.5rem] font-medium" for="lastName" data-translate="contact.form.lastName">Pavardė *</label>
                            <input type="text" id="lastName" name="lastName" class="w-full p-3 border-2 border-[#e5e7eb] rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-[#2563eb]" required aria-required="true">
                        </div>
                    </div>
                    
                    <div class="mb-[1.5rem]">
                        <label class="block mb-[0.5rem] font-medium" for="email" data-translate="contact.form.email">El. paštas *</label>
                        <input type="email" id="email" name="email" class="w-full p-3 border-2 border-[#e5e7eb] rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-[#2563eb]" required aria-required="true" aria-describedby="email-help">
                        <small id="email-help" class="absolute w-px h-px p-0 m-[-1px] overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0">Įveskite galiojantį el. pašto adresą</small>
                    </div>
                    
                    <div class="mb-[1.5rem]">
                        <label class="block mb-[0.5rem] font-medium" for="phone" data-translate="contact.form.phone">Telefonas</label>
                        <input type="tel" id="phone" name="phone" class="w-full p-3 border-2 border-[#e5e7eb] rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-[#2563eb]">
                    </div>        
                    <div class="mb-[1.5rem]">
                        <label for="message" data-translate="contact.form.message">Žinutė *</label>
                        <textarea id="message" name="message" class="w-full p-3 border-2 border-[#e5e7eb] rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-[#2563eb]" required aria-required="true" placeholder="Aprašykite savo projektą ir poreikius..."></textarea>
                    </div>
                    
                    <div class="mb-[1.5rem]">
                        <label>
                            <input type="checkbox" id="privacy" name="privacy" required aria-required="true">
                            <span data-translate="contact.form.privacy">Sutinku su asmens duomenų tvarkymu *</span>
                        </label>
                    </div>
                    
                    <button type="submit" class="btn btn-primary px-6 py-3 rounded-lg no-underline font-semibold transition-all duration-300 border-0 cursor-pointer inline-flex items-center gap-2 bg-[#f59e0b] text-white hover:bg-[#d97706] hover:-translate-y-0.5" data-translate="contact.form.submit">
                        <span>Siųsti užklausą</span>
                        <span style="display: none;" aria-hidden="true"></span>
                    </button>
                </form>
            </div>
        </div>
    </div>
        </section>
        {#if success}
    <p>✅ Kontaktų kredencialai sėkmingai atsiųsti</p>
  {/if}
        <!-- end of contact section -->
        

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