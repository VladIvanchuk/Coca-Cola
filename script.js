$(document).ready(function() {
    setTimeout(function() {
        $('.cloud').show();
    }, 3000);
    $(document).snowfall({
        flakeCount: 100 // Количество снежинок
    });

    

    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > 1000) {
            $(".snow").css("top", "-1000px")
        } else if (st > 300) {
            $(".snow").css("top", "-150px")
        } else {
            $(".snow").css("top", "300px")
        }
    });

    $('input[type="radio"]').click(function() {
        var target = $('#present-' + $(this).val());

        $('.present').not(target).hide(0);
        target.fadeIn(150);
    });
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.burger span').classList.toggle('active');
    });

    $(function() {
        $("#burger").on("click", function() {
            if ($(this).is(":checked")) {
                $(".circle").css("transform", "scale(100)");
                $(".inner").slideToggle(1000, );
                $(".main_nav").css("z-index", "-10");
            } else {
                $(".circle").css("transform", "scale(0)");
                $(".inner").slideToggle(500);
                
                $('.main_nav')
                    .delay(1000)
                    .queue(function(next) {
                        $(this).css("z-index", "1");
                        next();
                    });

            }
        })
    });

    

});