document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets:'.hero-background',
        translateX: [-400, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 300,
        opacity: [0, 1],
    })

    anime({
        targets:'.hero-top li',
        translateY: [50, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: (el, i) => {
            return 1800 + 100 * i;
        },
        opacity: [0, 1],
    })

    anime({
        targets:'.hero-content h1',
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1000,
        opacity: [0, 1],
    })

    anime({
        targets:'.hero-content p',
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1300,
        opacity: [0, 1],
    })

    anime({
        targets:'.hero-content button',
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1500,
        opacity: [0, 1],
    })

    anime({
        targets:'.hero-lower img',
        translateX: [100, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1600,
        opacity: [0, 1],
    })
})
