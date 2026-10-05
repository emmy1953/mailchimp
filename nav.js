document.querySelectorAll(".nav-toggle").forEach((toggle) => {
  const navbar = toggle.closest(".navbar");

  if (!navbar) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navbar.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navbar.classList.contains("is-open")) {
      navbar.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      toggle.focus();
    }
  });
});
