const menuBtnOpen = document.querySelector(".menu-burger-btn");
const menuBtnClose = document.querySelector(".mobile-menu__close-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtnOpen && mobileMenu) {
  menuBtnOpen.addEventListener("click", (e) => {
    mobileMenu.classList.add("_active");
    document.body.style.overflow = "hidden";
    mobileMenu.scrollTop = 0;
  });
}
if (menuBtnClose && mobileMenu) {
  menuBtnClose.addEventListener("click", (e) => {
    mobileMenu.classList.remove("_active");
    document.body.style.overflow = "visible";
  });
}

// переход по ссылкам-якорям

const links = document.querySelectorAll(".mobile-menu__nav-link");

if (links.length > 0) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // закрываем меню
      mobileMenu.classList.remove("_active");
      document.body.style.overflow = "visible";
      //   перенаправляем к якорю
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
