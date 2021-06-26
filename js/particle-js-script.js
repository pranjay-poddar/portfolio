particlesJS('particles-js', {
    particles: {
        number: { value: 30, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: {
            type: 'star',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
            image: { src: 'img/github.svg', width: 80, height: 80 }
        },
        opacity: { value: 0.7, random: false, anim: { enable: false, speed: 1, opacity_min: 0.3, sync: false } },
        size: { value: 2, random: true, anim: { enable: false, speed: 10, size_min: 0.1, sync: false } },
        line_linked: { enable: true, distance: 200, color: '#ffffff', opacity: 0.4, width: 1 },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            direction: 'top',
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 1500, rotateY: 1800 }
        }
    },
    interactivity: {
        detect_on: 'window',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 10 },
            repulse: { distance: 250, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});