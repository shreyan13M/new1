 document.getElementById('yesButton').addEventListener('click', function() {
    alert('Yay! I can’t wait for our coffee date! ☕❤️');
});

document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');

    // Get the dimensions of the container
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Get the dimensions of the button
    const buttonWidth = noButton.clientWidth;
    const buttonHeight = noButton.clientHeight;

    // Calculate random positions
    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    // Set the new position
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});