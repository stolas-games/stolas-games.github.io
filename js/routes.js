document.addEventListener("DOMContentLoaded", () => {
    if (location.pathname.endsWith(".html")) {
        const cleanPath = location.pathname.replace(".html", "");
        window.history.replaceState({}, "", cleanPath);
    }
});
