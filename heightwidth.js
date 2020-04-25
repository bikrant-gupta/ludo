function set(){
    var cont3H = $(`.cont3`).outerHeight(true);
    var cont3W = $(`.cont3`).outerWidth(true);
    var windowH = $(window).outerHeight(true);
    var windowW = $(window).outerWidth(true);
    if(windowH>windowW){
        var l = windowW;
        var dif = windowH - windowW;
        dif = dif/2;
        $(`.cont2`).css('margin-top',`${dif}px`);
        $(`.cont3,.cont2`).outerHeight(l);
        $(`.cont3,.cont2`).outerWidth(l);
    }
    else{
        var l = windowH;
        var dif = windowW - windowH;
        dif = dif/2;
        $(`.cont2`).css('margin-left',`${dif}px`);
        $(`.cont3,.cont2`).outerHeight(l);
        $(`.cont3,.cont2`).outerWidth(l);
    }
    console.log(cont3H,cont3W,windowH,windowW);
}

set();
$(window).resize(()=>{
    set()
    // console.log("hel")
})
