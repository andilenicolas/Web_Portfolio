const header = document.getElementById("portfolio--headerId");
const navigation_menu_checkbox = document.getElementById(
  "portfolio--menu--bar--checkbox"
);

// On media query i.e. screen size
const mediaQuery = window.matchMedia("(min-width: 600px)");
function headerBackgroundColor(mediaQuery) {
  if (mediaQuery.matches) {
    // header.style.background = "transparent";
  } else {
    // header.style.background = "rgba(0, 0, 0, 0.7)";
  }
}

mediaQuery.addEventListener("change", () => {
  headerBackgroundColor(mediaQuery);
}); // Attach listener function on state changes

// On scroll
window.addEventListener("scroll", () => {
  if (window.scrollY >= 110) {
    // header.style.position = "fixed !important";
    // header.style.marginTop = "0%";
    // header.style.background = "var(--header--bg--color)";
    // header.style.zIndex = "1000";
    console.log("fix bar");
  } else {
    // header.style.position = "absolute";
    // header.style.marginTop = "1.5%";
    // headerBackgroundColor(mediaQuery);
  }
});

const navigation_menu = document.getElementById("portfolio--nav");

navigation_menu.addEventListener("click", (e) => {
  //for mobile only
  if (!mediaQuery.matches) {
    navigation_menu_checkbox.checked = false;
  }

  //toggle active nav
  removeNavActiveClasses(navigation_menu.children);
  addNavActiveClass(e.target);
});

// add active class
const addNavActiveClass = (navLink) => {
  navLink.classList.add("portfolio--nav--active");
};

const removeNavActiveClasses = (navList) => {
  for (let i = 0; i < navList.length; ++i) {
    const navLink = navList[i].children[0];
    if (navLink.classList.contains("portfolio--nav--active")) {
      navLink.classList.remove("portfolio--nav--active");
    }
  }
};

const heading = document.querySelector(".portfolio--heading");
heading.addEventListener("click", () => {
  removeNavActiveClasses(navigation_menu.children);
  navigation_menu_checkbox.checked = false;
});

//
//
//

var i = 0;
var txt = "Hey, my name is"; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

const x = document.getElementById("portfolio--hero--section--typing");
x.style.color = "rgba(255, 255, 255, 0.9)";
function typeWriter() {
  if (i < txt.length) {
    x.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
