// ======================Ajout de la navigation responsive avec le button hamburger=====================
const menuIcon = document.getElementById('menuIcon');
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
                    <a href="${teacher.socials[0].facebook}" target="_blank"> <i class="fab fa-facebook"></i> </a>
                    <a href="${teacher.socials[0].twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="${teacher.socials[0].linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="${teacher.socials[0].instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="${teacher.socials[0].gmail}" target="_blank"><i class="fab fa-g"></i></a>
                    <a href="${teacher.socials[0].mail}" target="_blank"><i class="fas fa-envelope"></i></a>
                    <a href="${teacher.socials[0].behance}" target="_blank"><i class="fab fa-behance"></i></a>
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