var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        duration: 3000
    }
});


var elems = document.querySelectorAll(".opacity");

elems.forEach(function(e){
    
    new ScrollMagic.Scene({
        triggerElement: e,
        triggerHook: 0.9,
    })
    .setClassToggle( e, "slideIn")
    .addTo(controller);
    
})

