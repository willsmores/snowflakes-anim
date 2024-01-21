console.log("Script link working")

const createIcon = () => {
  const icon = document.createElement("i");

  // Add Fontawesome classes
  icon.classList.add("icon", "fas", "fa-snowflake");
  icon.style.fontSize = "2em";
  icon.style.top = "0";
  icon.style.left = "0";

  document.body.appendChild(icon);
}

createIcon();