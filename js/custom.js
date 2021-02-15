$(document).ready(function() {
    $(".flip-card-btn-turn-to-back").css("visibility", "visible");
    $(".flip-card-btn-turn-to-front").css("visibility", "visible");

    $(".flip-card-btn-turn-to-front").each(function(index, item) {
        $(this).click(function() {

            $(".click-flip-card:eq(" + index + ")").toggleClass('do-flip');
        });

    });
    $(".flip-card-btn-turn-to-back").each(function(index, item) {
        $(this).click(function() {
            $(".click-flip-card").removeClass("do-flip");
            $(".click-flip-card:eq(" + index + ")").toggleClass('do-flip');
        });

    })

});