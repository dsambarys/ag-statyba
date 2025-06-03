<section class="py-20 bg-[#f9fafb]" role="region" aria-labelledby="contact-title">
        <div class="max-w-[1200px] mx-auto px-5 ">
            <div class="text-center mb-12">
                <h2 id="contact-title" data-translate="contact.title">Susisiekite su mumis</h2>
                <p data-translate="contact.subtitle">Pasiruošę atsakyti į jūsų klausimus ir aptarti projektus</p>
            </div>
            
            <div class="grid grid-cols-2 gap-16 items-start">
                <div>
                    <h3 class="text-2xl mb-4" data-translate="contact.info.title">Kontaktinė informacija</h3>
                    
                    <div class="flex items-center gap-4 mb-4">
                        <span class="contact-icon" aria-hidden="true">📍</span>
                        <div>
                            <strong data-translate="contact.info.address.label">Adresas:</strong><br>
                            <span data-translate="contact.info.address.value">Gedimino pr. 1, Vilnius</span>
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
                            <a href="mailto:dsambarys@gmail.com" data-translate="contact.info.email.value">dsambarys@gmail.com</a>
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
                                <input type="text" id="firstName" name="firstName" class="form-control" required aria-required="true">
                            </div>
                            <div class="mb-[1.5rem]">
                                <label class="block mb-[0.5rem] font-medium" for="lastName" data-translate="contact.form.lastName">Pavardė *</label>
                                <input type="text" id="lastName" name="lastName" class="form-control" required aria-required="true">
                            </div>
                        </div>
                        
                        <div class="mb-[1.5rem]">
                            <label class="block mb-[0.5rem] font-medium" for="email" data-translate="contact.form.email">El. paštas *</label>
                            <input type="email" id="email" name="email" class="form-control" required aria-required="true" aria-describedby="email-help">
                            <small id="email-help" class="sr-only">Įveskite galiojantį el. pašto adresą</small>
                        </div>
                        
                        <div class="mb-[1.5rem]">
                            <label class="block mb-[0.5rem] font-medium" for="phone" data-translate="contact.form.phone">Telefonas</label>
                            <input type="tel" id="phone" name="phone" class="form-control">
                        </div>
                        
                        <div class="mb-[1.5rem]">
                            <label class="block mb-[0.5rem] font-medium" for="serviceType" data-translate="contact.form.serviceType">Paslaugos tipas</label>
                            <select id="serviceType" name="serviceType" class="form-control">
                                <option value="" data-translate="contact.form.serviceType.select">Pasirinkite paslaugą</option>
                                <option value="construction" data-translate="contact.form.serviceType.construction">Nauja statyba</option>
                                <option value="renovation" data-translate="contact.form.serviceType.renovation">Renovacija</option>
                                <option value="consultation" data-translate="contact.form.serviceType.consultation">Konsultacijos</option>
                            </select>
                        </div>
                        
                        <div class="form-row">
                            <div class="mb-[1.5rem]">
                                <label for="location" data-translate="contact.form.location">Projekto vieta</label>
                                <input type="text" id="location" name="location" class="form-control">
                            </div>
                            <div class="mb-[1.5rem]">
                                <label for="budget" data-translate="contact.form.budget">Preliminarus biudžetas</label>
                                <select id="budget" name="budget" class="w-full p-3 border-2 border-gray-200 rounded-lg text-base transition-colors duration-300">
                                    <option value="" data-translate="contact.form.budget.select">Pasirinkite biudžetą</option>
                                    <option value="under-10k" data-translate="contact.form.budget.under10k">Iki 10.000€</option>
                                    <option value="10k-25k" data-translate="contact.form.budget.10k25k">10.000€ - 25.000€</option>
                                    <option value="25k-50k" data-translate="contact.form.budget.25k50k">25.000€ - 50.000€</option>
                                    <option value="50k-100k" data-translate="contact.form.budget.50k100k">50.000€ - 100.000€</option>
                                    <option value="over-100k" data-translate="contact.form.budget.over100k">Daugiau nei 100.000€</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="mb-[1.5rem]">
                            <label for="message" data-translate="contact.form.message">Žinutė *</label>
                            <textarea id="message" name="message" class="w-full p-3 border-2 border-gray-200 rounded-lg text-base transition-colors duration-300" required aria-required="true" placeholder="Aprašykite savo projektą ir poreikius..."></textarea>
                        </div>
                        
                        <div class="mb-[1.5rem]">
                            <label>
                                <input type="checkbox" id="privacy" name="privacy" required aria-required="true">
                                <span data-translate="contact.form.privacy">Sutinku su asmens duomenų tvarkymu *</span>
                            </label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary" data-translate="contact.form.submit">
                            <span class="btn-text">Siųsti užklausą</span>
                            <span class="loading" style="display: none;" aria-hidden="true"></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>