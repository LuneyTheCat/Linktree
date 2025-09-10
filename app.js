// Character data
const characterData = [
  {
    "id": 1,
    "name": "Aria Stormwind",
    "species": "Elf Mage",
    "gender": "Female",
    "tags": "Magic, Healer, Noble",
    "image": "https://via.placeholder.com/300x300/4a90e2/ffffff?text=Aria",
    "backstory": "Born in the mystical forests of Eldara, Aria discovered her magical abilities at a young age. She specializes in storm magic and healing arts, making her both a formidable warrior and a compassionate healer. Her noble heritage grants her access to ancient spells passed down through generations of elven mages.",
    "gallery": [
      "https://via.placeholder.com/150x150/4a90e2/ffffff?text=Spell+1",
      "https://via.placeholder.com/150x150/4a90e2/ffffff?text=Spell+2",
      "https://via.placeholder.com/150x150/4a90e2/ffffff?text=Spell+3"
    ]
  },
  {
    "id": 2,
    "name": "Thorek Ironbeard",
    "species": "Dwarf Warrior",
    "gender": "Male",
    "tags": "Warrior, Smith, Loyal",
    "image": "https://via.placeholder.com/300x300/e74c3c/ffffff?text=Thorek",
    "backstory": "Hailing from the underground forges of Khaz Modan, Thorek is a master blacksmith and fierce warrior. His family has served the dwarven kingdom for centuries, crafting legendary weapons and armor. In battle, he wields his ancestral warhammer with unmatched skill and determination.",
    "gallery": [
      "https://via.placeholder.com/150x150/e74c3c/ffffff?text=Forge+1",
      "https://via.placeholder.com/150x150/e74c3c/ffffff?text=Forge+2",
      "https://via.placeholder.com/150x150/e74c3c/ffffff?text=Forge+3"
    ]
  },
  {
    "id": 3,
    "name": "Luna Shadowstep",
    "species": "Human Rogue",
    "gender": "Female",
    "tags": "Stealth, Agile, Mysterious",
    "image": "https://via.placeholder.com/300x300/9b59b6/ffffff?text=Luna",
    "backstory": "A master of stealth and subterfuge, Luna grew up on the streets of the capital city. She learned to survive through cunning and agility, eventually becoming one of the most skilled assassins in the realm. Despite her dark profession, she follows a strict code of honor.",
    "gallery": [
      "https://via.placeholder.com/150x150/9b59b6/ffffff?text=Shadow+1",
      "https://via.placeholder.com/150x150/9b59b6/ffffff?text=Shadow+2",
      "https://via.placeholder.com/150x150/9b59b6/ffffff?text=Shadow+3"
    ]
  },
  {
    "id": 4,
    "name": "Zephyr Windwalker",
    "species": "Halfling Bard",
    "gender": "Male",
    "tags": "Music, Charisma, Traveler",
    "image": "https://via.placeholder.com/300x300/f39c12/ffffff?text=Zephyr",
    "backstory": "A jovial halfling with an insatiable wanderlust, Zephyr travels the world collecting stories and songs. His magical music can inspire allies in battle or soothe savage beasts. He carries an enchanted lute that has been passed down through his family for generations.",
    "gallery": [
      "https://via.placeholder.com/150x150/f39c12/ffffff?text=Song+1",
      "https://via.placeholder.com/150x150/f39c12/ffffff?text=Song+2",
      "https://via.placeholder.com/150x150/f39c12/ffffff?text=Song+3"
    ]
  },
  {
    "id": 5,
    "name": "Kael Dragonheart",
    "species": "Dragonborn Paladin",
    "gender": "Male",
    "tags": "Dragon, Holy, Protector",
    "image": "https://via.placeholder.com/300x300/27ae60/ffffff?text=Kael",
    "backstory": "Descended from ancient dragons, Kael serves as a paladin of the Solar Court. His dragon heritage grants him the ability to breathe fire and resist magical attacks. He has sworn an oath to protect the innocent and vanquish evil wherever it may lurk.",
    "gallery": [
      "https://via.placeholder.com/150x150/27ae60/ffffff?text=Dragon+1",
      "https://via.placeholder.com/150x150/27ae60/ffffff?text=Dragon+2",
      "https://via.placeholder.com/150x150/27ae60/ffffff?text=Dragon+3"
    ]
  },
  {
    "id": 6,
    "name": "Violet Spellweaver",
    "species": "Tiefling Sorcerer",
    "gender": "Female",
    "tags": "Magic, Arcane, Ambitious",
    "image": "https://via.placeholder.com/300x300/8e44ad/ffffff?text=Violet",
    "backstory": "Born with infernal heritage, Violet embraces her magical abilities with fierce determination. She studies ancient tomes and forbidden magic to unlock the secrets of arcane power. Her ambition drives her to become one of the most powerful sorcerers of her generation.",
    "gallery": [
      "https://via.placeholder.com/150x150/8e44ad/ffffff?text=Magic+1",
      "https://via.placeholder.com/150x150/8e44ad/ffffff?text=Magic+2",
      "https://via.placeholder.com/150x150/8e44ad/ffffff?text=Magic+3"
    ]
  },
  {
    "id": 7,
    "name": "Finn Swiftarrow",
    "species": "Human Ranger",
    "gender": "Male",
    "tags": "Archery, Nature, Tracker",
    "image": "https://via.placeholder.com/300x300/2ecc71/ffffff?text=Finn",
    "backstory": "A skilled ranger who grew up in the wilderness, Finn has an unmatched ability to track any creature through any terrain. His bow never misses its mark, and he has formed deep bonds with the forest animals that aid him in his quests to protect the natural world.",
    "gallery": [
      "https://via.placeholder.com/150x150/2ecc71/ffffff?text=Arrow+1",
      "https://via.placeholder.com/150x150/2ecc71/ffffff?text=Arrow+2",
      "https://via.placeholder.com/150x150/2ecc71/ffffff?text=Arrow+3"
    ]
  },
  {
    "id": 8,
    "name": "Ruby Flameheart",
    "species": "Phoenix Warrior",
    "gender": "Female",
    "tags": "Fire, Phoenix, Rebirth",
    "image": "https://via.placeholder.com/300x300/e67e22/ffffff?text=Ruby",
    "backstory": "Blessed by the phoenix spirit, Ruby has the rare ability to be reborn from ashes. She commands the power of eternal flames and can heal herself and others through fire magic. Her passionate nature and unwavering courage make her a natural leader in battle.",
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