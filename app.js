// Character data
const characterData = [
  {
    "id": 1,
    "name": "Avrass",
    "species": "Earth Dragon",
    "gender": "Male",
    "tags": "Dragon, Scalie, Aincient, Patient, Honorable, Defensive, Elemental",
    "image": "https://luney-the-cat.de/images/Avrass_01.webp",
    "backstory": "",
    "gallery": [
      "https://luney-the-cat.de/images/Avrass_02.webp",
      "https://luney-the-cat.de/images/Avrass_03.webp",
      "https://luney-the-cat.de/images/Avrass_04.webp"
    ]
  },
  {
    "id": 2,
    "name": "Aoikami",
    "species": "Ice Dragon",
    "gender": "Male",
    "tags": "Dragon, Scalie, Aincient, Wise, Calm, Direct, Elemental",
    "image": "https://luney-the-cat.de/images/Aoikami_01.webp",
    "backstory": "",
    "gallery": [
      "https://luney-the-cat.de/images/Aoikami_02.webp",
      "https://luney-the-cat.de/images/Aoikami_03.webp",
      "https://luney-the-cat.de/images/Aoikami_04.webp"
    ]
  },
  {
    "id": 3,
    "name": "Fitcher",
    "species": "Nightstalker Werewolf",
    "gender": "Male",
    "tags": "Werewolf, Feral, Stealth, Agile, Mysterious, Thoughtfull",
    "image": "https://luney-the-cat.de/images/Fitcher_01.webp",
    "backstory": "",
    "gallery": [
      "https://luney-the-cat.de/images/Fitcher_02.webp",
      "https://luney-the-cat.de/images/Fitcher_03.webp",
      "https://luney-the-cat.de/images/Fitcher_04.webp"
    ]
  },
  {
    "id": 4,
    "name": "Terander",
    "species": "Tentacle Monster",
    "gender": "Unknown",
    "tags": "Tentacle, Monster, Sadistic, Keeper, Hunter, Emotionless",
    "image": "https://luney-the-cat.de/images/Terander_01.webp",
    "backstory": "",
    "gallery": [
      "https://luney-the-cat.de/images/Terander_02.webp",
      "https://luney-the-cat.de/images/Terander_03.webp",
      "https://luney-the-cat.de/images/Terander_04.webp"
    ]
  },
  {
    "id": 5,
    "name": "Wynstar",
    "species": "Spectral Unicorn",
    "gender": "Male",
    "tags": "Horselike, Spectral, Holy, Charming, Succubus, Untamable",
    "image": "https://luney-the-cat.de/images/Wynstar_01.webp",
    "backstory": "",
    "gallery": [
      "https://luney-the-cat.de/images/Wynstar_02.webp",
      "https://luney-the-cat.de/images/Wynstar_03.webp",
      "https://luney-the-cat.de/images/Wynstar_04.webp"
    ]
  },
  {
    "id": 6,
    "name": "Spectralis",
    "species": "Spectral Slime",
    "gender": "Unknown",
    "tags": "Slime, Spectral, Friendly, Tamable, Pleasuring, Caring",
    "image": "https://luney-the-cat.de/images/Spectralis_01.webp",
    "backstory": "",
    "gallery": [
      "https://luney-the-cat.de/images/Spectralis_02.webp",
      "https://luney-the-cat.de/images/Spectralis_03.webp",
      "https://luney-the-cat.de/images/Spectralis_04.webp"
    ]
  },
  {
    "id": 7,
    "name": "Thalassomorph",
    "species": "Alien Shapeshifter",
    "gender": "Unknown",
    "tags": "Alien, Shapeshifter, Enslaver, Stong-willed, Hunter, Aggressive",
    "image": "https://luney-the-cat.de/images/Thalassomorph_01.webp",
    "backstory": "",
    "gallery": [
      "https://luney-the-cat.de/images/Thalassomorph_02.webp",
      "https://luney-the-cat.de/images/Thalassomorph_03.webp",
      "https://luney-the-cat.de/images/Thalassomorph_04.webp"
    ]
  },
  {
    "id": 8,
    "name": "Trozok",
    "species": "Megalodon",
    "gender": "Male",
    "tags": "Mythic, Shark, Ruthless, Openminded, Stong, Shameless",
    "image": "https://via.placeholder.com/300x300/e67e22/ffffff?text=Ruby",
    "backstory": "",
    "gallery": [
      "https://via.placeholder.com/150x150/e67e22/ffffff?text=Fire+1",
      "https://via.placeholder.com/150x150/e67e22/ffffff?text=Fire+2",
      "https://via.placeholder.com/150x150/e67e22/ffffff?text=Fire+3"
    ]
  }
];

// Global variables for infinite carousel
let currentCarouselIndex = 0;
let actualCarouselIndex = 0; // Tracks the real position (0-3)
const totalSlides = 4; // Number of actual slides
const clonesCount = 2; // Number of clones on each side
let isTransitioning = false;

// DOM elements
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');
const cardsGrid = document.getElementById('cardsGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');

// Create a character card element
function createCharacterCard(character, isCarousel = false, isClone = false) {
    const cardElement = document.createElement('div');
    cardElement.className = 'character-card';
    cardElement.setAttribute('data-id', character.id);
    if (isClone) {
        cardElement.setAttribute('data-clone', 'true');
    }
    
    cardElement.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <div class="card-image">
                    <img src="${character.image}" alt="${character.name}" loading="lazy">
                </div>
                <div class="card-content">
                    <h2 class="card-title">${character.name}</h2>
                    <div class="card-details">
                        <div class="card-detail">
                            <strong>Species:</strong> ${character.species}
                        </div>
                        <div class="card-detail">
                            <strong>Gender:</strong> ${character.gender}
                        </div>
                        <div class="card-detail">
                            <strong>Tags:</strong> ${character.tags}
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-back">
                <h3 class="backstory-title">Backstory</h3>
                <div class="backstory-text">
                    ${character.backstory}
                </div>
                <div class="gallery">
                    ${character.gallery.map((image, index) => `
                        <div class="gallery-item" data-image="${image}" data-character="${character.name}" data-index="${index}">
                            <img src="${image}" alt="${character.name} Gallery ${index + 1}" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Add click event for card flipping
    const cardFront = cardElement.querySelector('.card-front');
    const backstoryTitle = cardElement.querySelector('.backstory-title');
    const backstoryText = cardElement.querySelector('.backstory-text');
    
    cardFront.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        cardElement.classList.add('flipped');
    });
    
    backstoryTitle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        cardElement.classList.remove('flipped');
    });
    
    backstoryText.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        cardElement.classList.remove('flipped');
    });
    
    // Add click events for gallery items
    const galleryItems = cardElement.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const imageUrl = item.getAttribute('data-image');
            const characterName = item.getAttribute('data-character');
            const imageIndex = item.getAttribute('data-index');
            openImageModal(imageUrl, `${characterName} - Gallery Image ${parseInt(imageIndex) + 1}`);
        });
    });
    
    return cardElement;
}

// Initialize carousel with infinite scrolling
function initCarousel() {
    carouselTrack.innerHTML = '';
    carouselDots.innerHTML = '';
    
    const featuredCharacters = characterData.slice(0, totalSlides);
    
    // Create clones of the last slides and prepend them
    for (let i = totalSlides - clonesCount; i < totalSlides; i++) {
        const character = featuredCharacters[i];
        const cloneCard = createCharacterCard(character, true, true);
        carouselTrack.appendChild(cloneCard);
    }
    
    // Add the actual slides
    featuredCharacters.forEach((character, index) => {
        const card = createCharacterCard(character, true);
        carouselTrack.appendChild(card);
        
        // Create dot for actual slides only
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        carouselDots.appendChild(dot);
    });
    
    // Create clones of the first slides and append them
    for (let i = 0; i < clonesCount; i++) {
        const character = featuredCharacters[i];
        const cloneCard = createCharacterCard(character, true, true);
        carouselTrack.appendChild(cloneCard);
    }
    
    // Set initial position (accounting for prepended clones)
    currentCarouselIndex = clonesCount;
    actualCarouselIndex = 0;
    
    // Disable transitions initially
    carouselTrack.style.transition = 'none';
    updateCarouselPosition();
    
    // Re-enable transitions after initial positioning
    setTimeout(() => {
        carouselTrack.style.transition = 'transform var(--duration-normal) var(--ease-standard)';
    }, 50);
    
    updateDots();
}

// Initialize grid
function initGrid() {
    cardsGrid.innerHTML = '';
    characterData.forEach(character => {
        const card = createCharacterCard(character);
        cardsGrid.appendChild(card);
    });
}

// Update carousel position
function updateCarouselPosition() {
    const cardWidth = 316; // Card width + margins
    const offset = -currentCarouselIndex * cardWidth;
    carouselTrack.style.transform = `translateX(${offset}px)`;
}

// Update dots separately from position
function updateDots() {
    const dots = carouselDots.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === actualCarouselIndex);
    });
}

// Update carousel and handle infinite loop logic
function updateCarousel() {
    updateCarouselPosition();
    updateDots();
}

// Handle the infinite loop transitions
function handleInfiniteLoop() {
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    setTimeout(() => {
        // Check if we need to jump to maintain infinite loop
        if (currentCarouselIndex >= totalSlides + clonesCount) {
            // We've gone past the end, jump to the beginning of real slides
            carouselTrack.style.transition = 'none';
            currentCarouselIndex = clonesCount + actualCarouselIndex;
            updateCarouselPosition();
            setTimeout(() => {
                carouselTrack.style.transition = 'transform var(--duration-normal) var(--ease-standard)';
                isTransitioning = false;
            }, 50);
        } else if (currentCarouselIndex < clonesCount) {
            // We've gone past the beginning, jump to the end of real slides
            carouselTrack.style.transition = 'none';
            currentCarouselIndex = clonesCount + actualCarouselIndex;
            updateCarouselPosition();
            setTimeout(() => {
                carouselTrack.style.transition = 'transform var(--duration-normal) var(--ease-standard)';
                isTransitioning = false;
            }, 50);
        } else {
            isTransitioning = false;
        }
        
        // Always update dots after handling infinite loop
        updateDots();
    }, 300); // Wait for transition to complete
}

// Go to specific slide
function goToSlide(index) {
    if (isTransitioning) return;
    
    actualCarouselIndex = index;
    currentCarouselIndex = clonesCount + index;
    updateCarousel();
}

// Next slide
function nextSlide() {
    if (isTransitioning) return;
    
    currentCarouselIndex++;
    actualCarouselIndex = (actualCarouselIndex + 1) % totalSlides;
    updateCarousel();
    handleInfiniteLoop();
}

// Previous slide
function prevSlide() {
    if (isTransitioning) return;
    
    currentCarouselIndex--;
    actualCarouselIndex = (actualCarouselIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
    handleInfiniteLoop();
}

// Open image modal
function openImageModal(imageUrl, altText = 'Gallery Image') {
    modalImage.src = imageUrl;
    modalImage.alt = altText;
    imageModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close image modal
function closeImageModal() {
    imageModal.classList.add('hidden');
    document.body.style.overflow = '';
    modalImage.src = '';
    modalImage.alt = '';
}

// Auto-advance carousel (now infinite)
function startCarouselAutoplay() {
    setInterval(() => {
        nextSlide();
    }, 4000);
}

// Event listeners
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    prevSlide();
});

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    nextSlide();
});

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    closeImageModal();
});

modalOverlay.addEventListener('click', (e) => {
    e.preventDefault();
    closeImageModal();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !imageModal.classList.contains('hidden')) {
        closeImageModal();
    }
    if (e.key === 'ArrowLeft') {
        prevSlide();
    }
    if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Touch/swipe support for carousel
let startX = 0;
let currentX = 0;
let isDragging = false;

carouselTrack.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

carouselTrack.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    e.preventDefault();
});

carouselTrack.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    
    const deltaX = startX - currentX;
    const threshold = 50;
    
    if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initGrid();
    startCarouselAutoplay();
});
