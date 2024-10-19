const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link=>{
  if(link.href.includes(`${activePAge}`){
    link.classList.add('active');
    console.log(link);
  }
})
