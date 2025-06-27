document.getElementById('grievance-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const issue = document.getElementById('issue').value;
  const suggestion = document.getElementById('suggestion').value;

  const FORMSPREE_URL = 'https://formspree.io/f/mdkzyoen';

  fetch(FORMSPREE_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      issue,
      suggestion
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.ok || data.success !== false) {
      document.getElementById('form-section').classList.add('hidden');
      document.getElementById('thank-you').classList.remove('hidden');

      // Floating hearts animation
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          createHeart();
        }, i * 300);
      }
    } else {
      alert("Couldn't submit grievance 😥");
    }
  })
  .catch(() => {
    alert("Form submission failed 😢");
  });
});

document.getElementById('new-grievance').addEventListener('click', () => {
  document.getElementById('form-section').classList.remove('hidden');
  document.getElementById('thank-you').classList.add('hidden');
  document.getElementById('grievance-form').reset();
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '✨';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 50 + 50 + 'vh';
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 2000);
}
