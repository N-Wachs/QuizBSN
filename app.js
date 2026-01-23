// Real Estate Management Website - JavaScript

// Sample property data
const properties = [
    {
        id: 1,
        title: "Moderne Stadtwohnung",
        location: "Berlin Mitte",
        type: "wohnung",
        status: "verfuegbar",
        price: "1.200€",
        rooms: 3,
        area: 85,
        icon: "🏢",
        description: "Moderne 3-Zimmer-Wohnung im Herzen von Berlin. Mit hochwertiger Ausstattung und Balkon."
    },
    {
        id: 2,
        title: "Einfamilienhaus mit Garten",
        location: "Hamburg Blankenese",
        type: "haus",
        status: "verfuegbar",
        price: "2.800€",
        rooms: 5,
        area: 150,
        icon: "🏠",
        description: "Geräumiges Einfamilienhaus mit großem Garten, perfekt für Familien."
    },
    {
        id: 3,
        title: "Bürofläche im Zentrum",
        location: "München Innenstadt",
        type: "buero",
        status: "vermietet",
        price: "3.500€",
        rooms: 6,
        area: 200,
        icon: "🏢",
        description: "Moderne Bürofläche in zentraler Lage mit guter Anbindung."
    },
    {
        id: 4,
        title: "Luxus-Penthouse",
        location: "Frankfurt Westend",
        type: "wohnung",
        status: "verfuegbar",
        price: "3.200€",
        rooms: 4,
        area: 120,
        icon: "🏙️",
        description: "Exklusives Penthouse mit Dachterrasse und herrlichem Ausblick."
    },
    {
        id: 5,
        title: "Gewerbefläche",
        location: "Köln Deutz",
        type: "gewerbe",
        status: "verfuegbar",
        price: "2.200€",
        rooms: 4,
        area: 180,
        icon: "🏪",
        description: "Vielseitig nutzbare Gewerbefläche in verkehrsgünstiger Lage."
    },
    {
        id: 6,
        title: "Charmante Altbauwohnung",
        location: "Stuttgart Mitte",
        type: "wohnung",
        status: "vermietet",
        price: "1.400€",
        rooms: 3,
        area: 95,
        icon: "🏛️",
        description: "Wunderschöne Altbauwohnung mit hohen Decken und Stuck."
    },
    {
        id: 7,
        title: "Neubau Reihenhaus",
        location: "Düsseldorf Oberkassel",
        type: "haus",
        status: "verfuegbar",
        price: "2.500€",
        rooms: 4,
        area: 130,
        icon: "🏘️",
        description: "Modernes Reihenhaus in ruhiger Wohnlage mit Garten."
    },
    {
        id: 8,
        title: "Moderne Büroeinheit",
        location: "Leipzig Zentrum",
        type: "buero",
        status: "verfuegbar",
        price: "1.800€",
        rooms: 5,
        area: 140,
        icon: "🏢",
        description: "Helle Büroräume mit moderner Ausstattung und Parkplätzen."
    }
];

let allProperties = [...properties];
let filteredProperties = [...properties];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayProperties(filteredProperties);
    initializeEventListeners();
    initializeNavigation();
});

// Display properties on the page
function displayProperties(propertiesToDisplay) {
    const grid = document.getElementById('properties-grid');
    grid.innerHTML = '';

    if (propertiesToDisplay.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: var(--text-light); font-size: 1.2rem;">Keine Immobilien gefunden.</p>';
        return;
    }

    propertiesToDisplay.forEach(property => {
        const card = createPropertyCard(property);
        grid.appendChild(card);
    });
}

// Create property card element
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.onclick = () => showPropertyDetails(property);

    card.innerHTML = `
        <div class="property-image">${property.icon}</div>
        <div class="property-info">
            <h3 class="property-title">${property.title}</h3>
            <p class="property-location">📍 ${property.location}</p>
            <div class="property-details">
                <span class="property-detail">🛏️ ${property.rooms} Zimmer</span>
                <span class="property-detail">📐 ${property.area} m²</span>
            </div>
            <p class="property-price">${property.price}/Monat</p>
            <span class="property-status status-${property.status}">
                ${property.status === 'verfuegbar' ? 'Verfügbar' : 'Vermietet'}
            </span>
        </div>
    `;

    return card;
}

// Show property details in modal
function showPropertyDetails(property) {
    const modal = document.getElementById('property-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <h2 class="modal-property-title">${property.title}</h2>
        <div class="modal-property-image">${property.icon}</div>
        <div class="modal-property-details">
            <h3>Details</h3>
            <p><strong>Standort:</strong> ${property.location}</p>
            <p><strong>Typ:</strong> ${capitalizeFirst(property.type)}</p>
            <p><strong>Zimmer:</strong> ${property.rooms}</p>
            <p><strong>Fläche:</strong> ${property.area} m²</p>
            <p><strong>Preis:</strong> ${property.price}/Monat</p>
            <p><strong>Status:</strong> ${property.status === 'verfuegbar' ? 'Verfügbar' : 'Vermietet'}</p>
            <h3>Beschreibung</h3>
            <p>${property.description}</p>
        </div>
        <button class="btn btn-primary" onclick="contactAboutProperty('${property.title}')">
            Anfrage senden
        </button>
    `;

    modal.style.display = 'block';
}

// Filter properties based on search and filters
function filterProperties() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const typeFilter = document.getElementById('type-filter').value;
    const statusFilter = document.getElementById('status-filter').value;

    filteredProperties = allProperties.filter(property => {
        const matchesSearch = property.title.toLowerCase().includes(searchTerm) ||
                            property.location.toLowerCase().includes(searchTerm) ||
                            property.type.toLowerCase().includes(searchTerm);
        
        const matchesType = typeFilter === 'all' || property.type === typeFilter;
        const matchesStatus = statusFilter === 'all' || property.status === statusFilter;

        return matchesSearch && matchesType && matchesStatus;
    });

    displayProperties(filteredProperties);
}

// Initialize event listeners
function initializeEventListeners() {
    // Search input - filter on typing
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', filterProperties);

    // Modal close button
    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = () => {
        document.getElementById('property-modal').style.display = 'none';
    };

    // Close modal when clicking outside
    window.onclick = (event) => {
        const modal = document.getElementById('property-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleContactForm);
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // In a real application, this would send data to a server
    alert(`Vielen Dank für Ihre Anfrage, ${name}!\n\nWir werden uns in Kürze bei Ihnen melden.`);
    
    // Reset form
    e.target.reset();
}

// Contact about specific property
function contactAboutProperty(propertyTitle) {
    // Close modal
    document.getElementById('property-modal').style.display = 'none';
    
    // Scroll to contact section
    scrollToSection('contact');
    
    // Pre-fill message
    const messageField = document.getElementById('message');
    messageField.value = `Ich interessiere mich für die Immobilie: ${propertyTitle}\n\nBitte kontaktieren Sie mich für weitere Informationen.`;
    messageField.focus();
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Scroll to section
            scrollToSection(targetId);
        });
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Utility function to capitalize first letter
function capitalizeFirst(str) {
    const typeNames = {
        'wohnung': 'Wohnung',
        'haus': 'Haus',
        'buero': 'Büro',
        'gewerbe': 'Gewerbe'
    };
    return typeNames[str] || str.charAt(0).toUpperCase() + str.slice(1);
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = ['home', 'properties', 'services', 'contact'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        }
    });
});
