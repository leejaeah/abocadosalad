$(function(){
    //이미지 슬라이드
    let currentIndex = 0;   
    $(".event_box").append($(".box").clone(true));   
 
    setInterval(function(){
        currentIndex++;    
        $(".event_box").animate({marginLeft: -300 * currentIndex}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".event_box").animate({ marginLeft: 0},0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000)
});
