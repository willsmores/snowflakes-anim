console.log("Script link working")

document.addEventListener("DOMContentLoaded", function() {
  // Debugging, to see how many icons are being created
  let count = 0;

  const createIcon = () => {
    const icon = document.createElement("i")

    // Add Fontawesome classes
    icon.classList.add("icon", "fas", "fa-snowflake", `${count}`);

    // Randomise size of snowflake
    const size = Math.random() + 1;
    icon.style.fontSize = `${size}em`;

    // Randomise position of snowflake
    const top = Math.random() * 100;
    icon.style.top = `${top}vh`;

    const left = Math.random() * 100;
    icon.style.left = `${left}vw`;

    // Randomise orientation of snowflake
    const orientation = Math.random() * 360;
    icon.style.transform = `rotate(${orientation}deg)`;

    // Randomise duration of animation
    const duration = Math.random() * 5 + 2;
    icon.style.animationDuration = `${duration}s`

    document.body.appendChild(icon);
    count++;
    
    // Icons will be added to the DOM unless removed
    // Remove at animation end
    setTimeout(() => {
      console.log('Animation ended. Removing icon.');
      icon.remove();
  }, parseFloat(icon.style.animationDuration) * 1000);
  }

  // Adjusts the intensity of the storm!
  setInterval(createIcon, 50);
});