const mobile_nav=document.querySelector(".mobile-navbar-btn");

const nav_header=document.querySelector(".header")

const toggleNavbar = () => {
    nav_header.classList.toggle("active")
};

mobile_nav.addEventListener('click',() => toggleNavbar())



//video function


document.querySelectorAll('.videos video').forEach(vid => {
  vid.onclick=() => {
    document.querySelector('.player').style.display='block';
    document.querySelector('.player video').src= vid.getAttribute('src');
  }
  document.querySelector('.player span').onclick=() => {
    document.querySelector('.player').style.display='none';
   
  }
    
    
});
//SHORTS

document.querySelectorAll('.shorts video').forEach(vid => {
    vid.onclick=() => {
      document.querySelector('.player2').style.display='block';
      document.querySelector('.player2 video').src= vid.getAttribute('src');
    }
    document.querySelector('.player2 span').onclick=() => {
      document.querySelector('.player2').style.display='none';
     
    }
      
      
  });