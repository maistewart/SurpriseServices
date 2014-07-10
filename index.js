/**
 * Created by Mai on 7/9/2014.
 */
$(document).ready(function(){
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 60) {
            $("#headertop").slideUp("slow");
            /*$("#headerline").slideUp("slow");*/
            /*$("#headholder").slideUp(800);*/
            $("#navigation").stop().animate({top:-100}, "slow");
            $("#headerclear").stop().animate({height: 70}, "slow");

        }
        else {
            $("#headertop").slideDown("slow");
            $("#navigation").stop().animate({top:0}, "slow");
            $("#headerclear").stop().animate({height: 170}, "slow");


            /*$("#headholder").slideDown(800);*/
            /*$("#headerline").slideDown("slow");*/
        }
    });
});