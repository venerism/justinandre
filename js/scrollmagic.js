$(document).ready(function(){

   var controller = new ScrollMagic.Controller();

     var scene = new ScrollMagic.Scene({
       triggerElement:'.splashbox'
     })
     .setClassToggle('.splashbox','.fade')
     .addTo(controller);


});
