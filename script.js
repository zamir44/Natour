var benefits = document.querySelector(".section-features");
var benefitsClick = document.querySelector("#benefits");
benefitsClick.addEventListener('click', scroll);

function scroll(){
   
    benefits.scrollIntoView(true);
}
document.querySelector('.navigation').addEventListener('click', function(e){
    // check to see if the element clicked was a link
    if (e.target.tagName === 'A') {
      // set the checkbox to checked false
      document.querySelector('.navigation__button').checked = false;
    }
  });


  $( '.navigation__link' ).on("click", function(){
    $('.navigation__checkbox').hide();
});

 