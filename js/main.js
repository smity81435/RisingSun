$(window).scroll(function(){
    var x = $(this).scrollTop();
    console.log(x);
    if( x > 100){
        $('.blackbox').css({
            'opacity' : ''+(x/1000)+''
        });
    }else{
        $('.blackbox').css({
            'opacity' : '0'
        });
    }

});