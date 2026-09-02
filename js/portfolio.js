/* ==========================================================================
   ARCHITECTURE INTERIOR DESIGN — PORTFOLIO DATA & LIGHTBOX MODULE
   ========================================================================== */

const portfolioProjects = [
  {
    id: 'res-1',
    title: 'Modern Cantilevered Villa',
    category: 'residential',
    categoryLabel: 'Residential Design',
    location: 'Karachi, Pakistan',
    tag: 'Featured Concept',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    spanClass: 'col-span-8',
    description: 'A striking multi-level modern residence featuring cantilevered geometric volumes, floor-to-ceiling panoramic glass, and integrated twilight illumination designed for optimal airflow and natural light.',
    specs: [
      { label: 'Scope', val: 'Architecture & Full Turnkey Interior' },
      { label: 'Area', val: '7,500 Sq. Ft.' },
      { label: 'Style', val: 'Minimalist Contemporary' },
      { label: 'Status', val: 'Design Visualization' }
    ]
  },
  {
    id: 'res-2',
    title: 'Travertine & Oak Living Gallery',
    category: 'residential',
    categoryLabel: 'Residential Design',
    location: 'PECHS, Karachi',
    tag: 'Portfolio Concept',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    spanClass: 'col-span-4',
    description: 'Double-height open concept living lounge featuring acoustic fluted wood paneling, Italian travertine fireplace, and serene floor-to-ceiling outdoor views.',
    specs: [
      { label: 'Scope', val: 'Custom Interior Architecture & Millwork' },
      { label: 'Ceiling Height', val: '22 Feet Double-Volume' },
      { label: 'Materials', val: 'Fluted Oak, Travertine, Matte Steel' },
      { label: 'Status', val: 'Design Visualization' }
    ]
  },
  {
    id: 'com-1',
    title: 'Executive Corporate Headquarters',
    category: 'commercial',
    categoryLabel: 'Commercial Design',
    location: 'Shahrah-e-Faisal, Karachi',
    tag: 'Design Visualization',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    spanClass: 'col-span-6',
    description: 'Minimalist corporate headquarters created with flexible collaborative zones, acoustic privacy pods, executive boardrooms, and branded architectural linework.',
    specs: [
      { label: 'Scope', val: 'Corporate Workspace & Spatial Planning' },
      { label: 'Area', val: '12,000 Sq. Ft.' },
      { label: 'Type', val: 'Commercial Office Suite' },
      { label: 'Status', val: 'Featured Concept' }
    ]
  },
  {
    id: 'com-2',
    title: 'Luxury Designer Flagship Boutique',
    category: 'commercial',
    categoryLabel: 'Commercial Design',
    location: 'Clifton, Karachi',
    tag: 'Featured Concept',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
    spanClass: 'col-span-6',
    description: 'High-fashion luxury retail flagship with minimalist travertine pedestals, custom brass hanging rails, ambient cove lighting, and seamless monolithic micro-cement flooring.',
    specs: [
      { label: 'Scope', val: 'Retail Architecture & Bespoke Fixtures' },
      { label: 'Lighting', val: 'Architectural CRI 98+ Studio LEDs' },
      { label: 'Concept', val: 'Monolithic Minimalist' },
      { label: 'Status', val: 'Portfolio Concept' }
    ]
  },
  {
    id: 'civil-1',
    title: 'Reinforced Concrete Structural Framework',
    category: 'civil',
    categoryLabel: 'Civil Construction',
    location: 'Karachi, Pakistan',
    tag: 'Execution Quality',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85',
    spanClass: 'col-span-4',
    description: 'Precision civil contractor execution including seismic-resistant reinforced concrete framing, rigorous site supervision, quality material testing, and strict safety standards.',
    specs: [
      { label: 'Scope', val: 'Civil Contracting & Site Supervision' },
      { label: 'Structure', val: 'Cast-in-place Reinforced Concrete' },
      { label: 'Standards', val: 'Engineered Quality Control' },
      { label: 'Status', val: 'Civil Engineering Concept' }
    ]
  },
  {
    id: '3d-1',
    title: '3D Photorealistic Exterior Visualization',
    category: '3d',
    categoryLabel: '3D Visualization',
    location: 'Design Studio Karachi',
    tag: '3D Render',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    spanClass: 'col-span-8',
    description: 'High-end CGI architectural visualization rendering materials, solar orientation, twilight lighting ambiance, and landscaping before physical groundbreaking.',
    specs: [
      { label: 'Service', val: '3D CGI Modeling & Architectural Lighting' },
      { label: 'Software', val: 'High-fidelity Ray Tracing Engine' },
      { label: 'Resolution', val: '8K Ultra HD Photorealism' },
      { label: 'Status', val: 'Design Visualization' }
    ]
  },
  {
    id: 'com-3',
    title: 'Contemporary Healthcare & Wellness Clinic',
    category: 'commercial',
    categoryLabel: 'Commercial Design',
    location: 'Karachi, Pakistan',
    tag: 'Featured Concept',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
    spanClass: 'col-span-6',
    description: 'Curved organic walls, soft diffused lighting, acoustic isolation, and tranquil materials designed to provide an anxiety-free, elevated patient journey.',
    specs: [
      { label: 'Scope', val: 'Medical Space Planning & Interior Design' },
      { label: 'Area', val: '4,500 Sq. Ft.' },
      { label: 'Focus', val: 'Acoustic Comfort & Hygiene Standards' },
      { label: 'Status', val: 'Design Visualization' }
    ]
  },
  {
    id: 'res-3',
    title: 'Minimalist Master Suite & Spa Bath',
    category: 'residential',
    categoryLabel: 'Residential Design',
    location: 'Karachi, Pakistan',
    tag: 'Portfolio Concept',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    spanClass: 'col-span-6',
    description: 'Private residential master sanctuary featuring integrated upholstered headboard wall, hidden walk-in wardrobe, and en-suite freestanding marble soaking tub.',
    specs: [
      { label: 'Scope', val: 'Master Suite & Luxury Bath Interior' },
      { label: 'Materials', val: 'Fluted Walnut, Statuario Marble' },
      { label: 'Lighting', val: 'Concealed Indirect Warm LEDs' },
      { label: 'Status', val: 'Design Visualization' }
    ]
  }
];

function initPortfolio() {
  const gridContainer = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const lightboxModal = document.getElementById('projectLightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  
  if (!gridContainer) return;
  
  // Render Projects
  function renderProjects(filter = 'all') {
    gridContainer.innerHTML = '';
    
    const filtered = filter === 'all' 
      ? portfolioProjects 
      : portfolioProjects.filter(p => p.category === filter);
      
    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = `portfolio-item ${project.spanClass} reveal reveal-up delay-${(idx % 4 + 1) * 100}`;
      card.setAttribute('data-id', project.id);
      card.setAttribute('data-category', project.category);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${project.title}`);
      
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="portfolio-item-img" loading="lazy">
        <div class="portfolio-item-overlay">
          <span class="portfolio-tag">${project.categoryLabel}</span>
          <h3 class="portfolio-item-title">${project.title}</h3>
          <div class="portfolio-item-meta">
            <span>${project.location}</span>
            <span class="portfolio-concept-badge">${project.tag}</span>
          </div>
        </div>
      `;
      
      // Click & Enter Key Handlers
      card.addEventListener('click', () => openLightbox(project));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(project);
        }
      });
      
      gridContainer.appendChild(card);
    });
    
    // Trigger scroll reveal observer for newly added items
    if (window.triggerScrollObserver) {
      window.triggerScrollObserver();
    }
  }
  
  // Filter Button Interactions
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });
  
  // Lightbox Modal Functions
  function openLightbox(project) {
    if (!lightboxModal) return;
    
    document.getElementById('lightboxImg').src = project.image;
    document.getElementById('lightboxImg').alt = project.title;
    document.getElementById('lightboxCategory').textContent = project.categoryLabel;
    document.getElementById('lightboxTitle').textContent = project.title;
    document.getElementById('lightboxLocation').textContent = project.location;
    document.getElementById('lightboxDescription').textContent = project.description;
    
    const specsContainer = document.getElementById('lightboxSpecs');
    if (specsContainer && project.specs) {
      specsContainer.innerHTML = project.specs.map(spec => `
        <div class="lightbox-spec-row">
          <span class="lightbox-spec-label">${spec.label}</span>
          <span class="lightbox-spec-val">${spec.val}</span>
        </div>
      `).join('');
    }
    
    // Wire up the modal WhatsApp button for this specific project
    const modalInquiryBtn = document.getElementById('lightboxInquireBtn');
    if (modalInquiryBtn) {
      const waMessage = encodeURIComponent(`Hello Architecture Interior Design, I am interested in a project similar to: "${project.title}" (${project.categoryLabel}). I would like to discuss design consultation in Karachi.`);
      modalInquiryBtn.href = `https://wa.me/923333001231?text=${waMessage}`;
    }
    
    lightboxModal.classList.add('is-active');
    document.body.classList.add('no-scroll');
  }
  
  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  }
  
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('is-active')) {
      closeLightbox();
    }
  });
  
  // Initial Render
  renderProjects('all');
}

window.initPortfolio = initPortfolio;
