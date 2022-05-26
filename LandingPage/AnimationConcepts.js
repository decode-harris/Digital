// regisiter the 'scroll trigger' addon
gsap.registerPlugin(ScrollTrigger);

// animation the landing title inside the header component
gsap.from('.landing-title', { duration: 1, opacity: 0, y: 30});

// set a scroll trigger animation to the content article element
gsap.from('#landing .content', {
    
    // scroll trigger object
    scrollTrigger: {
        trigger: '#landing .content',
        toggleActions: 'play none none none',

        start: 'top top+=200',
        
        // markers: true,
    },

    // animation properties
    x: 30,
    duration: 0.5,
    opacity: 0,

});

// set a scroll trigger animation on the projects header component
gsap.from('#projects .header', {

    // scroll trigger object
    scrollTrigger: {
        trigger: '#projects .header',
        toggleActions: 'play none none none',

        start: 'top top+=200',

        // markers: true,
    },

    // animation properties
    x: -30,
    duration: 0.5,
    opacity: 0,

});



