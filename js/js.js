$(function(){
    $('#noz').hide();
});
$(function(){
    $('#lay').hide();
});
$(function(){
    $('#some').hide();
});
$(window).on('load', function(){
    $('#quot').hide();
});
$(window).on('load', function(){
    $('#quotes').hide().fadeIn(1000, function(){
        $('#quot').fadeIn(800);
    });
})

$(function() {
    $('#fill').hover(function() { 
        $('#fill').fadeTo("fast", 1); 
    });
    });
    $(function() {
        $('.b2').hover(function() { 
            $('.b2').fadeTo("slow", 1); 
        });
        });

        $(function() {
            $('.b3').hover(function() { 
                $('.b3').fadeTo("slow", 1); 
            });
            });

            $(function() {
                $('.b4').hover(function() { 
                    $('.b4').fadeTo("slow", 1); 
                });
                });
                $(function() {
                    $('.b5').hover(function() { 
                        $('.b5').fadeTo("slow", 1); 
                    });
                    });


$(function(){
    $('#endbut').click(function(){
        $('#lay').fadeTo('slow', 0.7).delay(800, function(){
            $('#some').fadeTo('slow', 1, function(){
                $('#some').delay(2000).fadeTo('slow', 0, function(){
                    $('#noz').fadeTo('slow', 1, function(){
                        $('#noz').delay(2000).fadeTo('slow', 0, function(){
                            $('#lay').delay(1000).hide();

                        })
                    });
                });
            });
                
            });
        });
    })
