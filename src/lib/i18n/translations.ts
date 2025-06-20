type TranslationKey = {
    [key: string]: string | TranslationKey;
};

export const translations: Record<'en' | 'lt', TranslationKey> = {
    en: {
        common: {
            switchLanguage: 'Switch Language',
            toggleTheme: 'Toggle Theme'
        },
        nav: {
            services: 'Services',
            portfolio: 'Portfolio',
            sip_houses: 'SIP Houses',
            prices: 'Prices',
            contacts: 'Contacts',
            services_submenu: {
                construction: 'Construction Work',
                house_design: 'House Design',
                interior_design: 'Interior Design',
                author_supervision: 'Author Supervision',
                consultations: 'Consultations',
                house_estimate: 'House Estimate',
                other_services: 'Other Services'
            },
            portfolio_submenu: {
                house_projects: 'House Projects',
                house_interiors: 'House Interiors'
            }
        },
        projects: {
            title: 'Projects',
            specifications: 'Specifications',
            area: 'Area',
            rooms: 'Rooms',
            floors: 'Floors',
            roof: 'Roof Type',
            dimensions: 'Dimensions',
            garage: 'Garage',
            view_details: 'View Details',
            contact_us: 'Contact Us',
            call_us: 'Call Us'
        },
        portfolio: {
            title: 'Our Portfolio'
        },
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
        common: {
            switchLanguage: 'Pakeisti Kalbą',
            toggleTheme: 'Pakeisti Temą'
        },
        nav: {
            services: 'Paslaugos',
            portfolio: 'Portfolio',
            sip_houses: 'SIP namai',
            prices: 'Kainos',
            contacts: 'Kontaktai',
            services_submenu: {
                construction: 'Statybos darbai',
                house_design: 'Namų projektavimas',
                interior_design: 'Interjero dizainas',
                author_supervision: 'Autorinė priežiūra',
                consultations: 'Konsultacijos',
                house_estimate: 'Namo sąmata',
                other_services: 'Kitos paslaugos'
            },
            portfolio_submenu: {
                house_projects: 'Namų projektai',
                house_interiors: 'Namų interjerai'
            }
        },
        projects: {
            title: 'Projektai',
            specifications: 'Specifikacijos',
            area: 'Plotas',
            rooms: 'Kambariai',
            floors: 'Aukštai',
            roof: 'Stogo tipas',
            dimensions: 'Matmenys',
            garage: 'Garažas',
            view_details: 'Peržiūrėti',
            contact_us: 'Susisiekite',
            call_us: 'Skambinkite'
        },
        portfolio: {
            title: 'Mūsų Portfolio'
        },
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