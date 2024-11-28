function elb() {
  (window.elbLayer = window.elbLayer || []).push(arguments);
}

const Schnitzel = await import("/src/js/schnitzel.mjs");

// Create a walker.js instance with custom config
window.schnitzel = Schnitzel.default({
  dataLayer: true, // Push all events to the dataLayer
  prefix: "data-schnitzel",
  run: true, // Automatically start running
});

// Push all events to the console
elb("walker destination", {
  push: console.log,
});
