$(document).ready(function() {
    var _crsl = 0;

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

    });

    // custom Carousel Interaction

    function cstCrsl() {
        $(".item").hide();
        $(".item:eq(0)").fadeIn(500);
        $(".crs-indtrs li:eq(0)").addClass("active");

        $(".right").click(function() {
            _crsl++;
            if (_crsl >= 4) {
                _crsl = 0;
            }
            crsActive();
        });

        $(".left").click(function() {
            if (_crsl <= 0) {
                _crsl = 4;
            }
            _crsl--;
            crsActive();
        });


    }

    $(".crs-indtrs li").each(function(index, item) {
        $(this).click(function() {
            _crsl = index;
            crsActive()
        })
    })

    function crsActive() {
        $(".item").hide();
        $(".crs-indtrs li").removeClass("active")
        $(".item:eq(" + _crsl + ")").fadeIn(500);
        $(".crs-indtrs li:eq(" + _crsl + ")").addClass("active");
    }
    cstCrsl();
});