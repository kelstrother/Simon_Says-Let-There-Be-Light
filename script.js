const container = document.getElementById('container')
const colors = [
  "#e74c3c",
  "#8344ad",
  "#3498db",
  "#a69112",
  "#2ecc71",
  "#eb4034",
  "#34eb93",
  "#232bc4",
  "#7239f7",
  "#860be3",
  "#860be3",
  "#db09d4",
  "#ff00f7",
  "#b50459",
  "#f5180c",
  "#f5180c",
  "#f5b70c",
  "#f09835",
  "#b8f035",
  "#53d10f",
  "#288261",
  "#286a82",
  "#2e6694",
  "#7ac3ff",
  "#008cff",
  "#124bc7",
];
const colorGlow = [
  "rgba(240, 250, 66, 0.5)",
  "rgba(90, 250, 66, 0.5)",
  "rgba(66, 250, 247, 0.5)",
  "rgba(66, 197, 250, 0.5)",
  "rgba(66, 150, 250, 0.5)",
  "rgba(250, 96, 66, 0.5)",
  "rgba(254, 66, 250, 0.5)",
];
const SQUARES = 1400

for(let i = 0; i < SQUARES; i++) {
   const square = document.createElement('div')
   square.classList.add('square')
   
   square.addEventListener('mouseover', () => setColor(square))
   square.addEventListener('mouseout', () => removeColor(square))
   
   container.appendChild(square)  
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
   const borderGlow = randomColorGlow()
   document.getElementById('light-glow').style.boxShadow = `1px -5px 70px 5px ${borderGlow}`
   document.getElementById('light-glow').style.border = `5px outset ${borderGlow}`
   document.getElementById('light-show').style.color = `${borderGlow}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)]
}

function randomColorGlow() {
   return colorGlow[Math.floor(Math.random() * colorGlow.length)]
}
