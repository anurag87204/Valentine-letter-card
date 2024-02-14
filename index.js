const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');

heart.addEventListener('mouseenter', () => {
    envelope.classList.add('flap');
});

heart.addEventListener('mouseleave', () => {
    envelope.classList.remove('flap');
});