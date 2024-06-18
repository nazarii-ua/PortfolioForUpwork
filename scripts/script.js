document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    const projects = {
        1: {
            title: 'HoloMusic',
            description: 'With HoloMusic,  it’s easy to find the right music or podcast for every moment – on your  phone, your computer, your tablet, and more. There are thousands of  tracks and episodes on HoloMusic. So whether you’re behind the wheel,  working out, partying, or relaxing, the right music or podcast is always  at your fingertips. Choose what you want to listen to, or let HoloMusic  surprise you. You can also browse through the collections of friends,  artists, and celebrities, or create a radio station and just sit back.',
            image1: 'images/holomusic_main.png',
            image2: 'images/holomusic_first.png',
            image3: 'images/holomusic_third.png',

        },
        2: {
            title: 'Проект 2'
        }
    };

    if (projects[projectId]) {
        document.getElementById('project-title').textContent = projects[projectId].title;
        document.getElementById('project-description').textContent = projects[projectId].description;
        document.getElementById('image-1').src = projects[projectId].image1;
        document.getElementById('image-2').src = projects[projectId].image2;
        document.getElementById('image-3').src = projects[projectId].image3;
    } else {
        document.getElementById('project-title').textContent = 'Проект не знайдено';
        document.getElementById('project-description').textContent = 'Опис для цього проекту не знайдено.';
    }
});
