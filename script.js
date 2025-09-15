const birthdayLines = [
  "Happy Birthday Bolu, today’s your day",
  "Elizabeth smiling, we’re here to say",
  "Met you in July at a friends' party",
  "Romantic, goofy, love we can’t hide",
  "You say you’re weird, that makes you real",
  "With every laugh, it’s the best we feel"
];

const container = document.getElementById('birthday-lyrics');
if (container) {
  birthdayLines.forEach((line, i) => {
    const p = document.createElement('p');
    p.textContent = line;
    if (i === 0) p.classList.add('active');
    container.appendChild(p);
  });
}

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'P' && e.target.closest('.lyrics')) {
    const box = e.target.closest('.lyrics');
    box.querySelectorAll('p').forEach(p => p.classList.remove('active'));
    e.target.classList.add('active');
  }
});
