// ReCaptcha
function onSubmit(token) {
  document.getElementById("demo-form").submit();
}

// Animations
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

tl.fromTo(
  ".pageTitle",
  { opacity: 0, y: -100 },
  { opacity: 1, y: 0, duration: 1 }
);

tl.fromTo(
  ".hero-image",
  { opacity: 0, y: -100 },
  { opacity: 1, y: 0, duration: 1 },
  "<50%"
);

console.log("Loaded");
