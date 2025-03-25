 document.getElementById('yesButton').addEventListener('click', function() {
    const button = this;
    button.style.position = 'relative';
    let moveRight = true;

    const moveButton = setInterval(() => {
        if (moveRight) {
            button.style.left = (parseInt(button.style.left) || 0) + 5 + 'px';
            if (parseInt(button.style.left) > 200) moveRight = false;
        } else {
            button.style.left = (parseInt(button.style.left) || 0) - 5 + 'px';
            if (parseInt(button.style.left) < 0) moveRight = true;
        }
    }, 50);
    
    setTimeout(() => {
        clearInterval(moveButton);
    }, 3000); // Stop moving after 3 seconds
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('message').innerText = "I love you!";
});