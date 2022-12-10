// On scroll
const Nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 110) {
    // Nav.style.filter =
    //   "drop-shadow(0 4px 3px rgb(var(--clr-secondary) / 0.07)) drop-shadow(0 2px 2px rgb(var(--clr-secondary) / 0.06))";

    Nav.style.filter =
      "drop-shadow(0 4px 3px rgba(var(--clr-secondary), 0.07)) drop-shadow(0 2px 2px rgba(var(--clr-secondary), 0.06))";

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

// Back to top

const BackToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 110 * 5) {
    BackToTop.style.display = "block";
  } else {
    BackToTop.style.display = "none";
  }
});

//Skills

const Skillslist = [
  ...document.querySelector(".skills-list").querySelectorAll("span"),
];

const HandleSkillsListChange = (skills) => {
  Skillslist.map((Item) => {
    if (Item.id == skills || skills == "skills-all") {
      Item.style.display = "flex";
    } else {
      Item.style.display = "none";
    }
  });
};
HandleSkillsListChange("skills-all");

const SkillsNav = [
  ...document.querySelector(".skills-nav").querySelectorAll("span"),
];

SkillsNav.map((Item) => {
  Item.addEventListener("click", (e) => {
    // e.preventDefault();
    HandleSkillsNavChange(Item);
  });
});

const HandleSkillsNavChange = (Item) => {
  ResetSkillsNavActive();
  Item.getElementsByTagName("input")[0].checked = true;
  HandleSkillsListChange(Item.getElementsByTagName("input")[0].id);
};

const ResetSkillsNavActive = () => {
  SkillsNav.map((Item) => {
    Item.getElementsByTagName("input")[0].checked = false;
  });
};
