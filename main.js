function reveal() {
  var reveals = document.querySelectorAll(".fade_in");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 1;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
  }
}

window.addEventListener("scroll", reveal);




const dots = document.querySelectorAll(".site-header a");

const removeActiveClass = () => {
  dots.forEach(dot => {
    dot.classList.remove("active");
  });
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      let currentDot = document.querySelector(`.site-header a[href='#${entry.target.id}'`
      );
      removeActiveClass();
      currentDot.classList.add("active");   
    }
  });
};

const options = {
  threshold: .2
};

const observer = new IntersectionObserver(addActiveClass, options);
const section = document.querySelectorAll("section");

section.forEach((section) => {
  observer.observe(section);
});


