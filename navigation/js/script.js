/**
 * ============================================
 * BRICKIT DESIGNS NAVIGATION - COMPLETE JS
 * ============================================
 */

// Get all DOM elements
const openMenuBtn = document.getElementById('openMenu');
const navOverlay = document.getElementById('navOverlay');
const closeNavBtn = document.getElementById('closeNav');
const navLinks = document.querySelectorAll('.nav-main a');
const exploreContents = document.querySelectorAll('.explore-content');

/**
 * Open the navigation overlay
 */
function openMenu() {
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Close the navigation overlay
 */
function closeMenu() {
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset active states
    navLinks.forEach(link => link.classList.remove('active'));
    exploreContents.forEach(content => content.classList.remove('active'));
}

/**
 * Set active explore content based on navigation selection
 * @param {string} exploreName - The name of the explore section to activate
 */
function setActiveExplore(exploreName) {
    // Remove all active classes
    exploreContents.forEach(content => content.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to selected content
    const activeContent = document.getElementById(`explore-${exploreName}`);
    const activeLink = document.querySelector(`[data-explore="${exploreName}"]`);
    
    if (activeContent) {
        activeContent.classList.add('active');
    }
    
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/**
 * Event Listeners
 */

// Open menu button click
if (openMenuBtn) {
    openMenuBtn.addEventListener('click', openMenu);
}

// Close menu button click
if (closeNavBtn) {
    closeNavBtn.addEventListener('click', closeMenu);
}

// Track current active navigation item
let currentActiveNav = null;

// Hover effect on navigation links
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function(e) {
        e.preventDefault();
        const exploreName = this.getAttribute('data-explore');
        currentActiveNav = exploreName;
        setActiveExplore(exploreName);
    });
});

// Handle navigation and explore section interactions
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

// When leaving navigation area
if (navLeft) {
    navLeft.addEventListener('mouseleave', function(e) {
        // Check if mouse is entering the explore section
        const enteringExplore = e.relatedTarget && navRight.contains(e.relatedTarget);
        
        if (!enteringExplore) {
            // If not entering explore, reset everything
            navLinks.forEach(link => link.classList.remove('active'));
            exploreContents.forEach(content => content.classList.remove('active'));
            currentActiveNav = null;
        }
        // If entering explore section, keep the current selection active
    });
}

// When entering explore section
if (navRight) {
    navRight.addEventListener('mouseenter', function() {
        if (currentActiveNav) {
            const activeExploreContent = document.getElementById(`explore-${currentActiveNav}`);
            
            // If the explore content is empty (home or blog), reset to grey
            if (activeExploreContent && (!activeExploreContent.innerHTML.trim() || activeExploreContent.children.length === 0)) {
                navLinks.forEach(link => link.classList.remove('active'));
                exploreContents.forEach(content => content.classList.remove('active'));
            }
        }
    });

    // When leaving explore section
    navRight.addEventListener('mouseleave', function(e) {
        const enteringNavLeft = e.relatedTarget && navLeft.contains(e.relatedTarget);
        
        if (!enteringNavLeft) {
            // If leaving both sections entirely, reset everything
            navLinks.forEach(link => link.classList.remove('active'));
            exploreContents.forEach(content => content.classList.remove('active'));
            currentActiveNav = null;
        }
    });
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
        closeMenu();
    }
});

// Prevent body scroll when overlay is open
if (navOverlay) {
    navOverlay.addEventListener('wheel', function(e) {
        e.stopPropagation();
    });
}

// Close when clicking outside the overlay content (optional)
if (navOverlay) {
    navOverlay.addEventListener('click', function(e) {
        if (e.target === navOverlay) {
            closeMenu();
        }
    });
}

/**
 * Initialize
 */
console.log('Brickit Designs Navigation - Loaded successfully');
