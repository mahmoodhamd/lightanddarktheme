const toggleswitch=document.querySelector('input[type="checkbox"]');
const toggletext=document.querySelector(".toggle-text");
const nav=document.getElementById('nav');
const changeicon=document.getElementById("toggle-icon");
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');
const textbox=document.getElementById('text-box');



// Switch Theme Dynamically.

function switchTheme(event){
if(event.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark');
    darkMode();
}else{
    document.documentElement.setAttribute('data-theme','light');
    Lightmode();
    localStorage.setItem('theme','light');
    
}
  
}

// Dark Mode Styles
function imageMode(color){
    image1.src=`img/undraw_proud_coder_${color}.svg`;
    image2.src=`img/undraw_feeling_proud_${color}.svg`;
    image3.src=`img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode(){
nav.style.backgroundColor='rgb(0 0 0 / 50%)';
textbox.style.backgroundColor='rgb(255 255 255 / 50%)';
changeicon.children[0].textContent='Dark Mode';

changeicon.children[1].classList.replace('fa-sun','fa-moon');
imageMode("dark");
//localStorage.getItem('theme');

}
function Lightmode(){
    changeicon.children[0].textContent='Light Mode';
    changeicon.children[1].classList.replace("fa-moon","fa-sun");
    nav.style.backgroundColor='rgba(0,1,1,0.0)';
    textbox.style.backgroundColor='rgb(128,128,128)';
    imageMode('light');
}

// Event Listener.
toggleswitch.addEventListener('change', switchTheme); 


// Check Local Storage For Theme.  
const currentTheme=localStorage.getItem('theme');
console.log(currentTheme);
if(currentTheme){
  
    document.documentElement.setAttribute('data-theme',currentTheme);
    
    if(currentTheme==='dark'){

        toggleswitch.checked=true;
        darkMode();
    }

}
