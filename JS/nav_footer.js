$(document).ready(function () {
    //=======nav======//
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav_links");
    const links = document.querySelectorAll(".nav_links li");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("on");
        navLinks.classList.toggle("open");
        links.forEach((link) => {
            link.classList.toggle("fade");
        });
    });
    //====== footer ======//
    let date = new Date();
    let day = date.getDay();
    if (day == 1) {
        document.getElementById("mon").innerText = "Today";
        document.getElementById("mon").style.backgroundColor = "#60a41d";
        document.getElementById("mon_time").style.backgroundColor = "#60a41d";
    } else if (day == 2) {
        document.getElementById("tue").innerHTML = "Today";
        document.getElementById("tue").style.backgroundColor = "#60a41d";
        document.getElementById("tue_time").style.backgroundColor = "#60a41d";
    } else if (day == 3) {
        document.getElementById("wed").innerHTML = "Today";
        document.getElementById("wed").style.backgroundColor = "#60a41d";
        document.getElementById("wed_time").style.backgroundColor = "#60a41d";
    } else if (day == 4) {
        document.getElementById("thu").innerHTML = "Today";
        document.getElementById("thu").style.backgroundColor = "#60a41d";
        document.getElementById("thu_time").style.backgroundColor = "#60a41d";
    } else if (day == 5) {
        document.getElementById("fri").innerHTML = "Today";
        document.getElementById("fri").style.backgroundColor = "#60a41d";
        document.getElementById("fri_time").style.backgroundColor = "#60a41d";
    } else if (day == 6) {
        document.getElementById("sat").innerHTML = "Today";
        document.getElementById("sat").style.backgroundColor = "#60a41d";
        document.getElementById("sat_time").style.backgroundColor = "#60a41d";
    } else {
        document.getElementById("sun").innerHTML = "Today";
        document.getElementById("sun").style.backgroundColor = "#60a41d";
        document.getElementById("sun_time").style.backgroundColor = "#60a41d";
    }
});
