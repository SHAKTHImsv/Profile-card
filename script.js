document.addEventListener('DOMContentLoaded', () => {
    const followButton = document.querySelector('.profile-box button');
    const profileBottom = document.querySelector('.profile-bottom');
    const arrowImage = document.querySelector('.profile-bottom img');
    const aboutMeParagraph = document.querySelector('.about-me');
    const container = document.querySelector('.container');

    // Initially hide the additional profile info
    profileBottom.style.display = 'none';
    aboutMeParagraph.style.display = 'none'; // Ensure it's hidden initially

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
        window.open('https://www.instagram.com/sakthi_555_5', '_blank');
    });

    telegramIcon.addEventListener('click', () => {
        window.open('https://t.me/SHAKTHIVISHWA M', '_blank');
    });

    // Adding functionality for the arrow image
    arrowImage.addEventListener('click', () => {
        const isExpanded = aboutMeParagraph.style.display === 'block';
        
        if (isExpanded) {
            aboutMeParagraph.style.display = 'none';
            container.style.height = 'auto'; // Reset height
        } else {
            aboutMeParagraph.style.display = 'block';
            container.style.height = `${container.scrollHeight}px`; // Set height to fit content
        }
    });
});
