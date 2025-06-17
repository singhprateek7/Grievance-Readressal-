document.getElementById('grievance-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const issue = document.getElementById('issue').value;
  const suggestion = document.getElementById('suggestion').value;

  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbw-mDswi2Ddo3mzNtey8PF9fym_xC4A2-p8wyqCxyPQT2Irl8ikhJSknueoYfXMOiJL/exec';

  fetch(SHEET_URL, {
    method: 'POST',
    body: JSON.stringify({ issue, suggestion }),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(res => res.json())
  .then(data => {
    if (data.result === 'success') {
      document.getElementById('form-section').classList.add('hidden');
      document.getElementById('thank-you').classList.remove('hidden');

      // Show floating hearts
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          createHeart();
        }, i * 300);
      }
    } else {
      alert('Oops! Something went wrong.');
    }
  })
  .catch(() => {
    alert('Error submitting grievance.');
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
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 50 + 50 + 'vh';
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 2000);
}
