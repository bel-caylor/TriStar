document.addEventListener("alpine:init", () => {
  console.log("[main.js] alpine:init");
  Alpine.data('projectCarousel', (project) => ({
    images: Array.isArray(project.screenshots)
              ? project.screenshots
              : project.screenshots
                ? [project.screenshots]
                : [],
    interval: project.interval ?? 3000,
    current: 0,
    timer: null,
    init() {
      this.start();
    },
    start() {
      this.stop();
      this.timer = setInterval(() => {
        this.current = (this.current + 1) % this.images.length;
      }, this.interval);
    },
    stop() {
      clearInterval(this.timer);
    },
    goTo(i) {
      this.current = i;
    }
  }));
});

// Convert YYYY-MM-DD → MM/DD/YYYY
function formatDate(iso) {
  if (!iso) return "";
  let [y, m, d] = iso.split("-");
  return `${m}/${d}/${y}`;
}

function formatSSN(ssn) {
  if (!ssn) return "";
  let digits = ssn.toString().replace(/\D/g, "");
  if (digits.length !== 9) return ssn;
  return `${digits.slice(0,3)}-${digits.slice(3,5)}-${digits.slice(5)}`;
}