//turns whole page into sprkles


const toggle = document.getElementById("theme-change");

class Sparkles 
{
  constructor(sparkleCount = 175) 
  {
    this.sparkleCount = sparkleCount;
    this.colors = [
      '#edabd2', // pastel-pink
      '#ffae57', // pastel-orange
      '#fcf577', // pastel-yellow
      '#bae67e', // pastel-green
      '#5ccfe6', // pastel-cyan
      '#9cc6f4', // pastel-blue
      '#aa72c5', // pastel-purple
      '#ffffff' // white
    ];
    this.container = document.querySelector('.sparkle-layer');
  }

  render() 
  {
    if (!this.container) 
    {
      console.error('Sparkles container with class .sparkle-layer not found.');
      return;
    }
    if(this.container.childElementCount > 0) return;

    for (let i = 0; i < this.sparkleCount; i++) 
    {
      const sparkle = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const colorHex = this.colors[Math.floor(Math.random() * this.colors.length)];

      // vanilla JS styles to create a randomized sparkle
      sparkle.style.position = 'absolute';
      sparkle.style.borderRadius = '50%';
      sparkle.style.animation = `fade-in-out 5s ease-in-out infinite`;
      sparkle.style.backgroundColor = colorHex;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 5}s`;
      sparkle.style.boxShadow = `0 0 ${size * 2}px ${colorHex}`;

      this.container.appendChild(sparkle);
    }
  }

  clear()
  {
      if(this.container)
        this.container.innerHTML = "";
  }
}

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  const sparkles = new Sparkles();
  const toggle = document.getElementById("theme-change");

  toggle.addEventListener("click", () => {
    const on = toggle.getAttribute("aria-pressed") !== "true";
  
    if (on) {
      sparkles.render();
    }
    else
    {
      sparkles.clear();
    }

    toggle.setAttribute("aria-pressed", on)
    toggle.textContent = on ? "Back to normal" : "Star Mode🌟";
  });

});