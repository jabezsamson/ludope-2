$(document).ready(function() {

            //Check to see if the window is top if not then display button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 500) {
                    $('#BtnTop').fadeIn(300);
                    
                } else {
                    $('#BtnTop').fadeOut(300);
                    
                }
            });

            //Click event to scroll to top
            $('#BtnTop').click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });

        });