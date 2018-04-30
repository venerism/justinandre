var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement:".class"
})
.setClassToggle('.class','show')
.addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement:".class2"
})
.setClassToggle('.class2'.'show')
.addTo(controller);
