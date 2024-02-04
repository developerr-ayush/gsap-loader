let tl = gsap.timeline();
tl.to("#bolt-path", {
  duration: 1,
  strokeDasharray: 700,
});
tl.to("#bolt-rect", {
  duration: 1,
  y: 0,
});
tl.to("svg", {
  scale: 0,
});
tl.to(".panel", {
  y: "-100%",
  duration: 2,
  stagger: 0.25,
});
