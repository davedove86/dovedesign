// ReCaptcha
function onSubmit(token) {
  document.getElementById("demo-form").submit();
}

// Animations
const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } });

tl.fromTo(".pageTitle", { opacity: 0 }, { opacity: 1, duration: 1 });

console.log("Loaded");
