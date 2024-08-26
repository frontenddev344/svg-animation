gsap.registerPlugin(ScrollTrigger);

// Select the element you want to animate along the path
let movingElement = document.querySelector(".moving-element");

// Create the ScrollTrigger animation
gsap.to(movingElement, {
  scrollTrigger: {
    trigger: ".wrap",  
    start: "top 80%",  
    end: "bottom top", 
    scrub: 1,
    // markers:true,
  },
  offsetDistance: "100%",  
  ease: "none" 
});
