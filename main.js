// Base URL handling for GitHub Pages
const baseUrl = window.location.hostname === 'jjk2256.github.io' ? '/portfolio/' : '/';
const baseUrlNoSlash = window.location.hostname === 'jjk2256.github.io' ? '/portfolio' : '';

// Use this baseUrl when referencing resources
function getResourcePath(path) {
  // Make sure folders with uppercase names like 'Unhampering' work consistently on GitHub Pages
  // GitHub Pages is case-sensitive while local development may not be
  return baseUrl + path;
}

// Function to get correct path for navigation URLs based on environment
function getNavigationPath(path) {
  // Add portfolio prefix for GitHub Pages
  // If path already starts with /, just append the baseUrlNoSlash
  if (path.startsWith('/')) {
    return baseUrlNoSlash + path;
  }
  // Otherwise, use the baseUrl with trailing slash
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
        src: getResourcePath('CAPSTONE/hero.png'),
        width: 340, 
        height: 380, 
        title: 'CAPSTONE', 
        year: '2024-2025',
        description: 'This capstone project investigates regenerative design principles through the integration of digital fabrication, mycelium-based composites, and acoustic performance testing. Structured around three core phases—Make, Grow, and Test—the project outlines a comprehensive process for developing, cultivating, and evaluating sustainable building systems.\n\nTogether, these components form the foundation of the Mycelium Acoustic Module, demonstrating a viable model for bio-based architectural materials that are low-impact, adaptable, and responsive to environmental and acoustic performance needs.\n\nFor a detailed overview of the project, visit the full archive: <a href="https://gsapp-cdp.github.io/archive/projects/2025/mycelium-acoustic-module/" target="_blank">Mycelium Acoustic Module – GSAPP CDP Archive</a>.',
        slug: 'capstone'
    },
    { 
        src: getResourcePath('CAPSTONE_grow/hero.webp'),
        width: 320, 
        height: 400, 
        title: 'CAPSTONE_grow', 
        year: '2025',
        description: 'The three-part process of the capstone project continues with environmental monitoring and growing, facilitated by a DIY incubator designed to support and document the development of mycelium-based composites. Built with accessible materials and open-source electronics, the system maintains a controlled microclimate by tracking temperature, humidity, and carbon dioxide concentration in real time. A Raspberry Pi functions as the central controller, interfacing with an Adafruit SCD-40 sensor and a NoIR camera to log environmental data and produce time-lapse imagery of the growth process.\n\nThis self-contained setup enables continuous observation and feedback, offering insight into how environmental factors influence material behavior over time. By integrating digital sensing with biological cultivation, this phase treats material formation as a living, adaptive process—deepening the project\'s commitment to scalable, regenerative construction systems.',
        slug: 'capstone_grow',
        videos: [
            {
                type: 'youtube',
                id: 'je36RTjk31c',
                title: 'Monitored Growth',
                year: '2025',
                medium: 'Process Documentation'
            }
        ]
    },
    { 
        src: getResourcePath('CAPSTONE_make/hero.webp'),
        width: 380, 
        height: 300, 
        title: 'CAPSTONE_make', 
        year: '2024',
        description: 'The three-part process of the capstone project begins with digital fabrication, where a custom-designed end effector integrated with a UR3 robotic arm is used to generate scalable infill structures—slender wooden tension members tailored to each panel\'s geometry. These elements are fabricated through parametric inputs and placed into precise configurations, acting as both reinforcement and scaffolding.\n\nOnce completed, the infill is inserted into a modular formwork, setting the stage for mycelium growth. This phase bridges computational design with robotic automation, embedding structural logic into the panel system while maintaining adaptability across variations. As the foundation for the bio-fabrication process, this step reflects a broader commitment to materially efficient, responsive construction workflows grounded in regenerative design principles.\n\nFor more details on the robotic fabrication process, see the <a href="https://medium.com/design-intelligence-course/transformative-automation-b0ca243ab551" target="_blank">Transformative Automation</a> project documentation.',
        slug: 'capstone_make',
        videos: [
            {
                type: 'youtube',
                id: 'HD5T02s5_pI',
                title: 'Robotic fabrication',
                year: '2024',
                medium: 'Process documentation'
            }
        ]
    },
    { 
        src: getResourcePath('CAPSTONE_test/hero.webp'),
        width: 280, 
        height: 350,
        title: 'CAPSTONE_test', 
        year: '2025',
        description: 'The three-part process of the capstone project concludes with acoustic testing, using a low-tech, DIY setup developed to evaluate the sound absorption performance of bio-based and conventional materials. Constructed from readily available components, the system employs a directional speaker and a calibrated microphone within a tubular enclosure to isolate the sound path and minimize ambient interference—creating a controlled environment for measuring transmission loss.\n\nThis tool was instrumental in testing the acoustic behavior of experimental panels, including mycelium composite, cork sheet, and SonaSpray. By capturing and comparing residual sound levels, the tester offers accessible, preliminary insights into how these materials perform acoustically. Rooted in resourcefulness and open-ended inquiry, this phase complements the project\'s broader goal of assessing the viability of mycelium-based systems as regenerative acoustic solutions for interior environments.',
        slug: 'capstone_test',
        videos: [
            {
                type: 'youtube',
                id: 'j5Tt_S9Vup8',
                title: 'Acoustics Testing',
                year: '2025',
                medium: 'Process Documentation'
            }
        ]
    },
    { 
        src: getResourcePath('Colloquium01/hero.png'), 
        width: 350, 
        height: 400,
        title: 'Pre_Capstone', 
        year: '2024',
        description: 'Summer Colloquium reflects on the arc of the semester and marks the conceptual point of departure for the capstone project. Grounded in the metaphor of urban foraging, it considers how design can emerge not from invention, but from what is already present—materials, systems, and overlooked ecologies. Like Philippe Petit\'s walk between the Twin Towers—undertaken simply because they were there—this approach privileges immediacy and responsiveness over novelty. It began with upcycled plastic, chosen not for its innovation but because it was there. Reclaimed wood followed, sourced from what the city had already discarded. The mycelium module emerged from this same logic: it was grown, not made, because it was there.\n\nThis practice of doing what can be done with what is already available raises a simple but urgent question that now guides the work: what is next?',
        slug: 'pre_capstone',
        videos: [
            {
                type: 'youtube',
                id: '6dqhm6vl0Tw',
                title: 'Project Presentation',
                year: '2024',
                medium: 'Video Documentation'
            }
        ]
    },
    { 
        src: getResourcePath('DataViz/hero.png'), 
        width: 400, 
        height: 320,
        title: 'DataViz', 
        year: '2024',
        description: 'Hue Knew? is an interactive web-based quiz developed by Hao Lee, Julia Kwon, and Vaibhav Jain. The project explores the relationship between color palettes and cinematic genres, challenging users to identify film genres based solely on curated color schemes. By gamifying visual analysis, Hue Knew? offers an engaging platform to examine how color theory and visual perception inform genre recognition and storytelling in film.',
        slug: 'dataviz',
        videos: [
            {
                type: 'youtube',
                id: 'VfR0h_FfCkY',
                title: 'Interactive Game',
                year: '2024',
                medium: 'Project Demonstration'
            }
        ]
    },
    { 
        src: getResourcePath('EchoPULSE/hero.png'), 
        width: 300, 
        height: 300,
        title: 'EchoPULSE', 
        year: '2024',
        description: 'EchoPulse is an interactive game that visualizes players\' real-time heart rates through dynamic, pulsating waves. Created in collaboration with Skylar Zhang, the project uses biofeedback technology and physical computation to transform biometric data into a responsive visual interface. By integrating heart rate sensors, the game enables participants to observe and influence their physiological signals, fostering a unique interplay between body and environment. Through this system, players are invited to achieve visual harmony by actively engaging with their own heartbeat—turning internal rhythms into a shared, interactive experience.',
        slug: 'echopulse',
        isVideoHero: true,
        videos: [
            {
                type: 'youtube',
                id: 'o2tsGA1ngAQ',
                title: 'two-player interactive game',
                year: '2024',
                medium: 'project demonstration',
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
        description: 'This project maps the service access of package, grocery, and meal delivery across the United States, revealing disparities in coverage and identifying regions—termed "delivery deserts"—where services are limited or absent. Developed by Kitae Kim and Julia Kwon, the interactive spatial analysis uses MapLibre and Maputnik to visualize how infrastructure, population density, and geographic barriers shape accessibility. Through layered mapping and focused case studies, the project explores how spatial data can support more equitable approaches to design and service distribution.',
        slug: 'gis',
        isVideoHero: true,
        videos: [
            {
                type: 'youtube',
                id: 'FupW2hQdHAM',
                title: 'mapping service access',
                year: '2024',
                medium: 'project demonstration',
                isHero: true
            }
        ]
    },
    { 
        src: getResourcePath('LumenBeat/hero.png'), 
        width: 380, 
        height: 300, 
        title: 'LumenBeat', 
        year: '2025',
        description: 'LUMENBEAT is a digital automaton that transforms biometric readings into pulsating illumination. Created in collaboration with Adnan Kasubhai and Kitae Kim, the project draws inspiration from digital artists who explore the interplay between light and human touch. Designed as a touch-based digital object, LUMENBEAT reflects a person\'s heart rate through ambient, atmospheric lighting.\n\nAt its core, the project integrates physical computation—translating biometric input into dynamic light patterns through embedded sensors and microcontrollers. The sculptural housing was fabricated through robotic metal forming, enabling the creation of precise, fluid geometries that echo the contours of the human hand. Nestled within a hand-shaped recess, a touch sensor invites contact—activating a choreographed pulse of light that responds in real time.\n\nBy merging biometric sensing, robotic fabrication, and interactive lighting, LUMENBEAT becomes both interface and instrument—transforming internal rhythms into a shared spatial experience.',
        slug: 'lumenbeat',
        videos: [
            {
                type: 'youtube',
                id: 'RzlMUqnRZ_I',
                title: 'Sensor Based Automaton',
                year: '2025',
                medium: 'Video Documentation'
            }
        ]
    },
    { 
        src: getResourcePath('MetaTool/hero.png'), 
        width: 280, 
        height: 350,
        title: 'MetaTool', 
        year: '2024',
        description: 'This project begins with a simple intent: to replace caffeine-driven alertness with a ritual of embodied wakefulness. Each morning, I bend a metal wire into a spontaneous shape, connecting it to a physical computing system that transforms form into sound. As the wire\'s geometry becomes music, I balance on a board—listening, responding, recalibrating. The act is improvised yet attuned: a feedback loop between body, object, and sound.\n\nThe balancing board serves as both medium and metaphor, while the wire becomes an attention medium—a conduit for focusing awareness through tactile creation and acoustic response. In this system, attention is not passive or depleted, but sculpted and redirected through physical action.\n\nNo longer reactive to external triggers, wakefulness is reframed as an adaptive, generative process. Attention is cultivated—not consumed—through deliberate engagement with space and sensation. Through physical computation and spontaneous ritual, alertness is not something taken, but something made—grounded in balance, shaped by movement, and sustained through mindful presence.',
        slug: 'metatool',
        videos: [
            {
                type: 'youtube',
                id: 'ROk9-g6davw',
                title: 'Physical Computation',
                year: '2024',
                medium: 'Process Documentation'
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
        description: 'RubeGoldberg investigates chain reactions and mechanical systems through playful complexity. Created in collaboration with Hao Lee, this project combines physical computing and kinetic elements to construct elaborate sequences where each action triggers the next. As the game unfolds, the chain reactions often transform in unexpected ways, introducing unpredictable outcomes that highlight the tension between control and chaos. Through deliberate over-complication, the project explores causality, failure, and surprise as core components of interactive design.',
        slug: 'rubegoldberg',
        isVideoHero: true,
        videos: [
            {
                type: 'youtube',
                id: 'Dr4IfNH6Ngk',
                title: 'RubeGoldberg machine',
                year: '2024',
                medium: 'project documentation',
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
        description: 'An interactive game that explores the intersection of physical and digital interaction through collaborative play. Developed in collaboration with Panyanus Jansomwong, Pakjira Itthisang, and Kitae Kim, the project weaves together each group member\'s colloquium idea into a unified gaming experience. Players engage with a dynamic interface that responds to their movements and choices, creating a unique experience that bridges traditional gaming mechanics with experimental interaction design. At its core, the game investigates how shared digital spaces can foster meaningful connections, spontaneous creativity, and collective authorship.',
        slug: 'zine',
        isVideoHero: true,
        videos: [
            {
                type: 'youtube',
                id: 'ZhHwTqa2q_U',
                title: 'interactive zine',
                year: '2024',
                medium: 'project demonstration',
                isHero: true
            }
        ]
    },
    { 
        src: getResourcePath('Unhampering/hero.png'), 
        // Provide an alternative fallback path specifically for GitHub Pages
        githubSrc: '/portfolio/unhampering/hero.png',
        width: 350, 
        height: 400,
        title: 'Unhampering', 
        year: '2024',
        description: 'UNHAMPERING, a collaborative project by Julia Kwon and Jonathan Marcos, reimagines the global clothing waste crisis through the lens of language. Just as fast fashion generates excess and disposability, the project treats its own research text as a material system—fragmented, overwhelming, and in need of restructuring.\n\nDrawing parallels between discarded garments and discarded language, the project disassembles its written report into modular typographic elements that reflect the lifecycle of clothing: produced, discarded, reclaimed, and reused. By working with the report\'s own text as both subject and structure, UNHAMPERING explores how narratives of sustainability can be made spatial, legible, and materially felt—slowing the pace of both consumption and communication through acts of dismantling and care.',
        slug: 'unhampering',
        heroCaption: {
            title: 'Unpacking Narrative',
            medium: 'Speculative Design',
            year: '2024'
        },
        additionalImages: [
            {
                src: getResourcePath('Unhampering/image01.png'),
                // Provide an alternative fallback path specifically for GitHub Pages
                githubSrc: '/portfolio/unhampering/image01.png',
                caption: ['Breakdown of Units', 'Modular Diagram', '2024']
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
        // Use GitHub specific path if available and if on GitHub Pages
        if (window.location.hostname === 'jjk2256.github.io' && image.githubSrc) {
            console.log('Using GitHub specific path for gallery image:', image.githubSrc);
            img.src = image.githubSrc;
        } else {
            img.src = image.src;
        }
        img.alt = image.title;
        
        // Add title overlay
        const titleOverlay = document.createElement('div');
        titleOverlay.className = 'title-overlay';
        titleOverlay.textContent = image.title;
        
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
            showProjectDetail(image);
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
        item.appendChild(titleOverlay);
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
        // Use GitHub specific path if available and if on GitHub Pages
        if (window.location.hostname === 'jjk2256.github.io' && imageData.githubSrc) {
            console.log('Using GitHub specific path for hero:', imageData.githubSrc);
            heroImage.src = imageData.githubSrc;
        } else {
            heroImage.src = imageData.src;
        }
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
        const heroCaptionMedium = document.createElement('span');
        const heroCaptionYear = document.createElement('span');
        
        // Set custom caption for CAPSTONE_make
        if (imageData.title === 'CAPSTONE_make') {
            heroCaptionText.textContent = 'diagrammatic pseudocode';
            heroCaptionMedium.textContent = 'fabrication';
            heroCaptionYear.textContent = '2024';
        } 
        // Set custom caption for CAPSTONE main project
        else if (imageData.title === 'CAPSTONE') {
            heroCaptionText.textContent = 'comprehensive diagram';
            heroCaptionMedium.textContent = 'process pseudocode';
            heroCaptionYear.textContent = '2024-2025';
        }
        // Set custom caption for CAPSTONE_grow
        else if (imageData.title === 'CAPSTONE_grow') {
            heroCaptionText.textContent = 'diagrammatic pseudocode';
            heroCaptionMedium.textContent = 'monitored growth';
            heroCaptionYear.textContent = '2025';
        }
        // Set custom caption for CAPSTONE_test
        else if (imageData.title === 'CAPSTONE_test') {
            heroCaptionText.textContent = 'diagrammatic pseudocode';
            heroCaptionMedium.textContent = 'acoustics testing';
            heroCaptionYear.textContent = '2025';
        }
        // Set custom caption for DataViz
        else if (imageData.title === 'DataViz') {
            heroCaptionText.textContent = 'interface image';
            heroCaptionMedium.textContent = 'interactive game';
            heroCaptionYear.textContent = '2024';
        }
        // Set custom caption for LumenBeat
        else if (imageData.title === 'LumenBeat') {
            heroCaptionText.textContent = 'object image';
            heroCaptionMedium.textContent = 'digital automaton';
            heroCaptionYear.textContent = '2025';
        }
        // Set custom caption for MetaTool
        else if (imageData.title === 'MetaTool') {
            heroCaptionText.textContent = 'documentation image';
            heroCaptionMedium.textContent = 'digital interactive components';
            heroCaptionYear.textContent = '2024';
        }
        // Use heroCaption if provided
        else if (imageData.heroCaption) {
            heroCaptionText.textContent = imageData.heroCaption.title;
            heroCaptionMedium.textContent = imageData.heroCaption.medium;
            heroCaptionYear.textContent = imageData.heroCaption.year;
        }
        else {
            heroCaptionText.textContent = 'Image 00';
            heroCaptionMedium.textContent = 'Digital print';
            heroCaptionYear.textContent = imageData.year;
        }
        
        heroCaption.appendChild(heroCaptionText);
        heroCaption.appendChild(heroCaptionMedium);
        heroCaption.appendChild(heroCaptionYear);
        
        heroImageWrapper.appendChild(heroCaption);
        imagesContainer.appendChild(heroImageWrapper);
    }
    
    // Special case for MetaTool - add video before image01
    if (imageData.title === 'MetaTool' && imageData.videos) {
        // Add videos before images
        const nonHeroVideos = imageData.videos.filter(v => !v.isHero);
        if (nonHeroVideos.length > 0) {
            // Use images container instead of videos container
            nonHeroVideos.forEach(video => {
                const videoWrapper = createVideoElement(video, false);
                // Add right justification to the video wrapper
                videoWrapper.style.alignSelf = 'flex-end'; // Right-justify the wrapper
                videoWrapper.style.width = '100%'; // Ensure full width container
                videoWrapper.classList.add('right-aligned-video');
                
                // Right-justify the actual video element
                const videoElement = videoWrapper.querySelector('.project-video');
                if (videoElement) {
                    videoElement.style.marginLeft = 'auto'; // Push to the right
                }
                
                imagesContainer.appendChild(videoWrapper);
            });
        }
        
        // Now add the MetaTool images
        loadMetaToolImages(imagesContainer);
    } 
    // Special case for LumenBeat - add video before image01
    else if (imageData.title === 'LumenBeat' && imageData.videos) {
        // Add videos before images
        const nonHeroVideos = imageData.videos.filter(v => !v.isHero);
        if (nonHeroVideos.length > 0) {
            // Use images container instead of videos container
            nonHeroVideos.forEach(video => {
                const videoWrapper = createVideoElement(video, false);
                // Add right justification to the video wrapper
                videoWrapper.style.alignSelf = 'flex-end'; // Right-justify the wrapper
                videoWrapper.style.width = '100%'; // Ensure full width container
                videoWrapper.classList.add('right-aligned-video');
                
                // Right-justify the actual video element
                const videoElement = videoWrapper.querySelector('.project-video');
                if (videoElement) {
                    videoElement.style.marginLeft = 'auto'; // Push to the right
                }
                
                imagesContainer.appendChild(videoWrapper);
            });
        }
        
        // Now add the LumenBeat images
        loadLumenBeatImages(imagesContainer);
    }
    else {
        // Standard order for other projects - images first, then videos
        // Special handling for Photography, EchoPULSE, and other projects
    if (imageData.title === 'Photography') {
        loadPhotographyImages(imagesContainer);
    } else if (imageData.title === 'EchoPULSE') {
        loadEchoPULSEImages(imagesContainer);
        } else if (imageData.title === 'Unhampering' && imageData.additionalImages) {
            loadUnhamperingImages(imagesContainer, imageData.additionalImages);
    }
    
        // Handle additional videos if present (for non-MetaTool projects)
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
    }
    
    // Update URL hash - keeping the current path and just adding the hash
    const projectSlug = imageData.title.toLowerCase().replace(/ /g, '-');
    const currentPath = window.location.pathname;
    history.pushState({}, imageData.title, currentPath + '#project-' + projectSlug);
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
    
    // Update URL accounting for GitHub Pages path
    history.pushState({}, 'Gallery', getNavigationPath(window.location.pathname));
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
                    
                    // Use current path as base and append hash for GitHub Pages compatibility
                    const basePath = window.location.pathname;
                    history.pushState(
                        {project: projectTitle},
                        projectTitle,
                        basePath + '#project-' + encodeURIComponent(projectTitle.toLowerCase())
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
    const interactiveElements = document.querySelectorAll('a, .project-index-row, .language-toggle, #randomize-btn, .back-to-gallery');
    
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
        const newInteractiveElements = document.querySelectorAll('a, .project-index-row, .language-toggle, #randomize-btn, .back-to-gallery');
        
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
        // Only override default behavior on gallery and project pages, not on intro.html
        if (window.location.pathname !== '/intro.html' && !window.location.pathname.endsWith('intro.html')) {
            logoLink.addEventListener('click', function(e) {
                // Check if we're already on intro.html
                if (e.currentTarget.getAttribute('href') === 'intro.html') {
                    // Let the default link behavior work
                    return;
                }
                e.preventDefault();
                console.log('Logo link clicked'); // Debugging log
                // Account for GitHub Pages path
                window.location.href = getNavigationPath('/intro.html');
            });
        }
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
    
    // Update all links in the document to add the portfolio prefix when on GitHub Pages
    if (window.location.hostname === 'jjk2256.github.io') {
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            // Only update relative internal links that don't already have /portfolio/ and aren't external links
            if (href && !href.startsWith('http') && !href.startsWith('/portfolio/') && !href.startsWith('#')) {
                // If it's a root-relative link (starts with /)
                if (href.startsWith('/')) {
                    link.href = '/portfolio' + href;
                } 
                // If it's a relative link (doesn't start with /)
                else {
                    link.href = '/portfolio/' + href;
                }
                console.log('Updated link:', href, 'to', link.href);
            }
        });
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
    
    // Check if this is CAPSTONE_make video and customize caption
    if (video.id === 'HD5T02s5_pI') { // CAPSTONE_make video ID
        // Special format for CAPSTONE_make with process documentation and year right-justified
        const leftSpan = document.createElement('span');
        leftSpan.textContent = 'Robotic fabrication';
        
        // Create a right-aligned container for "Process Documentation" and "2024"
        const rightContainer = document.createElement('div');
        rightContainer.style.marginLeft = 'auto'; // This pushes it to the right
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '20px'; // Consistent spacing between right items
        
        const mediumSpan = document.createElement('span');
        mediumSpan.textContent = 'Process Documentation';
        
        const yearSpan = document.createElement('span');
        yearSpan.textContent = '2024';
        
        rightContainer.appendChild(mediumSpan);
        rightContainer.appendChild(yearSpan);
        
        videoCaption.appendChild(leftSpan);
        videoCaption.appendChild(rightContainer);
    } 
    // Check if this is CAPSTONE_grow video and customize caption
    else if (video.id === 'je36RTjk31c') { // CAPSTONE_grow video ID
        // Special format for CAPSTONE_grow with right-justified elements
        const leftSpan = document.createElement('span');
        leftSpan.textContent = 'Monitored Growth';
        
        // Create a right-aligned container
        const rightContainer = document.createElement('div');
        rightContainer.style.marginLeft = 'auto';
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '20px';
        
        const mediumSpan = document.createElement('span');
        mediumSpan.textContent = 'Process Documentation';
        
        const yearSpan = document.createElement('span');
        yearSpan.textContent = '2025';
        
        rightContainer.appendChild(mediumSpan);
        rightContainer.appendChild(yearSpan);
        
        videoCaption.appendChild(leftSpan);
        videoCaption.appendChild(rightContainer);
    }
    // Check if this is CAPSTONE_test video and customize caption
    else if (video.id === 'j5Tt_S9Vup8') { // CAPSTONE_test video ID
        // Special format for CAPSTONE_test with right-justified elements
        const leftSpan = document.createElement('span');
        leftSpan.textContent = 'Acoustics Testing';
        
        // Create a right-aligned container
        const rightContainer = document.createElement('div');
        rightContainer.style.marginLeft = 'auto';
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '20px';
        
        const mediumSpan = document.createElement('span');
        mediumSpan.textContent = 'Process Documentation';
        
        const yearSpan = document.createElement('span');
        yearSpan.textContent = '2025';
        
        rightContainer.appendChild(mediumSpan);
        rightContainer.appendChild(yearSpan);
        
        videoCaption.appendChild(leftSpan);
        videoCaption.appendChild(rightContainer);
    }
    // Check if this is DataViz video and customize caption
    else if (video.id === 'VfR0h_FfCkY') { // DataViz video ID
        // Special format for DataViz with right-justified elements
        const leftSpan = document.createElement('span');
        leftSpan.textContent = 'Interactive Game';
        
        // Create a right-aligned container
        const rightContainer = document.createElement('div');
        rightContainer.style.marginLeft = 'auto';
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '20px';
        
        const mediumSpan = document.createElement('span');
        mediumSpan.textContent = 'Project Demonstration';
        
        const yearSpan = document.createElement('span');
        yearSpan.textContent = '2024';
        
        rightContainer.appendChild(mediumSpan);
        rightContainer.appendChild(yearSpan);
        
        videoCaption.appendChild(leftSpan);
        videoCaption.appendChild(rightContainer);
    }
    // Check if this is EchoPULSE video and customize caption
    else if (video.id === 'o2tsGA1ngAQ') { // EchoPULSE video ID
        // Special format for EchoPULSE with right-justified elements
        const leftSpan = document.createElement('span');
        leftSpan.textContent = 'two-player interactive game';
        
        // Create a right-aligned container
        const rightContainer = document.createElement('div');
        rightContainer.style.marginLeft = 'auto';
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '20px';
        
        const mediumSpan = document.createElement('span');
        mediumSpan.textContent = 'project demonstration';
        
        const yearSpan = document.createElement('span');
        yearSpan.textContent = '2024';
        
        rightContainer.appendChild(mediumSpan);
        rightContainer.appendChild(yearSpan);
        
        videoCaption.appendChild(leftSpan);
        videoCaption.appendChild(rightContainer);
    }
    // Check if this is GIS video and customize caption
    else if (video.id === 'FupW2hQdHAM') { // GIS video ID
        // Special format for GIS with right-justified elements
        const leftSpan = document.createElement('span');
        leftSpan.textContent = 'mapping service access';
        
        // Create a right-aligned container
        const rightContainer = document.createElement('div');
        rightContainer.style.marginLeft = 'auto';
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '20px';
        
        const mediumSpan = document.createElement('span');
        mediumSpan.textContent = 'project demonstration';
        
        const yearSpan = document.createElement('span');
        yearSpan.textContent = '2024';
        
        rightContainer.appendChild(mediumSpan);
        rightContainer.appendChild(yearSpan);
        
        videoCaption.appendChild(leftSpan);
        videoCaption.appendChild(rightContainer);
    }
    // Check if this is LumenBeat video and customize caption
    else if (video.id === 'RzlMUqnRZ_I') { // LumenBeat video ID
        // Special format for LumenBeat with right-justified elements
        const leftSpan = document.createElement('span');
        leftSpan.textContent = 'Sensor Based Automaton';
        
        // Create a right-aligned container
        const rightContainer = document.createElement('div');
        rightContainer.style.marginLeft = 'auto';
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '20px';
        
        const mediumSpan = document.createElement('span');
        mediumSpan.textContent = 'Video Documentation';
        
        const yearSpan = document.createElement('span');
        yearSpan.textContent = '2025';
        
        rightContainer.appendChild(mediumSpan);
        rightContainer.appendChild(yearSpan);
        
        videoCaption.appendChild(leftSpan);
        videoCaption.appendChild(rightContainer);
    }
    // Check if this is MetaTool video and customize caption
    else if (video.id === 'ROk9-g6davw') { // MetaTool video ID
        // Special format for MetaTool with right-justified elements
        const leftSpan = document.createElement('span');
        leftSpan.textContent = 'Physical Computation';
        
        // Create a right-aligned container
        const rightContainer = document.createElement('div');
        rightContainer.style.marginLeft = 'auto';
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '20px';
        
        const mediumSpan = document.createElement('span');
        mediumSpan.textContent = 'Process Documentation';
        
        const yearSpan = document.createElement('span');
        yearSpan.textContent = '2024';
        
        rightContainer.appendChild(mediumSpan);
        rightContainer.appendChild(yearSpan);
        
        videoCaption.appendChild(leftSpan);
        videoCaption.appendChild(rightContainer);
    }
    // Check if this is RubeGoldberg video and customize caption
    else if (video.id === 'Dr4IfNH6Ngk') { // RubeGoldberg video ID
        // Special format for RubeGoldberg with right-justified elements
        const leftSpan = document.createElement('span');
        leftSpan.textContent = 'RubeGoldberg machine';
        
        // Create a right-aligned container
        const rightContainer = document.createElement('div');
        rightContainer.style.marginLeft = 'auto';
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '20px';
        
        const mediumSpan = document.createElement('span');
        mediumSpan.textContent = 'project documentation';
        
        const yearSpan = document.createElement('span');
        yearSpan.textContent = '2024';
        
        rightContainer.appendChild(mediumSpan);
        rightContainer.appendChild(yearSpan);
        
        videoCaption.appendChild(leftSpan);
        videoCaption.appendChild(rightContainer);
    }
    // Check if this is Zine video and customize caption
    else if (video.id === 'ZhHwTqa2q_U') { // Zine video ID
        // Special format for Zine with right-justified elements
        const leftSpan = document.createElement('span');
        leftSpan.textContent = 'interactive zine';
        
        // Create a right-aligned container
        const rightContainer = document.createElement('div');
        rightContainer.style.marginLeft = 'auto';
        rightContainer.style.display = 'flex';
        rightContainer.style.gap = '20px';
        
        const mediumSpan = document.createElement('span');
        mediumSpan.textContent = 'project demonstration';
        
        const yearSpan = document.createElement('span');
        yearSpan.textContent = '2024';
        
        rightContainer.appendChild(mediumSpan);
        rightContainer.appendChild(yearSpan);
        
        videoCaption.appendChild(leftSpan);
        videoCaption.appendChild(rightContainer);
    }
    else {
        // Standard three-part caption for all other videos
    const videoCaptionText = document.createElement('span');
    videoCaptionText.textContent = video.title;
    
    const videoCaptionMedium = document.createElement('span');
    videoCaptionMedium.textContent = video.medium;
    
    const videoCaptionYear = document.createElement('span');
    videoCaptionYear.textContent = video.year;
    
    videoCaption.appendChild(videoCaptionText);
    videoCaption.appendChild(videoCaptionMedium);
    videoCaption.appendChild(videoCaptionYear);
    }
    
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
            caption: ['', '', '']
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
        
        // Add caption (now empty)
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

// Function to load Unhampering images
function loadUnhamperingImages(container, additionalImages) {
    // Create a container for the image grid
    const imageGridContainer = document.createElement('div');
    imageGridContainer.className = 'photo-grid-container';
    imageGridContainer.style.display = 'flex';
    imageGridContainer.style.flexDirection = 'column';
    imageGridContainer.style.alignItems = 'flex-start';
    imageGridContainer.style.gap = '60px';
    
    console.log("Loading Unhampering images. Count:", additionalImages.length);
    console.log("First image path:", additionalImages[0].src);
    
    // Add each image to the grid
    additionalImages.forEach((imageDetail, index) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'photo-item';
        imageWrapper.setAttribute('data-image-index', index);
        imageWrapper.style.width = '100%';
        imageWrapper.style.maxWidth = '100%';
        imageWrapper.style.overflow = 'visible';
        
        const image = document.createElement('img');
        // Use GitHub specific path if available and if on GitHub Pages
        if (window.location.hostname === 'jjk2256.github.io' && imageDetail.githubSrc) {
            image.src = imageDetail.githubSrc;
            console.log('Using GitHub specific path:', imageDetail.githubSrc);
        } else {
            image.src = imageDetail.src;
        }
        image.alt = `Unhampering Project Image ${index + 1}`;
        image.loading = 'lazy';
        image.style.width = '100%';
        image.style.height = 'auto';
        image.style.objectFit = 'contain';
        
        // Add detailed error handling for the image
        image.onerror = function() {
            console.error(`Failed to load Unhampering image: ${image.src}`);
            console.log('Current hostname:', window.location.hostname);
            console.log('Current baseUrl:', baseUrl);
            console.log('Attempted full path:', image.src);
            
            // Try with lowercase path as fallback for GitHub Pages
            if (window.location.hostname === 'jjk2256.github.io' && !imageDetail.githubSrc) {
                const lowercasePath = image.src.toLowerCase();
                console.log('Attempting with lowercase path:', lowercasePath);
                image.src = lowercasePath;
            } else {
                imageWrapper.style.border = '2px dashed red';
                imageWrapper.style.padding = '20px';
                imageWrapper.style.opacity = '0.5';
                const errorMsg = document.createElement('p');
                errorMsg.textContent = 'Image failed to load';
                errorMsg.style.color = 'red';
                imageWrapper.appendChild(errorMsg);
            }
        };
        
        // Add load event handler
        image.onload = function() {
            console.log('Successfully loaded Unhampering image:', image.src);
            imageWrapper.style.opacity = '1';
        };
        
        // Add click event to show image in fullscreen
        imageWrapper.addEventListener('click', function() {
            showImageFullscreen(image.src);
        });
        
        imageWrapper.appendChild(image);
        
        // Add caption
        if (imageDetail.caption) {
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
        }
        
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
            caption: ['', '', '']
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
        
        // Add caption (now empty)
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

// Add CSS rule to ensure Unhampering images are not cropped
document.addEventListener('DOMContentLoaded', function() {
    // Create a style element
    const style = document.createElement('style');
    
    // Add CSS rule for Unhampering project
    style.textContent = `
                 /* Apply scaling only to non-hero images */
         #project-detail[data-project="unhampering"] .photo-item img {
             width: 33.33% !important;
             height: auto !important;
             object-fit: contain !important;
             max-width: none !important;
             max-height: none !important;
         }
         
         /* Scale hero image to match other projects */
         #project-detail[data-project="unhampering"] .project-image-wrapper img {
             width: 50% !important;
             height: auto !important;
             object-fit: contain !important;
             max-width: 100% !important;
         }
        
                 #project-detail[data-project="unhampering"] .photo-item {
             width: 100% !important;
             max-width: 100% !important;
             height: auto !important;
             overflow: visible !important;
             display: flex !important;
             justify-content: flex-end !important;
         }
        
                 #project-detail[data-project="unhampering"] .photo-grid-container {
             display: flex !important;
             flex-direction: column !important;
             align-items: flex-start !important;
             width: 100% !important;
         }
         
         #project-detail[data-project="unhampering"] .photo-item[data-image-index="0"] {
             align-self: flex-end !important;
             margin-right: 0 !important;
         }
         
         #project-detail[data-project="unhampering"] .photo-item[data-image-index="0"] img {
             margin-left: auto !important;
         }
         
         #project-detail[data-project="unhampering"] .photo-item[data-image-index="0"] .image-caption {
             align-self: flex-end !important;
             text-align: right !important;
             margin-left: auto !important;
             width: 33.33% !important;
         }
    `;
    
    // Append style to head
    document.head.appendChild(style);
});