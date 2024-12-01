// ======================Ajout de la navigation responsive avec le button hamburger=====================

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");
const navLinkItems = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");  
    hamburger.classList.toggle("active"); 
});

navLinkItems.forEach(link => {
    link.addEventListener("click", (e) => {
        navLinkItems.forEach(link => link.classList.remove("active"));
        
        e.target.classList.add("active");
        
        navbar.classList.remove("active");
        hamburger.classList.remove("active");
    });
});
// +++++++++++++++++++++Fin  Ajout de la navigation responsive avec le button hamburger=====================


// ======================chargement fichier teacher.json=====================



fetch('api/teacher.json')
    .then(response => response.json()
    
)
    .then(teachersData => {
        const teachersSection = document.getElementById('teachers-section');
        
        teachersData.forEach(teacher => {
            const teacherDiv = document.createElement('div');
            teacherDiv.classList.add('teacher');
            
            teacherDiv.innerHTML = `
              <img class="images-prof" src="images/${teacher.image}" alt="${teacher.name}">
             <div class="content-box">
                <h2 class="titre-prof">${teacher.name}</h2>
                <p class="para-prof">${teacher.description}</p>
                <hr>
                <div class="liens-prof">
                    <a href="${teacher.socials.facebook}" target="_blank">Facebook</a>
                    <a href="${teacher.socials.twitter}" target="_blank">Twitter</a>
                    <a href="${teacher.socials.linkedin}" target="_blank">LinkedIn</a>
                    <a href="${teacher.socials.instagram}" target="_blank">Instagram</a>
                    <a href="${teacher.socials.gmail}" target="_blank">Gmail</a>
                    <a href="${teacher.socials.mail}" target="_blank">Mail</a>
                    <a href="${teacher.socials.behance}" target="_blank">Behance</a>
                </div>
            </div>
            `;
            
            teachersSection.appendChild(teacherDiv);
        });
    })
    .catch(error => console.error('impossible de charger les donnees:', error));

// ++++++++++++++++++++++Fin chargement fichier teacher.json=====================



// ======================code javascript du Slider=====================



var btnLeft = document.getElementById('prev_btn');
var btnRight = document.getElementById('next_btn');

var slider = document.querySelector('.container .slider');

btnRight.addEventListener('click', nextSlide);
function nextSlide(){
	slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener('click', prevSlide);
function prevSlide(){
	slider.prepend(slider.lastElementChild);
}

function autoSlide(){
	deleteInterval = setInterval(timer, 3000); 
	function timer(){
		nextSlide();
	}
}
autoSlide();

slider.addEventListener('mouseover', deleteAutoSliding);
btnRight.addEventListener('mouseover', deleteAutoSliding);
btnLeft.addEventListener('mouseover', deleteAutoSliding);

function deleteAutoSliding(){
	clearInterval(deleteInterval);
}

slider.addEventListener('mouseout', autoSlide);
btnRight.addEventListener('mouseout', autoSlide);
btnLeft.addEventListener('mouseout', autoSlide);