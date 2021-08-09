const toggleSwitch=document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');
const textBox=document.getElementById('textbox');

function darkmode(){
    nav.style.backgroundColor='rgb(0 0 0 / 50% )';
    textBox.style.backgroundColor='rgb(255 255 255 / 50% )';
    toggleIcon.children[0].textContent='Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src='img/undraw_proud_coder_dark.svg';
    image2.src='img/undraw_feeling_proud_dark.svg';
    image3.src='img/undraw_conceptual_idea_dark.svg';
}
function lightmode(){
    textBox.style.backgroundColor='rgb(0 0 0 / 50% )';
    nav.style.backgroundColor='rgb(255 255 255 / 50% )';
    toggleIcon.children[0].textContent='Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src='img/undraw_proud_coder_light.svg';
    image2.src='img/undraw_feeling_proud_light.svg';
    image3.src='img/undraw_conceptual_idea_light.svg';
}
//switchTheme Function
function switchTheme(event){
    if(event.target.checked){
        
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkmode();
    }else {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightmode();
    }

}


//eventlistener
toggleSwitch.addEventListener('change', switchTheme);


const currenTheme =localStorage.getItem('theme');
if(currenTheme){
    document.documentElement.setAttribute('data-theme',currenTheme);
    if(currenTheme=='dark') {
    toggleSwitch.checked=true;
    darkmode();
    }

    else {
    toggleSwitch.checked=false;

    lightmode();
    }
}