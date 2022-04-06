window.addEventListener("load", () => {
  const toggle = document.querySelector(".header__hamburger");
  const menu = document.querySelector(".header__nav");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.toggle("active");
    toggle.classList.toggle("active");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (
      e.target.matches(".header__hamburger") ||
      e.target.matches(".header__nav, .header__nav *")
    )
      return;
    menu && menu.classList.remove("active");
    toggle.classList.remove("active");
  }

  
});
