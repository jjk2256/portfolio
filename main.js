// Image data - each image represents a unique project
const images = [
    { 
        src: 'images/image00.png', 
        width: 320, 
        height: 400, 
        title: 'Ceramic Vessel', 
        year: '2022',
        description: 'This series explores the relationship between form and negative space, challenging traditional notions of containment and function. The work investigates the boundary between sculpture and functional object.',
        slug: 'ceramic-vessel'
    },
    { 
        src: 'images/image01.png', 
        width: 380, 
        height: 300, 
        title: 'Surface Study', 
        year: '2023',
        description: 'An investigation of texture and material properties, this work examines how surface treatment affects our perception of objects. The piece questions our assumptions about materiality and the tactile experience.',
        slug: 'surface-study'
    },
    { 
        src: 'images/image02.png', 
        width: 280, 
        height: 350,
        title: 'Structure and Void', 
        year: '2021',
        description: 'This installation explores architectural principles through sculptural form. By creating tension between solid elements and empty space, the work invites viewers to reconsider their relationship to built environments.',
        slug: 'structure-and-void'
    },
    { 
        src: 'images/image03.png', 
        width: 350, 
        height: 400,
        title: 'Contre-Motif', 
        year: '2022',
        description: 'Using transparent and translucent materials, this series examines the concept of boundaries - both physical and metaphorical. The work creates a dialogue between interior and exterior, revealing and concealing simultaneously.',
        slug: 'contre-motif'
    },
    { 
        src: 'images/image04.png', 
        width: 400, 
        height: 320,
        title: 'Quelque chose', 
        year: '2023',
        description: 'This exploration of contrasting materials creates a visual conversation about weight, permanence, and transformation. Each element responds to the others, creating a balanced composition that invites contemplation.',
        slug: 'quelque-chose'
    },
    { 
        src: 'images/image05.png', 
        width: 300, 
        height: 300,
        title: 'Emballage et socle', 
        year: '2021',
        description: 'A study in minimal form and essential qualities, this work reduces sculpture to its fundamental elements. Through careful consideration of proportion and scale, the piece creates presence through simplicity.',
        slug: 'emballage-et-socle'
    },
    { 
        src: 'images/image06.png', 
        width: 320, 
        height: 400, 
        title: 'Papier', 
        year: '2023',
        description: 'Exploring the tension between defined and undefined forms, this project challenges conventional categorizations. The work exists in a liminal space between recognition and abstraction, inviting viewers to question their perceptual frameworks.',
        slug: 'papier'
    },
    { 
        src: 'images/image07.png', 
        width: 380, 
        height: 300, 
        title: 'L\'atelier du sculpteur', 
        year: '2022',
        description: 'An examination of how light interacts with various surfaces and materials. This project investigates translucency, reflection, and shadow as formal elements, creating compositions that shift with changing ambient conditions.',
        slug: 'atelier-du-sculpteur'
    },
    { 
        src: 'images/image08.png', 
        width: 280, 
        height: 350,
        title: 'Formes', 
        year: '2021',
        description: 'This site-specific installation responds to architectural elements, creating a dialogue between existing structures and introduced forms. The work reconfigures spatial relationships, altering perception and movement through the environment.',
        slug: 'formes'
    },
    { 
        src: 'images/image09.png', 
        width: 350, 
        height: 400,
        title: 'Projets', 
        year: '2022',
        description: 'Investigating how materials record and retain traces of time and interaction. This project explores the concept of memory embedded in physical substances, revealing histories and narratives through surface, texture, and transformation.',
        slug: 'projets'
    }
];

// Create vertical grid lines
function createGridLines() {
    const gridContainer = document.getElementById('grid-lines');
    const windowWidth = window.innerWidth;
    const numColumns = 12; // Number of columns for the grid
    const columnWidth = windowWidth / numColumns;
    
    // Clear existing grid lines
    gridContainer.innerHTML = '';
    
    // Create grid lines
    for (let i = 1; i < numColumns; i++) {
        const gridLine = document.createElement('div');
        gridLine.className = 'grid-line';
        gridLine.style.left = `${i * columnWidth}px`;
        gridContainer.appendChild(gridLine);
    }
}

// Function to check if position overlaps with existing positions
function checkOverlap(left, top, width, height, positions) {
    const margin = 20; // minimum space between items
    for (const pos of positions) {
        if (
            left < pos.left + pos.width + margin &&
            left + width + margin > pos.left &&
            top < pos.top + pos.height + margin &&
            top + height + margin > pos.top
        ) {
            return true; // overlap detected
        }
    }
    return false; // no overlap
}

// Function to show project detail with multiple images
function showProjectDetail(imageData) {
    // Hide gallery and show project detail
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('projects-page').style.display = 'none';
    const projectDetail = document.getElementById('project-detail');
    projectDetail.style.display = 'block';
    
    // Update project details
    document.getElementById('project-title-text').innerHTML = 
        imageData.title + ' <span id="project-year">' + imageData.year + '</span>';
    document.getElementById('project-description').textContent = imageData.description;
    
    // Clear and populate images container
    const imagesContainer = document.getElementById('project-images-container');
    imagesContainer.innerHTML = '';
    
    // Add main image
    const mainImageWrapper = document.createElement('div');
    mainImageWrapper.className = 'project-image-wrapper';
    
    const mainImage = document.createElement('img');
    mainImage.src = imageData.src;
    mainImage.alt = imageData.title;
    
    mainImageWrapper.appendChild(mainImage);
    
    // Add caption for main image
    const mainCaption = document.createElement('div');
    mainCaption.className = 'image-caption';
    
    // Add caption text elements with project info
    const captionDetail = document.createElement('span');
    captionDetail.textContent = "View " + (imageData.src.includes("image0") ? imageData.src.replace("images/image", "").replace(".png", "") : "");
    
    const captionMedium = document.createElement('span');
    
    // Assign a medium based on the project title for demonstration
    let medium = "";
    if (imageData.title.includes("Ceramic") || imageData.title.includes("Surface")) {
        medium = "Porcelain, clay";
    } else if (imageData.title.includes("Structure") || imageData.title.includes("Void")) {
        medium = "Plaster, steel";
    } else if (imageData.title.includes("Transparent") || imageData.title.includes("Light")) {
        medium = "Glass, resin";
    } else if (imageData.title.includes("Material")) {
        medium = "Mixed media";
    } else if (imageData.title.includes("Sculptural") || imageData.title.includes("Form")) {
        medium = "Marble";
    } else if (imageData.title.includes("Spatial") || imageData.title.includes("Intervention")) {
        medium = "Site-specific installation";
    } else {
        medium = "Mixed media";
    }
    
    captionMedium.textContent = medium;
    
    const captionYear = document.createElement('span');
    captionYear.textContent = imageData.year;
    
    // Add all caption elements
    mainCaption.appendChild(captionDetail);
    mainCaption.appendChild(captionMedium);
    mainCaption.appendChild(captionYear);
    
    mainImageWrapper.appendChild(mainCaption);
    imagesContainer.appendChild(mainImageWrapper);
    
    // Add 3-5 additional images (we'll use other images from our collection)
    // Get a random number of additional images (3-5)
    const additionalImageCount = Math.floor(Math.random() * 3) + 3; // 3 to 5 images
    
    // Get random images from our collection (excluding the current one)
    const otherImages = images.filter(img => img.src !== imageData.src);
    const shuffledImages = [...otherImages].sort(() => Math.random() - 0.5);
    const selectedImages = shuffledImages.slice(0, additionalImageCount);
    
    // Add each additional image
    selectedImages.forEach((img, index) => {
        const additionalImageWrapper = document.createElement('div');
        additionalImageWrapper.className = 'project-image-wrapper';
        
        const additionalImage = document.createElement('img');
        additionalImage.src = img.src;
        additionalImage.alt = imageData.title + ' - Additional View ' + (index + 1);
        
        additionalImageWrapper.appendChild(additionalImage);
        
        // Add caption for additional image
        const additionalCaption = document.createElement('div');
        additionalCaption.className = 'image-caption';
        
        const additionalCaptionDetail = document.createElement('span');
        additionalCaptionDetail.textContent = "Detail view " + (index + 1);
        
        const additionalCaptionMedium = document.createElement('span');
        additionalCaptionMedium.textContent = medium;
        
        const additionalCaptionYear = document.createElement('span');
        additionalCaptionYear.textContent = imageData.year;
        
        additionalCaption.appendChild(additionalCaptionDetail);
        additionalCaption.appendChild(additionalCaptionMedium);
        additionalCaption.appendChild(additionalCaptionYear);
        
        additionalImageWrapper.appendChild(additionalCaption);
        imagesContainer.appendChild(additionalImageWrapper);
    });
    
    // Update navigation
    document.getElementById('works-link').classList.add('active');
    document.getElementById('projects-link').classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Update URL
    history.pushState({project: imageData.title}, imageData.title, '#project-' + encodeURIComponent(imageData.title.toLowerCase().replace(/\s+/g, '-')));
}

// Function to show gallery
function showGallery() {
    document.getElementById('project-detail').style.display = 'none';
    document.getElementById('projects-page').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
    
    // Update navigation
    document.getElementById('works-link').classList.add('active');
    document.getElementById('projects-link').classList.remove('active');
    
    history.pushState({}, 'Gallery', window.location.pathname);
}

// Function to show projects page
function showProjectsPage() {
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('project-detail').style.display = 'none';
    document.getElementById('projects-page').style.display = 'block';
    
    // Update navigation
    document.getElementById('works-link').classList.remove('active');
    document.getElementById('projects-link').classList.add('active');
    
    // Add click events to project rows if not already added
    const projectRows = document.querySelectorAll('.project-index-row');
    if (!projectRows[0].hasAttribute('data-initialized')) {
        projectRows.forEach(row => {
            row.setAttribute('data-initialized', 'true');
            const projectTitle = row.querySelector('.project-title').textContent;
            
            // Find matching project data
            const projectData = images.find(img => img.title === projectTitle);
            
            if (projectData) {
                row.addEventListener('click', function() {
                    showProjectDetail(projectData);
                });
            }
        });
    }
    
    // Update URL
    history.pushState({page: 'projects'}, 'Projects', '#projects');
}

// Function to randomly position images without overlapping
function positionImages() {
    const gallery = document.getElementById('gallery');
    const galleryWidth = gallery.clientWidth;
    const galleryHeight = Math.max(window.innerHeight - 100, 1200); // increased minimum height
    const positions = [];
    
    // Clear gallery
    gallery.innerHTML = '';
    
    // Define grid divisions for more structured positioning
    const columns = 3; // 3 rough columns for placement
    const rows = 4;    // 4 rough rows for placement
    
    const columnWidth = galleryWidth / columns;
    const rowHeight = galleryHeight / rows;
    
    // Create a grid of possible positions
    const gridPositions = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            gridPositions.push({
                left: col * columnWidth + Math.random() * (columnWidth * 0.5),
                top: row * rowHeight + Math.random() * (rowHeight * 0.5)
            });
        }
    }
    
    // Shuffle grid positions
    const shuffledPositions = [...gridPositions].sort(() => Math.random() - 0.5);
    
    // Shuffle images array
    const shuffledImages = [...images].sort(() => Math.random() - 0.5);
    
    // Create and position each gallery item
    shuffledImages.forEach((image, index) => {
        // Skip if we run out of grid positions
        if (index >= shuffledPositions.length) return;
        
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.index = index;
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.width = image.width;
        img.height = image.height;
        
        item.appendChild(img);
        gallery.appendChild(item);
        
        // Get a position from our pre-calculated grid
        const position = shuffledPositions[index];
        
        // Ensure image doesn't go outside gallery bounds
        let left = Math.min(position.left, galleryWidth - image.width - 40);
        let top = Math.min(position.top, galleryHeight - image.height - 40);
        
        // Position the item
        item.style.left = `${left}px`;
        item.style.top = `${top}px`;
        
        // Store the position with actual dimensions for future overlap checking
        positions.push({
            left,
            top,
            width: image.width,
            height: image.height
        });
        
        // Add click event to show project detail
        item.addEventListener('click', function() {
            const index = this.dataset.index;
            showProjectDetail(shuffledImages[index]);
        });
    });
    
    // Set gallery height
    gallery.style.height = `${galleryHeight}px`;
}

// Remove these functions that are no longer needed
// Add randomize button functionality
// function addRandomizeButton() {
//     if (document.getElementById('randomize-btn')) return;
//     
//     const randomizeBtn = document.createElement('button');
//     randomizeBtn.textContent = 'Randomize Layout';
//     randomizeBtn.id = 'randomize-btn';
//     
//     randomizeBtn.addEventListener('click', positionImages);
//     document.body.appendChild(randomizeBtn);
//     updateRandomizeButtonVisibility();
// }

// Show/hide randomize button based on current view
// function updateRandomizeButtonVisibility() {
//     const btn = document.getElementById('randomize-btn');
//     if (!btn) return;
//     
//     if (document.getElementById('project-detail').style.display !== 'none' || 
//         document.getElementById('projects-page').style.display !== 'none') {
//         btn.style.display = 'none';
//     } else {
//         btn.style.display = 'block';
//     }
// }

// Setup back button events
document.getElementById('back-button').addEventListener('click', function(e) {
    e.preventDefault();
    showGallery();
});

// Setup navigation events
document.getElementById('logo-link').addEventListener('click', function(e) {
    e.preventDefault();
    showGallery();
});

document.getElementById('works-link').addEventListener('click', function(e) {
    e.preventDefault();
    showGallery();
});

document.getElementById('projects-link').addEventListener('click', function(e) {
    e.preventDefault();
    showProjectsPage();
});

// Handle browser back button
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.project) {
        // Find the project data
        const projectData = images.find(img => img.title === e.state.project);
        if (projectData) {
            showProjectDetail(projectData);
        } else {
            showGallery();
        }
    } else if (e.state && e.state.page === 'projects') {
        showProjectsPage();
    } else {
        showGallery();
    }
});

// Initialize custom cursor
function initCustomCursor() {
    const cursor = document.getElementById('cursor-dot');
    
    // Show cursor on mouse movement
    document.addEventListener('mousemove', function(e) {
        cursor.classList.add('active');
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', function() {
        cursor.classList.remove('active');
    });
    
    // Make cursor larger when hovering over links and clickable elements
    const interactiveElements = document.querySelectorAll('a, .gallery-item, .project-index-row, .language-toggle, #randomize-btn, .back-to-gallery');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('link-hover');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('link-hover');
        });
    });
    
    // Update interactive elements after DOM changes
    const observer = new MutationObserver(function(mutations) {
        const newInteractiveElements = document.querySelectorAll('a, .gallery-item, .project-index-row, .language-toggle, #randomize-btn, .back-to-gallery');
        
        newInteractiveElements.forEach(element => {
            if (!element.hasAttribute('data-cursor-initialized')) {
                element.setAttribute('data-cursor-initialized', 'true');
                
                element.addEventListener('mouseenter', function() {
                    cursor.classList.add('link-hover');
                });
                
                element.addEventListener('mouseleave', function() {
                    cursor.classList.remove('link-hover');
                });
            }
        });
    });
    
    observer.observe(document.body, { 
        childList: true, 
        subtree: true 
    });
}

// Initial setup
window.addEventListener('load', function() {
    // Create grid lines
    createGridLines();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Check if URL has a hash and handle accordingly
    if (window.location.hash.startsWith('#project-')) {
        const projectName = decodeURIComponent(window.location.hash.replace('#project-', '').replace(/-/g, ' '));
        const projectData = images.find(img => img.title.toLowerCase() === projectName.toLowerCase());
        if (projectData) {
            showProjectDetail(projectData);
        } else {
            positionImages();
        }
    } else if (window.location.hash === '#projects') {
        showProjectsPage();
    } else {
        positionImages();
    }
});

// Reposition grid lines on window resize
window.addEventListener('resize', function() {
    createGridLines();
});