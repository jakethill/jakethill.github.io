console.log("Personal site loaded!");

// Retro terminal-style typing effect for the title
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.retro-title');
  if (!title) return;
  const text = title.textContent;
  const prompt = title.querySelector('.prompt')?.outerHTML || '';
  let i = 0;
  function type() {
    title.innerHTML = prompt + text.slice(0, i) + '<span class="cursor">█</span>';
    i++;
    if (i <= text.length) {
      setTimeout(type, 60);
    } else {
      title.innerHTML = prompt + text;
    }
  }
  title.textContent = '';
  setTimeout(type, 400);
});

// Blinking cursor style
const style = document.createElement('style');
style.innerHTML = `.cursor { color: #fff200; animation: blink 1s steps(1) infinite; }
@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }`;
document.head.appendChild(style);
