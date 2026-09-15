/* ======================
       1. Dark Mode
 ========================*/

const ecoBtn = document.getElementById('eco-toggle');
const body = document.body;

ecoBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        ecoBtn.textContent = '☀️ Light Mode';
        ecoBtn.setAttribute('aria-label', 'Attiva la modalità chiara');
    } else {
        ecoBtn.textContent = '🌙 Eco Mode';
        ecoBtn.setAttribute('aria-label', 'Attiva la modalità scura');
    }
});

/* ================================
         2.   Cambio Lingua 
 ================================*/
const langBtn = document.getElementById('lang-toggle');
let currentLang = 'it';

const translations = {
    it: {
        "nav-chi-siamo": "Chi Siamo",
        "nav-azioni": "Le nostre azioni",
        "nav-dashboard": "Dashboard ESG",
        "nav-focus": "Focus & Innovazione",
        "nav-download": "Area Download",
        "hero-title": "L'Agricoltura del Futuro è Sostenibile",
        "hero-text": "Innovazione, tecnologia e rispetto per la terra: scopri l'impegno di Bonifiche Ferraresi per la tutela del nostro ecosistema.",
        "btn-pause-video": "⏸ Pausa Video",
        "btn-play-video": "▶ Riproduci Video",
        "pillars-title": "I nostri pilastri ambientali",
        "card1-title": "🌍 Agricoltura di Precisione",
        "card1-text": "Utilizziamo droni e mappatura satellitare (Smart Farming) per ottimizzare le risorse, riducendo gli sprechi e l'impatto chimico sul suolo.",
        "card2-title": "💧 Risparmio Idrico",
        "card2-text": "Attraverso reti di sub-irrigazione e sensori IoT, garantiamo l'efficienza idrica, minimizzando l'evaporazione e tutelando le falde acquifere.",
        "card3-title": "🌱 Carbon Footprint",
        "card3-text": "Adottiamo pratiche di minima lavorazione del terreno per favorire il sequestro del carbonio e ridurre le emissioni dei mezzi agricoli.",
        "kpi-section-title": "I Nostri Numeri per l'Ambiente",
        "kpi-section-text": "I dati ufficiali estratti dalle ultime rendicontazioni di sostenibilità del Gruppo.",
        "unit-hectares": "Ettari",
        "kpi1-title": "Smart Farming",
        "kpi1-text": "Superficie gestita con mappatura e agricoltura di precisione.",
        "kpi2-title": "Risparmio Chimico",
        "kpi2-text": "Riduzione di fertilizzanti e concimi grazie ai modelli DSS.",
        "kpi3-title": "Biodiversità",
        "kpi3-text": "Terreni aziendali dedicati ad aree naturali e cover crops.",
        "carousel-title": "Focus Tecnologici ed Economia Circolare",
        "carousel-text": "Esplora le soluzioni avanzate applicate lungo l'intera filiera agro-industriale.",
        "tag-inn": "Innovazione",
        "scard1-title": "Droni & Satelliti",
        "scard1-text": "Mappatura multispettrale in tempo reale per monitorare lo stress idrico e lo stato di salute delle colture estensive.",
        "tag-res": "Risorse",
        "scard2-title": "Sub-irrigazione IoT",
        "scard2-text": "Sistemi interrati ad altissima efficienza che azzerano l'evaporazione e proteggono le falde acquifere sotterranee.",
        "tag-circ": "Circolarità",
        "scard3-title": "Biometano da Scarti",
        "scard3-text": "Valorizzazione dei sottoprodotti zootecnici e agricoli per la produzione di energia pulita e 100% rinnovabile.",
        "tag-agro": "Agroecologia",
        "scard4-title": "Cover Crops",
        "scard4-text": "Tecniche colturali tradizionali riscoperte per incrementare la sostanza organica e il sequestro naturale del carbonio nel suolo.",
        "tag-cert": "Certificazioni",
        "scard5-title": "Standard EPD & ISO",
        "scard5-text": "Trasparenza totale certificata da enti terzi indipendenti sull'intero ciclo di vita (LCA) dei prodotti a marchio.",
        "download-title": "Archivio Bilanci e Rendicontazioni ESG",
        "download-text": "Consulta e scarica la documentazione di sostenibilità e i report consolidati storici del Gruppo Bonifiche Ferraresi.",
        "rep2025-desc": "Ultima rendicontazione integrata (DNF).",
        "rep2024-desc": "Rendicontazione consolidata precedente.",
        "rep2023-desc": "Storico di conformità ESG.",
        "btn-dl": "⬇ Scarica PDF",
        "footer-sub": "Sede Legale: Via Nazionale 5, Roma | Investor Relations & ESG Compliance"
    },
    en: {
        "nav-chi-siamo": "About Us",
        "nav-azioni": "Our Actions",
        "nav-dashboard": "ESG Dashboard",
        "nav-focus": "Focus & Innovation",
        "nav-download": "Download Area",
        "hero-title": "The Agriculture of the Future is Sustainable",
        "hero-text": "Innovation, technology and respect for the land: discover Bonifiche Ferraresi's commitment to protecting our ecosystem.",
        "btn-pause-video": "⏸ Pause Video",
        "btn-play-video": "▶ Play Video",
        "pillars-title": "Our Environmental Pillars",
        "card1-title": "🌍 Precision Farming",
        "card1-text": "We use drones and satellite mapping (Smart Farming) to optimize resources, reducing waste and chemical impact on the soil.",
        "card2-title": "💧 Water Saving",
        "card2-text": "Through sub-irrigation networks and IoT sensors, we guarantee water efficiency, minimizing evaporation and protecting aquifers.",
        "card3-title": "🌱 Carbon Footprint",
        "card3-text": "We adopt minimal tillage practices to promote carbon sequestration and reduce agricultural machinery emissions.",
        "kpi-section-title": "Our Numbers for the Environment",
        "kpi-section-text": "Official data extracted from the Group's latest sustainability reports.",
        "unit-hectares": "Hectares",
        "kpi1-title": "Smart Farming",
        "kpi1-text": "Area managed with mapping and precision agriculture.",
        "kpi2-title": "Chemical Saving",
        "kpi2-text": "Reduction of fertilizers and manures thanks to DSS models.",
        "kpi3-title": "Biodiversity",
        "kpi3-text": "Company land dedicated to natural areas and cover crops.",
        "carousel-title": "Technological Focus & Circular Economy",
        "carousel-text": "Explore advanced solutions applied along the entire agri-food supply chain.",
        "tag-inn": "Innovation",
        "scard1-title": "Drones & Satellites",
        "scard1-text": "Real-time multispectral mapping to monitor water stress and the health status of extensive crops.",
        "tag-res": "Resources",
        "scard2-title": "IoT Sub-irrigation",
        "scard2-text": "High-efficiency underground systems that eliminate evaporation and protect underground aquifers.",
        "tag-circ": "Circolarità",
        "scard3-title": "Biomethane from Waste",
        "scard3-text": "Valorization of livestock and agricultural by-products for clean, 100% renewable energy production.",
        "tag-agro": "Agroecology",
        "scard4-title": "Cover Crops",
        "scard4-text": "Rediscovered traditional cultivation techniques to increase organic matter and natural carbon sequestration in the soil.",
        "tag-cert": "Certifications",
        "scard5-title": "EPD & ISO Standards",
        "scard5-text": "Total transparency certified by independent third parties on the entire life cycle (LCA) of branded products.",
        "download-title": "ESG Reports & Financial Archive",
        "download-text": "Consult and download the sustainability documentation and historical consolidated reports of the Bonifiche Ferraresi Group.",
        "rep2025-desc": "Latest integrated reporting (NFR).",
        "rep2024-desc": "Previous consolidated reporting.",
        "rep2023-desc": "ESG compliance history.",
        "btn-dl": "⬇ Download PDF",
        "footer-sub": "Registered Office: Via Nazionale 5, Rome | Investor Relations & ESG Compliance"
    }
};

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'it' ? 'en' : 'it';
    langBtn.textContent = currentLang === 'it' ? '🌐 EN' : '🌐 IT';
    langBtn.setAttribute('aria-label', currentLang === 'it' ? 'Change language to English' : 'Cambia lingua in Italiano');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
});

/* ==========================================
 3. Header Dinamico 
 ==========================================*/

const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/*==========================================
    4. Animazioni allo Scorrimento
========================================*/
const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px" 
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

reveals.forEach(reveal => {
    revealOnScroll.observe(reveal);
});

/* ==========================================
 5. Logica per Play/Pausa del Video Background
 ==========================================*/

const video = document.getElementById('bg-video');
const videoBtn = document.getElementById('video-toggle');

videoBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        videoBtn.setAttribute('data-i18n', 'btn-pause-video');
        videoBtn.textContent = currentLang === 'it' ? '⏸ Pausa Video' : '⏸ Pause Video';
    } else {
        video.pause();
        videoBtn.setAttribute('data-i18n', 'btn-play-video');
        videoBtn.textContent = currentLang === 'it' ? '▶ Riproduci Video' : '▶ Play Video';
    }
});

/* ==========================================
 6. Feedback visivo per il Download dell'Archivio ESG
 ==========================================*/

const downloadButtons = document.querySelectorAll('.btn-download');

downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        alert(currentLang === 'it' 
            ? "Grazie per aver scaricato la documentazione di sostenibilità di Bonifiche Ferraresi S.p.A. Il download è stato avviato!" 
            : "Thank you for downloading the Bonifiche Ferraresi S.p.A. sustainability documentation. The download has started!");
    });
});

/* ==========================================
 7. Animazione Contatori KPI (Dashboard)
==========================================*/

const kpiSection = document.getElementById('dashboard');
const kpiNumbers = document.querySelectorAll('.kpi-number');
let animated = false;

const runCounters = () => {
    kpiNumbers.forEach(num => {
        const target = +num.getAttribute('data-target');
        let count = 0;
        const speed = target / 50; 
        
        const updateCount = () => {
            count += speed;
            if (count < target) {
                num.innerText = Math.ceil(count).toLocaleString();
                setTimeout(updateCount, 30);
            } else {
                num.innerText = target.toLocaleString();
            }
        };
        updateCount();
    });
};

const kpiObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
            runCounters();
            animated = true;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (kpiSection) {
    kpiObserver.observe(kpiSection);
}

/* ==========================================
 8. Logica Carosello 3D con Pulsanti di scorrimento (Loop Continuo)
 ==========================================*/

const carousel = document.getElementById('cardCarousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (carousel && prevBtn && nextBtn) {
    // Calcola dinamicamente lo spazio di scorrimento (larghezza card + gap)
    const getScrollAmount = () => {
        const card = carousel.querySelector('.scrolling-card');
        return card ? card.offsetWidth + 30 : 350;
    };

    nextBtn.addEventListener('click', () => {
        // Calcola il limite massimo di scorrimento del contenitore
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        
        // Se siamo arrivati all'ultima card (con una piccola tolleranza di 10px)
        if (carousel.scrollLeft >= maxScrollLeft - 10) {
            // Riavvolgi fluidamente tornando alla prima card
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Altrimenti scorri normalmente alla prossima
            carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        }
    });

    prevBtn.addEventListener('click', () => {
        // Se siamo alla primissima card
        if (carousel.scrollLeft <= 10) {
            // Salta fluidamente all'ultima card
            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
            carousel.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
            // Altrimenti scorri normalmente indietro
            carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        }
    });
}

/* ==========================================
 9. Logica Hamburger Menu & Sidebar Mobile
 ==========================================*/

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu ul li a");

if (hamburger && navMenu) {
    // 1. Apri/Chiudi sidebar al click sull'icona hamburger
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // 2. Chiudi la sidebar automaticamente quando clicchi su un link del menu
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

/* ==========================================
 10. Bottone "Torna Su" (Back to top)
 ==========================================*/
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    // Mostra il bottone dopo aver fatto 300px di scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Cliccando il bottone, torna su in modo fluido
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
