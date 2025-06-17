document.getElementById('grievance-form').addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementById('form-section').classList.add('hidden');
  document.getElementById('thank-you').classList.remove('hidden');

  // Show floating hearts
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      createHeart();
    }, i * 300);
  }
});

document.getElementById('new-grievance').addEventListener('click', () => {
  document.getElementById('form-section').classList.remove('hidden');
  document.getElementById('thank-you').classList.add('hidden');
  document.getElementById('grievance-form').reset();
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 50 + 50 + 'vh';
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 2000);
}
