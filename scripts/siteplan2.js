document.addEventListener('DOMContentLoaded', () => {
    // Array of ballroom dance sections
    const ballroomDances = [
        {
            title: 'Foxtrot',
            description: 'Foxtrot is a smooth dance usually danced to big band music. Body contact must be maintained at all times, allowing tight turns.'
        },
        {
            title: 'Quickstep',
            description: 'Quickstep is designed to be elegant similar to the Foxtrot. Dancers should be light on their feet and energetic. Dancers move briskly around the dancefloor with hops, runs, and chassés.'
        },
        {
            title: 'Tango',
            description: 'A dramatic dance style. It is danced with sharp movements, and passion. The dance follows the lead-follow relationship and is danced primarily in hold. Often Tango is danced to instrumental music.'
        },
        {
            title: 'Viennese Waltz',
            description: 'Characterized by graceful turns that rotate quickly. Viennese Waltz appears to be a fast waltz. Viennese Waltz is primarily danced in hold.'
        },
        {
            title: 'Waltz',
            description: 'Well known dance, characterized by the rise and fall. The dancers appear to glide across the dance floor, in 3/4 time. This dance is danced counter-clockwise around the floor.'
        }
    ];

    // Generate slides dynamically
    const ballroomDanceContainer = document.querySelector('.ballroom-dance-container');
    ballroomDances.forEach(dance => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${dance.title}</h2>
            <p>${dance.description}</p>
        `;
        ballroomDanceContainer.appendChild(card);
    });

    // Slideshow functionality
    let ballroomSlideIndex = 0;
    const ballroomSlides = document.querySelectorAll('.ballroom-dance-container .card');
    const totalBallroomSlides = ballroomSlides.length;

    function showBallroomSlides(n) {
        ballroomSlideIndex = (n + totalBallroomSlides) % totalBallroomSlides;
        const offset = -ballroomSlideIndex * 100;
        ballroomDanceContainer.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.ballroom-prev').addEventListener('click', () => {
        showBallroomSlides(ballroomSlideIndex - 1);
    });

    document.querySelector('.ballroom-next').addEventListener('click', () => {
        showBallroomSlides(ballroomSlideIndex + 1);
    });

    // Initial display
    showBallroomSlides(ballroomSlideIndex);
});