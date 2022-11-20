const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#closeBtn");
const themeToggler = document.querySelector(".theme-toggler");

const reportBtn = document.getElementById("report-btn");
const individualsBtn = document.getElementById("individuals-btn");
const dutiesBtn = document.getElementById("duties-btn");

const reportTab = document.getElementById("report-tab");
const individualsTab = document.getElementById("individuals-tab");
const dutiesTab = document.getElementById("duties-tab")

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-vars');
    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
})

function reportForDuty() {
    reportTab.style.display = "block";
    individualsTab.style.display = "none";
    dutiesTab.style.display = "none";

    reportBtn.classList.add("active");
    individualsBtn.classList.remove("active");
    dutiesBtn.classList.remove("active");
}

function individuals() {
    reportTab.style.display = "none";
    individualsTab.style.display = "block";
    dutiesTab.style.display = "none";

    reportBtn.classList.remove("active");
    individualsBtn.classList.add("active");
    dutiesBtn.classList.remove("active");
}

function duties() {
    reportTab.style.display = "none";
    individualsTab.style.display = "none";
    dutiesTab.style.display = "block";

    reportBtn.classList.remove("active");
    individualsBtn.classList.remove("active");
    dutiesBtn.classList.add("active");
}