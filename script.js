document.addEventListener('DOMContentLoaded', () => {
    const followButton = document.querySelector('.profile-box button');
    const profileBottom = document.querySelector('.profile-bottom');
    const arrowImage = document.querySelector('.profile-bottom img');
    const aboutMeParagraph = document.querySelector('.about-me');

    // Initially hide the additional profile info
    profileBottom.style.display = 'none';

    followButton.addEventListener('click', () => {
        // Toggle the visibility of the profile bottom section
        if (profileBottom.style.display === 'none') {
            profileBottom.style.display = 'block';
            followButton.textContent = 'Following';
        } else {
            profileBottom.style.display = 'none';
            followButton.textContent = 'Follow';
        }
    });

    // Adding functionality for social media icons
    const instagramIcon = document.querySelector('.social-media img:nth-child(1)');
    const telegramIcon = document.querySelector('.social-media img:nth-child(2)');
    
    instagramIcon.addEventListener('click', () => {
        window.open('https://www.instagram.com/sakthi_555_5', '_blank'); // Replace 'yourusername' with your actual username
    });

    telegramIcon.addEventListener('click', () => {
        window.open('https://t.me/SHAKTHIVISHWA M', '_blank'); // Replace 'yourusername' with your actual username
    });

    // Adding functionality for the arrow image
    arrowImage.addEventListener('click', () => {
        // Toggle the visibility of the about me paragraph
        if (aboutMeParagraph.style.display === 'none') {
            aboutMeParagraph.style.display = 'block';
        } else {
            aboutMeParagraph.style.display = 'none';
        }
    });
});
