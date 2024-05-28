document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Set last modified date
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

    // Array of dance sections
    const dances = [
        {
            title: 'Cha Cha',
            description: 'The Cha Cha has many different styles, including the International Latin style and American Rhythm style. The Cha Cha originated in Cuba and was derived from the Rumba.'
        },
        {
            title: 'Jive',
            description: 'There are three main types of Jive. The first is often called by different names such as Lindy Hop and Jitterbug. The second danced in ballroom. It is one of the five international Latin dances. The third style of Jive is danced mainly at clubs.'
        },
        {
            title: 'Paso Doble',
            description: 'Spanish for "double step". Often times, the Paso Doble is danced to a variation of the song España Cañi. The dance resembles a bullfight. The woman is the bull, while the man is the matador. Couples will often strike poses.'
        },
        {
            title: 'Rumba',
            description: 'Considered to be the "Dance of Love". While there are a variety of dances that are described by the word Rumba, the International Latin Rumba is a danced at a slower pace.'
        },
        {
            title: 'Samba',
            description: 'The samba is danced in a 2/4 or 4/4 time, making it a lively dance. The Samba is danced with a downward bounce, which makes it differ from other lively dances such as the Polka. It is often considered a flirty and happy dance.'
        }
    ];

    // Generate slides dynamically
    const danceContainer = document.querySelector('.dance-container');
    dances.forEach(dance => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${dance.title}</h2>
            <p>${dance.description}</p>
        `;
        danceContainer.appendChild(card);
    });

    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.dance-container .card');
    const totalSlides = slides.length;

    function showSlides(n) {
        slideIndex = (n + totalSlides) % totalSlides;
        const offset = -slideIndex * 100;
        danceContainer.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.prev').addEventListener('click', () => {
        showSlides(slideIndex - 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        showSlides(slideIndex + 1);
    });
    document.querySelector('.next').addEventListener('click', () => {
        showSlides(slideIndex + 1);
    });

    // Initial display
    showSlides(slideIndex);
});