console.log("Script link working")

const createIcon = () => {
  const icon = document.createElement("i");

  // Add Fontawesome classes
  icon.classList.add("icon", "fas", "fa-snowflake");
  icon.style.fontSize = "2em";
  icon.style.top = "50px";
  icon.style.left = "50px";

  document.body.appendChild(icon);
}

createIcon();