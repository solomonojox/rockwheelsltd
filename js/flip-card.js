const flip = document.querySelectorAll('.card-wrapper');

flip.forEach(flip => {
  flip.addEventListener('click', function() {
    this.classList.toggle('flipped');
  })
})

/* unflip card upon another card */
const flipContainer = document.querySelectorAll('.card-wrapper');

flipContainer.forEach(container => {
  container.addEventListener('click', function() {
    flipContainer.forEach(flip => {
      if (flip !== this) {
        flip.classList.remove('flipped');
      }
    });
  });
});