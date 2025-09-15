/* script.js
 - populates birthday lyrics
 - enables click-to-highlight for any .lyrics container
*/

/* ----- Birthday lyrics (customize if you like) ----- */
const birthdayLines = [
  "Happy Birthday Bolu, today’s your day",
  "Elizabeth smiling, we’re here to say",
  "Met you in July at a friends' party",
  "Romantic, goofy, love we can’t hide",
  "You say you’re weird, that makes you real",
  "With every laugh, it’s the best we feel"
];

const birthdayContainer = document.getElementById('birthday-lyrics');
if (birthdayContainer) {
  birthdayLines.forEach((line, idx) => {
    const p = document.createElement('p');
    p.textContent = line;
    if (idx === 0) p.classList.add('active');
    birthdayContainer.appendChild(p);
  });
}

/* ----- Generic click-to-highlight for all lyrics sections ----- */
document.addEventListener('click', (ev) => {
  // if a <p> inside a .lyrics was clicked, toggle active only inside that .lyrics box
  const target = ev.target;
  if (target && target.tagName === 'P' && target.closest('.lyrics')) {
    const box = target.closest('.lyrics');
    box.querySelectorAll('p').forEach(p => p.classList.remove('active'));
    target.classList.add('active');
  }
});
