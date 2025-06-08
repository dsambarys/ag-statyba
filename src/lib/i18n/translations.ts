type TranslationKey = {
    [key: string]: string | TranslationKey;
};

export const translations: Record<'en' | 'lt', TranslationKey> = {
    en: {
        contact: {
            title: 'Contact Us',
            subtitle: 'Ready to answer your questions and discuss projects',
            form: {
                title: 'Write to us',
                name: 'Full Name',
                email: 'Email',
                phone: 'Phone Number',
                subject: 'Subject',
                message: 'Message',
                send: 'Send',
                sending: 'Sending...',
                success: '✅ Your message has been sent successfully. We will contact you soon.',
            },
            info: {
                title: 'Contact Information',
                workingHours: 'Working Hours',
                socialMedia: 'Social Media',
                location: 'Our Location'
            },
            subjects: {
                'Namų projektavimas': 'House Design',
                'Statybos darbai': 'Construction Work',
                'Namo sąmata': 'House Estimate',
                'Interjero priežiūra': 'Interior Supervision',
                'Konsultacija': 'Consultation',
                'Kita': 'Other'
            }
        }
    },
    lt: {
        contact: {
            title: 'Susisiekite su mumis',
            subtitle: 'Pasiruošę atsakyti į jūsų klausimus ir aptarti projektus',
            form: {
                title: 'Parašykite mums',
                name: 'Vardas Pavardė',
                email: 'El. paštas',
                phone: 'Telefono numeris',
                subject: 'Tema',
                message: 'Žinutė',
                send: 'Siųsti',
                sending: 'Siunčiama...',
                success: '✅ Jūsų žinutė sėkmingai išsiųsta. Susisieksime su jumis artimiausiu metu.',
            },
            info: {
                title: 'Kontaktinė informacija',
                workingHours: 'Darbo laikas',
                socialMedia: 'Socialiniai tinklai',
                location: 'Mūsų lokacija'
            },
            subjects: {
                'Namų projektavimas': 'Namų projektavimas',
                'Statybos darbai': 'Statybos darbai',
                'Namo sąmata': 'Namo sąmata',
                'Interjero priežiūra': 'Interjero priežiūra',
                'Konsultacija': 'Konsultacija',
                'Kita': 'Kita'
            }
        }
    }
}; 