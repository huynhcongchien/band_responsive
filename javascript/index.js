const btnBuyTickets = document.querySelectorAll(".js-btn-buy-tickets");
const modal = document.querySelector(".js-modal");
const btnClose = document.querySelector(".js-btn-close");
const modalContainer = document.querySelector(".js-modal-container");
const header = document.getElementById('header');
const btnMenuMobile = document.querySelector('.menu-btn');
const isTempHeight = header.clientHeight;
const menuItems = document.querySelectorAll('#nav a[href *= "#"]');
// event
for (const btnBuyTicket of btnBuyTickets) {
  btnBuyTicket.addEventListener("click", showBuyTickets);
}
btnClose.addEventListener("click", closeBuyTickets);
modal.addEventListener("click", closeBuyTickets);
modalContainer.addEventListener('click', stopBubbling);
btnMenuMobile.addEventListener('click', showMenuMobile);
for(let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click',hideMenuItems);
}


// function
function hideMenuItems(event) {
  if(this.nextElementSibling && this.nextElementSibling.classList.contains('subNav')){
    this.nextElementSibling.classList.toggle('hide');
    event.preventDefault();
  }
  else{
    header.style.height = null;
  }
  
}
function showMenuMobile(){
  
    if(header.clientHeight != isTempHeight){
      header.style.height = null;
    }
    else{
      header.style.height = 'auto';
    }

}
function showBuyTickets() {
  modal.classList.add("open");
}
function closeBuyTickets() {
  modal.classList.remove("open");
 
}
function stopBubbling(event) {
    event.stopPropagation();
}
