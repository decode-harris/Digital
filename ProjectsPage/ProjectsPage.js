// regisiter the 'scroll trigger' addon
gsap.registerPlugin(ScrollTrigger);

// set a scroll trigger animation to the content article element
gsap.from('#projects .header', {
    
    // scroll trigger object
    scrollTrigger: {
        trigger: '#projects .header',
        toggleActions: 'play none none none',

        start: 'top top+=200',
        
        markers: true,
    },

    // animation properties
    x: -30,
    duration: 0.5,
    opacity: 0,

});