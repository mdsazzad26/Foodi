// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// আগের Theme Load
const savedTheme = localStorage.getItem("foddi-theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

// Theme Change
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("foddi-theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("foddi-theme", "light");
    }
});


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// Menu Link Click করলে Menu বন্ধ হবে
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});


// =========================
// ADD TO CART
// =========================

let cartCount = 0;

const addButtons = document.querySelectorAll(".add-btn");
const toast = document.getElementById("toast");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const foodName = button.dataset.name;
        const foodPrice = Number(button.dataset.price);

        cartCount++;

        showToast(`${foodName} added to cart! ৳${foodPrice}`);

        button.textContent = "✓";

        setTimeout(() => {
            button.textContent = "+";
        }, 700);
    });
});


// =========================
// TOAST MESSAGE
// =========================

let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// =========================
// VIEW MENU BUTTON
// =========================

const viewAllBtn = document.getElementById("viewAllBtn");

viewAllBtn.addEventListener("click", () => {
    showToast("You're viewing our delicious menu! 🍔");
});


// =========================
// NEWSLETTER
// =========================

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("emailInput");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email !== "") {
        showToast("Thank you for subscribing! ❤️");
        newsletterForm.reset();
    }
});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});