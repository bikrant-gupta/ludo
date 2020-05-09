
function set(){
    var cont3H = $(`.cont3`).outerHeight(true);
    var cont3W = $(`.cont3`).outerWidth(true);
    var windowH = $(window).outerHeight(true);
    var windowW = $(window).outerWidth(true);
    var nameH = $(`.player-name`).outerHeight(true)
    var nameW = $(`.player-name`).outerWidth(true)
    var clickhereH = $(`.get-num`).outerHeight(true)
    var clickhereW = $(`.get-num`).outerWidth(true)
    cont2Margin = nameH+clickhereH;
    if(windowH>windowW){
        var l = windowW;
        var up = cont2Margin;
        var dif = windowH - windowW;
        if((dif/2)<up){
            dif = up;
            dif = 100;
        }
        else{
            dif = dif/2;
        }
        $('.b1').css('top','-11vmin');
        $('.b1').css('left','0px');
        $('.b2').css('top','-11vmin');
        $('.b2').css('right','0px');
        $('.b3').css('right','0px');
        $('.b3').css('bottom','-11vmin');
        $('.b4').css('bottom','-11vmin');
        $('.b4').css('left','0px')
       
        $(`.cont2`).css('margin-top',`${dif}px`);
        $(`.cont2`).css('margin-left',`0px`);
        $(`.cont3,.cont2`).outerHeight(l);
        $(`.cont3,.cont2`).outerWidth(l);
        $(`.cont3`).css('margin-left',`0px`);
        $(`.cont2`).css('margin-bottom',`${dif}px`);
        if(clickhereH>clickhereW){
            $('.get-num').outerHeight('10vmin')
            $('.get-num').outerWidth('15vmin')
        }
        
    }
    else{
        var l = windowH;
        l-=nameH;
        var dif = windowW - windowH;
        if(clickhereH<clickhereW){
            $('.get-num').outerHeight('15vmin')
            $('.get-num').outerWidth('10vmin')
        }
        
        $('.b1').css('left','-11vmin');
        $('.b1').css('top','0px');
        $('.b2').css('right','-11vmin');
        $('.b2').css('top','0px');
        $('.b3').css('bottom','0px');
        $('.b3').css('right','-11vmin');
        $('.b4').css('left','-11vmin');
        $('.b4').css('bottom','0px')

        dif = dif/2;
        var clickhereW = $(`.get-num`).outerWidth(true)
        // console.log(dif,clickhereW,clickhereH)
        $(`.cont3`).css('margin-left',`${dif}px`);
        if(clickhereW>dif){
            // l-=(clickhereW-dif)
            dif = clickhereW;

        }
        $(`.cont2`).css('margin-left',`${dif}px`);
        $(`.cont2,.cont3`).css('margin-top',`${nameH}px`);
        // l-=10;
        $(`.cont2`).css('margin-bottom',`${0}px`);
        $(`.cont3,.cont2`).outerHeight(l);
        $(`.cont3,.cont2`).outerWidth(l);
    }
    // console.log(cont3H,cont3W,windowH,windowW);
}

set();
$(window).resize(()=>{
    set()
    // console.log("hel")
})