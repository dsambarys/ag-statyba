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
                        <a href="mailto:agstatyba@hotmail.com" data-translate="contact.info.email.value">agstatyba@hotmail.com</a>
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
                <form id="contactForm" role="form" aria-labelledby="contact-form-title">
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