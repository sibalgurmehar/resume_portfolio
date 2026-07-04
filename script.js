const header = document.getElementById("header");
const progress = document.getElementById("progress");
const navLinks = [...document.querySelectorAll(".nav a")];
const sections = [...document.querySelectorAll("main section[id]")];

const updatePageState = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;

  let activeId = "";
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 150) activeId = section.id;
  });
  navLinks.forEach((link) => link.classList.toggle("active", link.hash === `#${activeId}`));
};

window.addEventListener("scroll", updatePageState, { passive: true });
updatePageState();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("in");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: "0px 0px -36px" });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.addEventListener("load", () => {
  document.querySelectorAll(".hero-reveal").forEach((element, index) => {
    window.setTimeout(() => element.classList.add("in"), 80 + index * 85);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
