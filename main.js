// Base URL handling for GitHub Pages
const baseUrl = window.location.hostname === 'jjk2256.github.io' ? '/portfolio/' : '/';

// Use this baseUrl when referencing resources
function getResourcePath(path) {
  return baseUrl + path;
}

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Debug information
console.log("Website running from: " + window.location.hostname);
console.log("Base URL set to: " + baseUrl);
console.log("Example resource path: " + getResourcePath('CAPSTONE_grow/hero.webp'));

// Add a SAVED_POSITIONS_KEY constant (even though we're not using manual positioning anymore)
const SAVED_POSITIONS_KEY = 'galleryItemPositions';

// Final updated images array with proper path handling
const images = [
    { 
        src: getResourcePath('CAPSTONE_grow/hero.webp'),
        width: 320, 
        height: 400, 
        title: 'CAPSTONE_grow', 
        year: '2025',
        description: 'The *Incubator* is a sensor-monitored environmental chamber designed to support and document optimal growth conditions for bio-based materials. Developed using open-source electronics and accessible materials, the system maintains a controlled microclimate by continuously tracking humidity, temperature, and carbon dioxide concentration.\n\nA Raspberry Pi functions as the central controller, interfacing with an Adafruit SCD-40 sensor and a NoIR camera to log environmental data and capture time-lapse imagery. This DIY platform enables scalable, low-cost experimentation, facilitating longitudinal studies on the relationship between growth conditions and material behavior. By integrating digital sensing and automated monitoring, the incubator supports research into the environmental performance of regenerative materials.',
        slug: 'capstone_grow',
        videos: [
            {
                type: 'youtube',
                id: 'je36RTjk31c',
                title: 'Video documentation',
                year: '2025',
                medium: 'Timelapse'
            }
        ]
    },
    { 
        src: getResourcePath('CAPSTONE_make/hero.webp'),
        width: 380, 
        height: 300, 
        title: 'CAPSTONE_make', 
        year: '2024',
        description: 'The *Scalable Infill Creator* is a custom-designed end effector developed for integration with a UR3 robotic arm. Engineered to fabricate wood-based infill structures and tension members, the system forms the internal framework for modular mycelium panels. By translating parametric design logic into precise material output, it enables scalable, repeatable, and materially efficient fabrication tailored to each panel\'s geometry.\n\nThrough a process of robotic automation, slender wooden elements are deployed into configured patterns, acting as both structural reinforcement and geometric scaffolding within the formwork during mycelium growth. This approach merges digital fabrication with physical computation, embedding intelligence into both the design process and material system.',
        slug: 'capstone_make',
        videos: [
            {
                type: 'youtube',
                id: 'HD5T02s5_pI',
                title: 'Video documentation',
                year: '2024',
                medium: 'Fabrication'
            }
        ]
    },
    { 
        src: getResourcePath('CAPSTONE_test/hero.webp'),
        width: 280, 
        height: 350,
        title: 'CAPSTONE_test', 
        year: '2025',
        description: 'The *Acoustic Tube Tester* is a DIY sound isolation system designed to evaluate the acoustic dampening performance of material samples. Using a directional sound source and a calibrated receiver positioned within a controlled tubular environment, the device measures sound transmission loss across various materials.\n\nConstructed from simple, accessible components, the setup simulates a vacuum-like chamber to minimize ambient interference. By isolating the sound path and capturing residual sound levels, it provides a low-cost method for assessing material-based sound attenuation. Tested samples include mycelium composite, cork sheet, and SonaSpray, offering comparative insights into their acoustic absorption properties.',
        slug: 'capstone_test',
        videos: [
            {
                type: 'youtube',
                id: 'j5Tt_S9Vup8',
                title: 'Video documentation',
                year: '2025',
                medium: 'Acoustics testing'
            }
        ]
    },
    { 
        src: getResourcePath('Colloquium01/hero.png'), 
        width: 350, 
        height: 400,
        title: 'Colloquium01', 
        year: '2024',
        description: 'Colloquium01 synthesizes research findings from an interdisciplinary forum on emerging technologies. This presentation visualizes complex relationships between technological innovation and social impact, mapping connections across diverse fields to identify patterns and opportunities.',
        slug: 'colloquium01'
    },
    { 
        src: getResourcePath('DataViz/hero.png'), 
        width: 400, 
        height: 320,
        title: 'DataViz', 
        year: '2024',
        description: '*Hue Knew?* is an interactive web-based quiz developed by Hao Lee, Julia Kwon, and Vaibhav Jain as a final project for the 2024 course *Data Visualization for Architecture, Urbanism, and the Humanities* at Columbia University\'s Graduate School of Architecture, Planning, and Preservation (GSAPP). The project explores the relationship between color palettes and cinematic genres, challenging users to identify film genres based solely on curated color schemes. By gamifying visual analysis, *Hue Knew?* offers an engaging platform to examine how color theory and visual perception inform genre recognition and storytelling in film.',
        slug: 'dataviz',
        videos: [
            {
                type: 'youtube',
                id: 'VfR0h_FfCkY',
                title: 'Project Demo',
                year: '2024',
                medium: 'Interactive'
            }
        ]
    },
    { 
        src: getResourcePath('EchoPULSE/hero.png'), 
        width: 300, 
        height: 300,
        title: 'EchoPULSE', 
        year: '2025',
        description: 'EchoPulse is an interactive game that visualizes players\' real-time heart rates through dynamic, pulsating waves.\n\nThe game uses biofeedback technology to create an immersive experience where participants can observe and manipulate their biometric data to achieve visual harmony.',
        slug: 'echopulse',
        isVideoHero: true,
        videos: [
            {
                type: 'youtube',
                id: 'o2tsGA1ngAQ',
                title: 'Interactive Game',
                year: '2025',
                medium: 'Echo Pulse',
                isHero: true
            }
        ]
    },
    { 
        src: getResourcePath('GIS/hero.png'), 
        width: 320, 
        height: 400, 
        title: 'GIS', 
        year: '2024',
        description: '*GIS for Design Practices* is an interactive spatial analysis project developed by Kitae Kim and Julia Kwon that examines the accessibility of delivery services across the United States. Utilizing MapLibre and Maputnik, the project visualizes disparities in package, grocery, and meal delivery coverage, highlighting regions—termed "delivery deserts"—where services are limited or absent. Through layered mapping and case studies, it explores the intersection of infrastructure, population density, and geographic barriers, offering insights into how spatial data can inform equitable design and service planning.',
        slug: 'gis',
        isVideoHero: true,
        videos: [
            {
                type: 'youtube',
                id: 'FupW2hQdHAM',
                title: 'Project Demo',
                year: '2024',
                medium: 'Interactive',
                isHero: true
            }
        ]
    },
    { 
        src: getResourcePath('LumenBeat/hero.png'), 
        width: 380, 
        height: 300, 
        title: 'LumenBeat', 
        year: '2022',
        description: '*LUMENBEAT* is an interactive Automaton that transforms biometric reading into a pulsating illumination. It draws inspiration from digital artists whose work deal with light features and human touch. Our design objective was to create a touch based digital object that reflects a person\'s heart rate in more ambient atmospheric conditions. Nestled within a hand-shaped recess, a touch sensor invites contact - activating a pulsing choreography of light driven by digital components within the object.',
        slug: 'lumenbeat',
        videos: [
            {
                type: 'youtube',
                id: 'RzlMUqnRZ_I',
                title: 'Interactive Object',
                year: '2022',
                medium: 'Lumen Beat'
            }
        ]
    },
    { 
        src: getResourcePath('MetaTool/hero.png'), 
        width: 280, 
        height: 350,
        title: 'MetaTool', 
        year: '2024',
        description: 'This project reconceptualizes wakefulness as a generative state shaped by physical balance and creative expression. Attention is treated not as a finite resource but as a dynamic instrument—responsive to bodily and environmental conditions—that enables mindfulness and spontaneity. By replacing routine-driven alertness with intentional, embodied engagement, the project reframes wakefulness as a practice of attunement and exploration.\n\nTraditionally reactive, my relationship to attention is shifting toward a generative and embodied practice. No longer triggered solely by external stimuli like caffeine or music, attention is cultivated through movement, sound, and mindful presence. The balancing board becomes both medium and metaphor: I act as both performer and listener, using physical focus to produce and respond to spontaneous acoustic expressions. This framework treats attention as a pliable, creative force—reshaped through bodily rhythm and emotional tone. Morning rituals thus evolve into intentional acts of recalibration, where motion and space serve as tools for grounding awareness. Ultimately, the project positions wakefulness as a form of mindful creativity—an adaptive, self-reflective process grounded in balance, spontaneity, and environmental attunement.',
        slug: 'metatool',
        videos: [
            {
                type: 'youtube',
                id: 'ROk9-g6davw',
                title: 'Video documentation',
                year: '2024',
                medium: 'Interactive tool'
            }
        ]
    },
    { 
        src: getResourcePath('Photography/hero.jpg'), // Using .jpg
        width: 350, 
        height: 400,
        title: 'Photography', 
        year: '2025',
        description: 'Photography explores composition, light, and narrative through digital imagery. This series documents ephemeral moments and constructed scenes, using the camera as both an observational tool and a medium for conceptual exploration.',
        slug: 'photography'
    },
    { 
        src: getResourcePath('RubeGoldberg/hero.png'), 
        width: 400, 
        height: 320,
        title: 'RubeGoldberg', 
        year: '2024',
        description: 'RubeGoldberg investigates chain reactions and mechanical systems through playful complexity. This project combines physical computing and kinetic elements to create elaborate sequences where each action triggers the next, exploring causality through deliberate overcomplication.',
        slug: 'rubegoldberg',
        isVideoHero: true,
        videos: [
            {
                type: 'youtube',
                id: 'Dr4IfNH6Ngk',
                title: 'Rube Goldberg Machine',
                year: '2024',
                medium: 'Unpredictable',
                isHero: true
            }
        ]
    },
    { 
        src: getResourcePath('Zine/hero.png'), 
        width: 300, 
        height: 300,
        title: 'Zine', 
        year: '2024',
        description: 'An interactive game that explores the intersection of physical and digital interaction through collaborative play. Players engage with a dynamic interface that responds to their movements and choices, creating a unique experience that bridges traditional gaming mechanics with experimental interaction design. The project investigates how shared digital spaces can foster meaningful connections and spontaneous creativity.',
        slug: 'zine',
        isVideoHero: true,
        videos: [
            {
                type: 'youtube',
                id: 'ZhHwTqa2q_U',
                title: 'Interactive Game',
                year: '2024',
                medium: 'Collaborative',
                isHero: true
            }
        ]
    }
];

// No longer using manual positioning - using CSS grid layout instead

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

// Function to position images in a grid without overlapping
function positionImages(shuffle = true) {
    const gallery = document.getElementById('gallery');
    
    // Set gallery container styles to ensure full-width grid layout
    gallery.style.display = 'grid';
    gallery.style.gridTemplateColumns = 'repeat(4, 1fr)';
    gallery.style.gap = '30px';
    gallery.style.width = '100%';
    gallery.style.maxWidth = '100%';
    gallery.style.margin = '0';
    gallery.style.padding = '40px';
    
    // Clear gallery
    gallery.innerHTML = '';
    
    // Shuffle images if requested
    const displayImages = shuffle ? shuffleArray(images) : images;
    
    // Process all images
    displayImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.index = index;
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        
        // Calculate dimensions with project-specific scaling
        const aspectRatio = image.width / image.height;
        
        // Make Zine and EchoPULSE 20% larger than other images
        let scaleFactor = 0.5; // Default: 1/2 of original size
        if (image.title === 'Zine' || image.title === 'EchoPULSE') {
            scaleFactor = 0.6; // 60% of original size (20% larger than other images)
        }
        
        const newWidth = Math.floor(image.width * scaleFactor);
        const newHeight = Math.floor(image.height * scaleFactor);
        
        img.width = newWidth;
        img.height = newHeight;
        
        // Add click for project detail
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showProjectDetail(images[index]);
        });
        
        // Add error handling for the image
        img.onerror = function() {
            console.error(`Failed to load image: ${img.src}`);
            console.log('Current working directory:', window.location.href);
            item.style.opacity = '0.2'; // Make failed images semi-transparent instead of removing them
        };
        
        // Add load event handler
        img.onload = function() {
            console.log('Successfully loaded image:', image.title);
            item.style.opacity = '1';
        };
        
        // Add item to gallery
        item.appendChild(img);
        gallery.appendChild(item);
        
        // Set cursor style for project detail
        item.style.cursor = 'pointer';
    });
}

// Function to show project detail with multiple images
function showProjectDetail(imageData) {
    // Hide gallery and show project detail
    const galleryContainer = document.getElementById('gallery');
    const projectDetail = document.getElementById('project-detail');
    const projectsPage = document.getElementById('projects-page');
    const imagesContainer = document.getElementById('project-images-container');
    const videosContainer = document.getElementById('project-videos-container');
    
    if (galleryContainer) galleryContainer.style.display = 'none';
    if (projectsPage) projectsPage.style.display = 'none';
    projectDetail.style.display = 'block';
    
    // Set the project identifier
    projectDetail.setAttribute('data-project', imageData.title.toLowerCase());
    
    // Clear existing content
    imagesContainer.innerHTML = '';
    if (videosContainer) videosContainer.innerHTML = '';
    
    // Update title and description
    document.getElementById('project-title-text').innerHTML = `${imageData.title} <span id="project-year">${imageData.year}</span>`;
    document.getElementById('project-description').innerHTML = imageData.description;
    
    // Handle hero image/video
    if (imageData.isVideoHero && imageData.videos) {
        const heroVideo = imageData.videos.find(v => v.isHero);
        if (heroVideo) {
            const videoWrapper = createVideoElement(heroVideo, true);
            imagesContainer.appendChild(videoWrapper);
        }
    } else {
        // Create hero image wrapper
        const heroImageWrapper = document.createElement('div');
        heroImageWrapper.className = 'project-image-wrapper';
        
        // Create and add hero image
        const heroImage = document.createElement('img');
        heroImage.src = imageData.src;
        heroImage.alt = imageData.title;
        
        // Add appropriate hero image class based on project type
        if (imageData.title.includes('CAPSTONE')) {
            heroImage.className = 'hero-image capstone-hero-image';
        } else if (imageData.title === 'DataViz') {
            heroImage.className = 'hero-image dataviz-hero-image';
        } else if (imageData.title === 'LumenBeat') {
            heroImage.className = 'hero-image lumenbeat-hero-image';
        } else {
            heroImage.className = 'hero-image';
        }
        
        heroImageWrapper.appendChild(heroImage);
        
        // Add hero image caption
        const heroCaption = document.createElement('div');
        heroCaption.className = 'image-caption';
        
        const heroCaptionText = document.createElement('span');
        heroCaptionText.textContent = 'Image 00';
        
        const heroCaptionMedium = document.createElement('span');
        heroCaptionMedium.textContent = 'Digital print';
        
        const heroCaptionYear = document.createElement('span');
        heroCaptionYear.textContent = imageData.year;
        
        heroCaption.appendChild(heroCaptionText);
        heroCaption.appendChild(heroCaptionMedium);
        heroCaption.appendChild(heroCaptionYear);
        
        heroImageWrapper.appendChild(heroCaption);
        imagesContainer.appendChild(heroImageWrapper);
    }
    
    // Special handling for Photography, EchoPULSE, LumenBeat, and MetaTool projects
    if (imageData.title === 'Photography') {
        loadPhotographyImages(imagesContainer);
    } else if (imageData.title === 'EchoPULSE') {
        loadEchoPULSEImages(imagesContainer);
    } else if (imageData.title === 'LumenBeat') {
        loadLumenBeatImages(imagesContainer);
    } else if (imageData.title === 'MetaTool') {
        loadMetaToolImages(imagesContainer);
    }
    
    // Handle additional videos if present
    if (imageData.videos) {
        const nonHeroVideos = imageData.videos.filter(v => !v.isHero);
        if (nonHeroVideos.length > 0) {
            if (!videosContainer) {
                const newVideosContainer = document.createElement('div');
                newVideosContainer.id = 'project-videos-container';
                projectDetail.insertBefore(newVideosContainer, document.getElementById('back-button'));
            }
            nonHeroVideos.forEach(video => {
                const videoWrapper = createVideoElement(video, false);
                videosContainer.appendChild(videoWrapper);
            });
        }
    }
    
    // Update URL hash
    const projectSlug = imageData.title.toLowerCase().replace(/ /g, '-');
    window.location.hash = `project-${projectSlug}`;
}

// Function to show gallery
function showGallery() {
    document.getElementById('project-detail').style.display = 'none';
    document.getElementById('projects-page').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
    
    // Position images with shuffling by default
    positionImages(true);
    
    // Update navigation
    document.getElementById('works-link').classList.add('active');
    document.getElementById('projects-link').classList.remove('active');
    
    history.pushState({}, 'Gallery', window.location.pathname);
}

// Function to show projects page
function showProjectsPage() {
    const gallery = document.getElementById('gallery');
    const projectDetail = document.getElementById('project-detail');
    const projectsPage = document.getElementById('projects-page');
    
    if (gallery) gallery.style.display = 'none';
    if (projectDetail) projectDetail.style.display = 'none';
    if (projectsPage) projectsPage.style.display = 'block';
    
    // Update navigation
    document.getElementById('works-link').classList.remove('active');
    document.getElementById('projects-link').classList.add('active');
    
    // Add click events to project rows if not already added
    const projectRows = document.querySelectorAll('.project-index-row');
    console.log('Found project rows:', projectRows.length);
    
    projectRows.forEach(row => {
        if (!row.hasAttribute('data-initialized')) {
            row.setAttribute('data-initialized', 'true');
            const projectTitle = row.querySelector('.project-title').textContent;
            console.log('Setting up click handler for project:', projectTitle);
            
            // Find matching project data
            const projectData = images.find(img => img.title === projectTitle);
            console.log('Found project data:', projectData ? 'yes' : 'no');
            
            if (projectData) {
                row.addEventListener('click', function() {
                    console.log('Project row clicked:', projectTitle);
                    showProjectDetail(projectData);
                    history.pushState(
                        {project: projectTitle},
                        projectTitle,
                        '#project-' + encodeURIComponent(projectTitle.toLowerCase())
                    );
                });
            } else {
                console.warn('No project data found for:', projectTitle);
            }
        }
    });
}

// Function to load photography images
function loadPhotographyImages(container) {
    // Define the image filenames and their corresponding captions for the Photography project
    const photoDetails = [
        {
            path: getResourcePath('Photography/JJK2256_00.jpg'),
            caption: ['Image 00', 'Digital print', '2025']
        },
        {
            path: getResourcePath('Photography/JJK2256_01.jpg'),
            caption: ['Image 01', 'Digital print', '2025']
        },
        {
            path: getResourcePath('Photography/JJK2256_03.jpg'),
            caption: ['Image 02', 'Digital print', '2025']
        },
        {
            path: getResourcePath('Photography/JJK2256_04.jpg'),
            caption: ['Image 03', 'Digital print', '2025']
        },
        {
            path: getResourcePath('Photography/JJK2256_05.jpg'),
            caption: ['Image 04', 'Digital print', '2025']
        },
        {
            path: getResourcePath('Photography/JJK2256_06.jpg'),
            caption: ['Image 05', 'Digital print', '2025']
        },
        {
            path: getResourcePath('Photography/JJK2256_07.jpg'),
            caption: ['Image 06', 'Digital print', '2025']
        },
        {
            path: getResourcePath('Photography/JJK2256_08.jpg'),
            caption: ['Image 07', 'Digital print', '2025']
        },
        {
            path: getResourcePath('Photography/JJK2256_09.jpg'),
            caption: ['Image 08', 'Digital print', '2025']
        }
    ];
    
    // Create a container for the photo grid
    const photoGridContainer = document.createElement('div');
    photoGridContainer.className = 'photo-grid-container';
    
    // Skip the first image (hero) and add the rest to the grid
    // Start from index 1 to skip the hero image which is already shown
    for (let i = 1; i < photoDetails.length; i++) {
        const photoDetail = photoDetails[i];
        
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'photo-item';
        imageWrapper.setAttribute('data-image', String(i).padStart(2, '0'));
        
        const image = document.createElement('img');
        image.src = photoDetail.path;
        image.alt = `Photography Series Image ${i}`;
        image.loading = 'lazy'; // Lazy load for better performance
        
        // Add error handling for the image
        image.onerror = function() {
            console.error(`Failed to load photography image: ${photoDetail.path}`);
            // Remove the wrapper if image fails to load
            imageWrapper.remove();
        };
        
        // Add click event to show image in fullscreen
        imageWrapper.addEventListener('click', function() {
            showImageFullscreen(photoDetail.path);
        });
        
        imageWrapper.appendChild(image);
        
        // Add caption with the format shown in your screenshot
        const caption = document.createElement('div');
        caption.className = 'image-caption';
        
        const captionParts = document.createElement('div');
        captionParts.className = 'caption-text';
        
        // Add custom caption elements
        photoDetail.caption.forEach(text => {
            const span = document.createElement('span');
            span.textContent = text;
            captionParts.appendChild(span);
        });
        
        caption.appendChild(captionParts);
        imageWrapper.appendChild(caption);
        
        // Add image wrapper to grid container
        photoGridContainer.appendChild(imageWrapper);
    }
    
    // Add the photo grid container to the main container
    container.appendChild(photoGridContainer);
}

// Function to show an image in fullscreen mode
function showImageFullscreen(imageSrc) {
    // Create fullscreen container
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.className = 'fullscreen-container';
    
    // Create the image element
    const fullscreenImage = document.createElement('img');
    fullscreenImage.src = imageSrc;
    fullscreenImage.className = 'fullscreen-image';
    
    // Add error handling for the fullscreen image
    fullscreenImage.onerror = function() {
        console.error(`Failed to load fullscreen image: ${imageSrc}`);
        document.body.removeChild(fullscreenContainer);
        alert('Sorry, the image could not be loaded.');
    };
    
    // Create minimal close button
    const closeButton = document.createElement('div');
    closeButton.className = 'fullscreen-close';
    closeButton.innerHTML = '×';
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the event from bubbling up
        document.body.removeChild(fullscreenContainer);
    });
    
    // Add everything to the container
    fullscreenContainer.appendChild(fullscreenImage);
    fullscreenContainer.appendChild(closeButton);
    
    // Add click event to close when clicking background
    fullscreenContainer.addEventListener('click', function(e) {
        if (e.target === fullscreenContainer) {
            document.body.removeChild(fullscreenContainer);
        }
    });
    
    // Add keyboard event to close with Escape key
    const escapeHandler = function(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(fullscreenContainer);
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
    
    // Add to body
    document.body.appendChild(fullscreenContainer);
    
    // Make sure cursor dot is visible in fullscreen mode
    if (document.getElementById('cursor-dot')) {
        fullscreenContainer.addEventListener('mousemove', function(e) {
            const cursor = document.getElementById('cursor-dot');
            cursor.classList.add('active');
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }
}

// Initialize shuffle button
function initShuffleButton() {
    const shuffleButton = document.getElementById('shuffle-button');
    if (shuffleButton) {
        shuffleButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (document.getElementById('gallery').style.display !== 'none') {
                positionImages(true); // Shuffle and reposition
                console.log('Images shuffled');
            }
        });
    } else {
        console.error('Shuffle button not found!');
    }
}

// Initialize custom cursor
function initCustomCursor() {
    const cursor = document.getElementById('cursor-dot');
    if (!cursor) {
        console.error('Cursor dot element not found!');
        return;
    }
    
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
    
    // Create a mutation observer for tracking new interactive elements
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
    
    // Start observing document changes
    observer.observe(document.body, { 
        childList: true, 
        subtree: true 
    });
    
    // Store the observer instance for later cleanup
    window.cursorObserver = observer;
}

// Initial setup
window.addEventListener('load', function() {
    // Create grid lines
    createGridLines();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize shuffle button
    initShuffleButton();
    
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
    
    // If gallery is visible, reposition images
    if (document.getElementById('gallery').style.display !== 'none') {
        positionImages();
    }
});

// Make sure the document is fully loaded before attaching event handlers
document.addEventListener('DOMContentLoaded', function() {
    // Setup navigation events with explicit error handling
    const projectsLink = document.getElementById('projects-link');
    if (projectsLink) {
        projectsLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Projects link clicked'); // Debugging log
            showProjectsPage();
        });
    } else {
        console.error('Projects link element not found!');
    }
    
    const worksLink = document.getElementById('works-link');
    if (worksLink) {
        worksLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Works link clicked'); // Debugging log
            showGallery();
        });
    } else {
        console.error('Works link element not found!');
    }
    
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Logo link clicked'); // Debugging log
            showGallery();
        });
    } else {
        console.error('Logo link element not found!');
    }
    
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Back button clicked'); // Debugging log
            showGallery();
        });
    } else {
        console.error('Back button element not found!');
    }
});

// Also update the hash change listener to properly handle direct URL navigation
window.addEventListener('hashchange', function() {
    console.log('Hash changed to: ' + window.location.hash); // Debugging log
    
    if (window.location.hash.startsWith('#project-')) {
        const projectName = decodeURIComponent(window.location.hash.replace('#project-', '').replace(/-/g, ' '));
        const projectData = images.find(img => img.title.toLowerCase() === projectName.toLowerCase());
        if (projectData) {
            showProjectDetail(projectData);
        } else {
            showGallery();
        }
    } else if (window.location.hash === '#projects') {
        showProjectsPage();
    } else {
        showGallery();
    }
});

// Clean up function for page unload (good practice to prevent memory leaks)
window.addEventListener('unload', function() {
    // Disconnect the MutationObserver when page is unloaded
    if (window.cursorObserver) {
        window.cursorObserver.disconnect();
    }
});

// Helper function to create video elements
function createVideoElement(video, isHero) {
    const videoWrapper = document.createElement('div');
    videoWrapper.className = 'project-video-wrapper';
    
    const iframe = document.createElement('iframe');
    iframe.classList.add('project-video', 'youtube-video');
    if (isHero) iframe.classList.add('hero-video');
    iframe.src = `https://www.youtube.com/embed/${video.id}`;
    iframe.title = video.title;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    videoWrapper.appendChild(iframe);
    
    // Add caption for video
    const videoCaption = document.createElement('div');
    videoCaption.className = 'video-caption';
    
    const videoCaptionText = document.createElement('span');
    videoCaptionText.textContent = video.title;
    
    const videoCaptionMedium = document.createElement('span');
    videoCaptionMedium.textContent = video.medium;
    
    const videoCaptionYear = document.createElement('span');
    videoCaptionYear.textContent = video.year;
    
    videoCaption.appendChild(videoCaptionText);
    videoCaption.appendChild(videoCaptionMedium);
    videoCaption.appendChild(videoCaptionYear);
    
    videoWrapper.appendChild(videoCaption);
    return videoWrapper;
}

// No longer need to reset positions with the CSS grid layout

// Function to load EchoPULSE images
function loadEchoPULSEImages(container) {
    // Define the image details
    const imageDetails = [
        // Only keeping one image for EchoPULSE
        {
            path: getResourcePath('EchoPULSE/image02.png'),
            caption: ['Image 02', 'Digital print', '2025'],
            isLeftAligned: true
        }
    ];
    
    // Create a container for the images
    const imageGridContainer = document.createElement('div');
    imageGridContainer.className = 'photo-grid-container';
    
    // Add each image to the grid
    imageDetails.forEach((imageDetail) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'project-image-wrapper';  // Changed from photo-item to project-image-wrapper
        if (imageDetail.isLeftAligned) {
            imageWrapper.classList.add('left-aligned');
        }
        
        const image = document.createElement('img');
        image.src = imageDetail.path;
        image.alt = `EchoPULSE Project Image`;
        image.loading = 'lazy';
        
        // Add error handling for the image
        image.onerror = function() {
            console.error(`Failed to load EchoPULSE image: ${imageDetail.path}`);
            imageWrapper.remove();
        };
        
        // Add click event to show image in fullscreen
        imageWrapper.addEventListener('click', function() {
            showImageFullscreen(imageDetail.path);
        });
        
        imageWrapper.appendChild(image);
        
        // Add caption
        const caption = document.createElement('div');
        caption.className = 'image-caption';
        
        imageDetail.caption.forEach(text => {
            const span = document.createElement('span');
            span.textContent = text;
            caption.appendChild(span);
        });
        
        imageWrapper.appendChild(caption);
        
        // Add image wrapper to grid container
        imageGridContainer.appendChild(imageWrapper);
    });
    
    // Add the image grid container to the main container
    container.appendChild(imageGridContainer);
}

// Function to load LumenBeat images
function loadLumenBeatImages(container) {
    // Define the image details
    const imageDetails = [
        {
            path: getResourcePath('LumenBeat/image01.png'),
            caption: ['Image 01', 'Digital print', '2022']
        }
    ];
    
    // Create a container for the image grid
    const imageGridContainer = document.createElement('div');
    imageGridContainer.className = 'photo-grid-container';
    
    // Add each image to the grid
    imageDetails.forEach((imageDetail) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'photo-item';
        
        const image = document.createElement('img');
        image.src = imageDetail.path;
        image.alt = `LumenBeat Project Image`;
        image.loading = 'lazy';
        
        // Add error handling for the image
        image.onerror = function() {
            console.error(`Failed to load LumenBeat image: ${imageDetail.path}`);
            imageWrapper.remove();
        };
        
        // Add click event to show image in fullscreen
        imageWrapper.addEventListener('click', function() {
            showImageFullscreen(imageDetail.path);
        });
        
        imageWrapper.appendChild(image);
        
        // Add caption
        const caption = document.createElement('div');
        caption.className = 'image-caption';
        
        const captionParts = document.createElement('div');
        captionParts.className = 'caption-text';
        
        imageDetail.caption.forEach(text => {
            const span = document.createElement('span');
            span.textContent = text;
            captionParts.appendChild(span);
        });
        
        caption.appendChild(captionParts);
        imageWrapper.appendChild(caption);
        
        // Add image wrapper to grid container
        imageGridContainer.appendChild(imageWrapper);
    });
    
    // Add the image grid container to the main container
    container.appendChild(imageGridContainer);
}

// Function to load MetaTool images
function loadMetaToolImages(container) {
    // Define the image details
    const imageDetails = [
        {
            path: getResourcePath('MetaTool/image01.png'),
            caption: ['Image 01', 'Digital print', '2024']
        }
    ];
    
    // Create a container for the image grid
    const imageGridContainer = document.createElement('div');
    imageGridContainer.className = 'photo-grid-container';
    
    // Add each image to the grid
    imageDetails.forEach((imageDetail) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'photo-item';
        
        const image = document.createElement('img');
        image.src = imageDetail.path;
        image.alt = `MetaTool Project Image`;
        image.loading = 'lazy';
        
        // Add error handling for the image
        image.onerror = function() {
            console.error(`Failed to load MetaTool image: ${imageDetail.path}`);
            imageWrapper.remove();
        };
        
        // Add click event to show image in fullscreen
        imageWrapper.addEventListener('click', function() {
            showImageFullscreen(imageDetail.path);
        });
        
        imageWrapper.appendChild(image);
        
        // Add caption
        const caption = document.createElement('div');
        caption.className = 'image-caption';
        
        const captionParts = document.createElement('div');
        captionParts.className = 'caption-text';
        
        imageDetail.caption.forEach(text => {
            const span = document.createElement('span');
            span.textContent = text;
            captionParts.appendChild(span);
        });
        
        caption.appendChild(captionParts);
        imageWrapper.appendChild(caption);
        
        // Add image wrapper to grid container
        imageGridContainer.appendChild(imageWrapper);
    });
    
    // Add the image grid container to the main container
    container.appendChild(imageGridContainer);
}