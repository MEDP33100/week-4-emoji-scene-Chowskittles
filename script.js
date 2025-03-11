document.addEventListener("DOMContentLoaded", () => {
    
    gsap.to('.cloud1', {
        x: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to('.cloud2', {
        x: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to('.cloud3', {
        x: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // move bats
    gsap.to('.bat1', {
        x: 50,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to('.bat2', {
        x: -50,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.to('.ghost', {
        x: 30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // jumping up and down - they're scared!
    gsap.to('.scared', {
        y: -10,
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});
