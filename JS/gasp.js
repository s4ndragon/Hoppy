var controller = new ScrollMagic.Controller();
var blockTween = new TweenMax.to('promo_content', 1.5, {
    backgroundColor: 'red'
});
new ScrollMagic.Scene({
    triggerElement: "#key01",
    offset: 0, // 改綠指標(單位px)
    triggerHook: 0.5, // 改藍色指標  0~1
    duration: "50%", //單位是px or %  動畫執行的範圍
})
    .setTween(promo_detail)
    .addIndicators()
    .on("leave", function () {
        console.log("執行function");
    })
    .addTo(controller);
