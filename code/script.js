tsParticles.load("tsparticles", {
  particles: {
    number: { value: 60 },
    size: { value: 3 },
    move: { enable: true, speed: 1 },
    links: { enable: true, distance: 100, color: "#ffffff" },
    color: { value: "#ffffff" },
    opacity: { value: 0.5 },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 50, links: { opacity: 0.5 } },
      push: { quantity: 4 },
    },
  },
  background: {
    color: "#212121",
  },
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("nav");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// name animated
document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".myName span");
  let delay = 0;

  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.add("reveal");
    }, delay);

    delay += 400;
  });
});

// active btn
// Select all filter buttons
const buttons = document.querySelectorAll(".btnFilterSkills");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));
    // Add active to the clicked one
    button.classList.add("active");
  });
});

// filltering
// frontend
let frontend = [
  { name: "JavaScript", type: "frontend", img: "js", level:"Advanced", description: "3 years of experience in frontend and backend development." },
  { name: "Bootstrap", type: "frontend", img: "Bootstrap", level:"Advanced", description: "2 years of experience in creating responsive designs." },
  { name: "CSS", type: "frontend", img: "css-3", level:"Advanced", description: "4 years of experience in styling and animations." },
  { name: "HTML", type: "frontend", img: "html", level:"Advanced", description: "4 years of experience in building web page structures." },
  { name: "Flutter", type: "frontend", img: "fluter", level:"Beginner", description: "6 months of experience in mobile app development." },
  { name: "React", type: "frontend", img: "react", level:"Beginner", description: "1 year of experience in building interactive UIs." },
  { name: "Responsive", type: "frontend", img: "res", level:"Advanced", description: "3 years of experience in mobile-first web design." },
];

// backend
let backend = [
  { name: "Python", img: "python", level:"Advanced", description: "2 years of experience in automation and backend development." },
  { name: "PHP", img: "php", level:"Advanced", description: "2 years of experience in building dynamic web applications." },
  { name: "Laravel", img: "larave", level:"Intermediate", description: "1 year of experience in developing PHP frameworks." },
  { name: "Java", img: "java", level:"Beginner", description: "1 year of experience in Android and OOP Beginners." },
  { name: "Database", img: "data", level:"Advanced", description: "2 years of experience in SQL and database management." },
]

// tools
let tools = [
  { name: "Git", img: "git", level:"Intermediate", description: "3 years of experience in version control." },
  { name: "Linux", img: "linux", level:"Intermediate", description: "1 year of experience using Linux systems." },
  { name: "VS Code", img: "vs", level:"Advanced", description: "5 years of experience working with IDEs." },
  { name: "GitHub", img: "github", level:"Advanced", description: "3 years of experience in team collaboration." },
  { name: "Canva", img: "canva", level:"Advanced", description: "2 years of experience in graphic design." },
  { name: "Figma", img: "figma", level:"Intermediate", description: "1 year of experience in UI/UX prototyping." },
]

// skills
let skills = [
  { name: "English", img: "english", level:"Intermediate", description: "3 years of experience in communication and writing." },
  { name: "Franch", img: "france", level:"Intermediate", description: "2 years of experience in basic conversation and reading." },
  { name: "Dbuging", img: "debug", level:"Beginner", description: "1 year of experience in troubleshooting code errors." },
  { name: "Team Work", img: "team", level:"Intermediate", description: "3 years of experience working in group projects." },
]



const allButtons = document.querySelectorAll(".btnFilterSkills");

allButtons.forEach(btn => {
  btn.addEventListener("click", ()=>{

const btnArray = Array.from(allButtons);

let activeButton = document.querySelector(".btnFilterSkills.active");

let id0=btnArray.indexOf(allButtons[0])
let id1=btnArray.indexOf(allButtons[1]) 
let id2=btnArray.indexOf(allButtons[2])

    if (id0 == activeButton.id) {
      afficher(frontend)
      console.log("frontend");
      
    }else if(id1 == activeButton.id){
      afficher(backend)
      console.log("backend");

    }else if(id2 == activeButton.id){
      afficher(tools)
      console.log("tools");

    }else{
      afficher(skills)
      console.log("skills");

    }
  })
});



function afficher(list){
  skillsContainer = document.querySelector(".skillsContainer")
  txt = ""
  skillsContainer.innerHTML= ""
  list.forEach(skills =>{
    txt+=`    
      <div class="col-9 col-sm-5 col-md-3 col-lg-3 text-center fade-in">
      <div class="skill" onclick="openModal('${skills.name}', '${skills.level}' , '${skills.description}')">
        <img src="images/${skills.img}.png" class="img-fluid" >
        <span>${skills.name}</span>
      </div>
    </div>
      `
  }) 
  skillsContainer.innerHTML=txt
}

// modal 
function openModal(title, level, description) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("level").innerText = level;
  document.getElementById("content").innerText = description;
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
}

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});



// see more projects 
seeMoreProjects = document.getElementById("seeMoreProjects");
seeLessProjects = document.getElementById("seeLessProjects");

seeMoreProjects.addEventListener("click", () => {
    allCards = document.querySelectorAll("#moreProjects");
    allCards.forEach(ele => {
              ele.style.display = "flex";
          });
    seeMoreProjects.style.display = "none"
    seeLessProjects.style.display = "block"

});

seeLessProjects.addEventListener("click", () => {
    allCards = document.querySelectorAll("#moreProjects");
    allCards.forEach(ele => {
              ele.style.display = "none";
          });

    seeMoreProjects.style.display = "block"
    seeLessProjects.style.display = "none"
});






// heading
// Add animation delay to each letter
document.querySelectorAll('.heading span').forEach((span, index) => {
  span.style.setProperty('--i', index);
});
    