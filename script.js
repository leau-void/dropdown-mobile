const handleHoverDropdown = function controlDropdownBehaviorHover() {
  event.target.classList.toggle("dropped");
};

const handleClickDropdown = function controlDropdownBehaviorClick() {
  const target = event.target;

  let dropdowns = document.querySelectorAll(".dropdown");
  dropdowns = [...dropdowns];
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) dropdown.classList.remove("dropped");
  });

  if (
    target.classList.contains("dropdown-label") ||
    target.classList.contains("floatmenu-label")
  )
    target.closest(".dropdown").classList.toggle("dropped");
};

const setupDropdowns = function setupAllDropdowns(eventType) {
  switch (eventType) {
    case "hover":
      let dropdowns = document.querySelectorAll(".dropdown");
      dropdowns = [...dropdowns];
      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", handleHoverDropdown);
        dropdown.addEventListener("mouseleave", handleHoverDropdown);
      });
      break;

    default:
      document.addEventListener("click", handleClickDropdown);
      break;
  }
};

setupDropdowns();
