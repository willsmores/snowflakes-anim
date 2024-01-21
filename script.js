console.log("Script link working")

const createIcon = () => {
  const icon = document.createElement("i");

  // Add Fontawesome classes
  icon.classList.add("icon", "fas", "fa-snowflake");

  // Randomise size of snowflake
  const size = Math.random() + 1;
  icon.style.fontSize = `${size}em`;

  // Randomise position of snowflake
  const top = Math.random() * 100;
  icon.style.top = `${top}vh`;

  const left = Math.random() * 100;
  icon.style.left = `${left}vw`;

  //Randomise orientation of snowflake
  const orientation = Math.random() * 360;
  icon.style.transform = `rotate(${orientation}deg)`;

  document.body.appendChild(icon);
}

createIcon();