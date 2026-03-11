const skillsSection = document.querySelector(".skills-section");
const progressBars = document.querySelectorAll(".progress");
const percents = document.querySelectorAll(".percent");

let started = false;

function animateSkills(){

if(started) return;

const sectionPos = skillsSection.getBoundingClientRect().top;
const screenPos = window.innerHeight / 1.3;

if(sectionPos < screenPos){

started = true;

progressBars.forEach(bar=>{
const value = bar.getAttribute("data-width");
bar.style.width = value + "%";
});

percents.forEach(percent=>{
let target = +percent.getAttribute("data-target");
let count = 0;

let interval = setInterval(()=>{

count++;

percent.textContent = count + "%";

if(count >= target){
clearInterval(interval);
}

},20);

});

}

}

window.addEventListener("scroll", animateSkills);

const button = document.getElementById("theme-toggle");

button.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
button.textContent = "☀️ Mode clair";
}else{
button.textContent = "🌙 Mode sombre";
}

});

 