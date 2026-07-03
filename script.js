// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme (persisted; light is default)
const root = document.documentElement;
const toggle = document.getElementById("navToggle");
const saved = localStorage.getItem("theme");
if (saved) root.setAttribute("data-theme", saved);
toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Nav border on scroll + scroll progress bar
const nav = document.getElementById("nav");
const progress = document.getElementById("progress");
const onScroll = () => {
  nav.classList.toggle("scrolled", window.scrollY > 24);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Hero headline lines — staggered reveal on load
window.addEventListener("load", () => {
  document.querySelectorAll(".hero__title .line").forEach((line, i) => {
    setTimeout(() => line.classList.add("in"), 200 + i * 130);
  });
});

// Cursor spotlight (pointer-fine devices only)
const spotlight = document.getElementById("spotlight");
if (window.matchMedia("(pointer: fine)").matches) {
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
  const loop = () => {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    spotlight.style.transform = `translate(${cx}px, ${cy}px)`;
    raf = Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5 ? requestAnimationFrame(loop) : null;
  };
  window.addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
}
