let tl = gsap.timeline();
tl.to("#bolt-path", {
  strokeDasharray: 600,
  duration: 2,
});
tl.to("#bolt-rect", {
  duration: 2,
  y: 0,
});
tl.to(".loader-inner", {
  scale: 0,
});
tl.to(".panel", {
  y: "-100%",
  duration: 2,
  stagger: 0.3,
});
tl.to(".loader", {
  y: "-100%",
});
