var accordion = function(){
    var data = $('.accordion').attr('data-accordion')
    
    $('.accordion-header').on('click', function(){
      $(this).next('.accordion-body').not(':animated').slideToggle()
    })
  }
  
  accordion();