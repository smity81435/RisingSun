$(window).scroll(function(){
    var x = $(this).scrollTop();
    var banana = x/800;
    //console.log(banana);
    if( x > 100){
        $('.blackbox').css({
            'opacity' : ''+(x/1000)+''
        });
    }else{
        $('.blackbox').css({
            'opacity' : '0'
        });
    }
    if(banana <= 1){
        $('#one').css({
            'opacity' : '1'
        });
        
    }else{
        $('#one').css({
            'opacity' : '.5'
        });
    }
    if( banana > 1 && banana < 2){
        $('#two').css({
            'opacity' : '1'
        });
        
    } else{
        $('#two').css({
            'opacity' : '.5'
        });
    }
    if( banana > 2 && banana < 3){
        $('#three').css({
            'opacity' : '1'
        });
        
    }else{
        $('#three').css({
            'opacity' : '.5'
        });
    }
    if( banana > 3 && banana < 4){
        $('#four').css({
            'opacity' : '1'
        }); 
    }else{
        $('#four').css({
            'opacity' : '.5'
        });
    }
    if( banana > 4 && banana < 5){
        $('#five').css({
            'opacity' : '1'
        });
        
    }else{
        $('#five').css({
            'opacity' : '.5'
        });
    }
    if( banana > 5 && banana < 6){
        $('#six').css({
            'opacity' : '1'
        });
    }else{
        $('#six').css({
            'opacity' : '.5'
        });
    }
    
});

$(document).ready(function (){
    $(".arrow").click(function (){
        console.log('Clicked.');
        $('html, body').animate({
            scrollTop: $("#exped").offset().top
        }, 2000);
    });
});