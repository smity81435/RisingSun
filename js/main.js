
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

$(function() {
    $("#sky").hover(function(){
        $("#sky").parent().parent().css({"background":"url('../img/airrecon.jpg') no-repeat"});
        $("#sky").parent().parent().css({"background-size":"cover"});
        $("#surface").css({"opacity":".3"});
        $("#subsurface").css({"opacity":".3"});
    },
    function(){ 
        $("#sky").parent().parent().css({"background":"url('../img/recon.jpg') no-repeat"});
        $("#sky").parent().parent().css({"background-size":"cover"});
        $("#surface").css({"opacity":"1"});
        $("#subsurface").css({"opacity":"1"});
    });
    $("#surface").hover(function () {
        $("#surface").parent().parent().css({"background":"url('../img/landrecon.jpg') no-repeat"});
        $("#surface").parent().parent().css({"background-size":"cover"});
        $("#sky").css({"opacity":".3"});
        $("#subsurface").css({"opacity":".3"});
    },function(){
        $("#surface").parent().parent().css({"background":"url('../img/recon.jpg') no-repeat"});
        $("#sky").parent().parent().css({"background-size":"cover"});
        $("#sky").css({"opacity":"1"});
        $("#subsurface").css({"opacity":"1"});
    });
    $("#subsurface").hover(function () {
        $("#subsurface").parent().parent().css({"background":"url('../img/subsurf.jpg') no-repeat"});
        $("#subsurface").parent().parent().css({"background-size":"cover"});
        $("#sky").css({"opacity":".3"});
        $("#surface").css({"opacity":".3"});
    },function(){
        $("#subsurface").parent().parent().css({"background":"url('../img/recon.jpg') no-repeat"});
        $("#sky").parent().parent().css({"background-size":"cover"});
        $("#sky").css({"opacity":"1"});
        $("#surface").css({"opacity":"1"});
    });
});
