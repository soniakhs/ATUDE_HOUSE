$("#navi").hover(
    function(){
        $(".sub-menu").stop().slideDown("slow");
    },function(){
        $(".sub-menu").stop().slideUp("fast");    
    }
);

var timer = setInterval("autoSlide()",3000);
var s_width = 0;
var num = $(".img_wrap").children('img').length -1;
var max = 1200 * num; //3600
var btn = -1;

function autoSlide(){
    s_width += 1200;
     if(s_width > max){
        s_width = 0;
    }
    $(".slide_btn").on("click",function(){
        btn = $(this).val()-1;
        s_width = btn * 1200;
    });
    
    $(".img_wrap").animate({ 
        "margin-left" : "-"+s_width +"px"
    });
    
}



function stop(){
    clearInterval(timer);
    $(".play").removeClass("on");
    $(".stop").addClass("on");
    
}

function play(){
    clearInterval(timer);
    timer = setInterval("autoSlide()",3000);
    $(".stop").removeClass("on");
    $(".play").addClass("on");
}

var model_img = $(".model>img");
var sno = 0;
var eno = model_img.length-1;
var model_timer = setInterval("opcityImg()",4000);

function opcityImg(){
    $(model_img[sno]).animate({
        opacity:"0"
    });
    sno++;
    if(sno > eno) sno =0;
    $(model_img[sno]).animate({
        opacity:"1"
    });
}

