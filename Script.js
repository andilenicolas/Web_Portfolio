// On scroll
const Nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 110) {
    Nav.style.filter =
      "drop-shadow(0 4px 3px rgb(var(--clr-secondary) / 0.07)) drop-shadow(0 2px 2px rgb(var(--clr-secondary) / 0.06))";
    Nav.style.border = "1px solid rgba(var(--clr-secondary), 0.1)";
  } else {
    Nav.style.removeProperty("filter");
    Nav.style.border = "1px solid rgba(var(--clr-background), 0.1)";
  }
});

const NavItemsList = [...Nav.querySelector("ul").querySelectorAll("li")];
NavItemsList.map((Item) => {
  Item.addEventListener("click", (e) => {
    ResetActiveNavItem();
    if (Item != NavItemsList[NavItemsList.length - 1]) {
      Item.getElementsByTagName("a")[0].classList.add("active-nav-item");
    }
  });
});

const ResetActiveNavItem = () => {
  NavItemsList.map((Item) => {
    Item.getElementsByTagName("a")[0].classList.remove("active-nav-item");
  });
};

//

// On media query i.e. screen size
const mediaQuery = window.matchMedia("(min-width: 700px)");

const MenuBar = Nav.querySelector(".menu-bar");
const MenuClose = Nav.querySelector(".menu-close");
const NavItemsContainer = Nav.querySelector("ul");
const Body = document.querySelector("body");
MenuBar.addEventListener("click", (e) => {
  if (mediaQuery.matches != true) {
    MenuBar.style.display = "none";
    NavItemsContainer.style.display = "grid";
    MenuClose.style.display = "block";
    Body.style.overflow = "hidden";
  }
});

MenuClose.addEventListener("click", (e) => {
  if (mediaQuery.matches != true) {
    NavItemsContainer.style.display = "none";
    MenuClose.style.display = "none";
    MenuBar.style.display = "block";
    Body.style.overflow = "scroll";
  }
});

NavItemsContainer.addEventListener("click", (e) => {
  if (mediaQuery.matches != true) {
    NavItemsContainer.style.display = "none";
    MenuClose.style.display = "none";
    MenuBar.style.display = "block";
    Body.style.overflow = "scroll";
  }
});

// Nav end
