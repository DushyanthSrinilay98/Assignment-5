/* For progress bar animation*/
(function ($) {
    "use strict";

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

})(jQuery);

/* add class navbarDark on navbar scroll */
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


/* collapse navbar after click on small devices */
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

  function funcSubmit() {

    var alert = document.getElementById('submit-alert');
    if(alert.style.display==="none"){
        alert.style.display="block";
    }
    else{
        alert.style.display="none";
    }
  }
 

  <script>$(function () {$('[data-toggle="popover"]').popover()})</script>