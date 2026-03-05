const btn = document.getElementById("themeBtn");

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    btn.innerHTML = "☀️ Modo claro";
} else {
    btn.innerHTML = "🌙 Modo oscuro";
}

btn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️ Modo claro";
        localStorage.setItem("theme", "dark");
    } else {
        btn.innerHTML = "🌙 Modo oscuro";
        localStorage.setItem("theme", "light");
    }

});
