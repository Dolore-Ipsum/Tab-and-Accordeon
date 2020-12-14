//  Аккордеон и табы
document.addEventListener('DOMContentLoaded', function(){


//   $( function() {
//   $( "#tabs" ).tabs();
//  } );


 $( function() {
  $( ".accordion" ).accordion();
} );

// $( ".accordion" ).accordion("refresh");

document.querySelector('.tab-list').addEventListener('click', function(){
  document.querySelector('.accordeon-block').classList.add('accordeon-active')
})


document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
 tabsBtn.addEventListener('click', function(event) {
  const path = event.currentTarget.dataset.path

  document.querySelectorAll('.tab-content').forEach(function(tabContent){
    tabContent.classList.remove('tab-content-active')
  })
  document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
 })
//  $( '.accordion' ).accordion("refresh");
})
})

$( function() {
  $( ".accordion" ).accordion();
} );



