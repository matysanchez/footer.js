(function($) {
    $.fn.footer = function() {
        footerSelector  = $(this); // This is for the selector. i.e: $("#footer")
        footerHeight    = footerSelector.height(); // Catch the current height of the selector
        footerTop       = ( $(window).scrollTop() + $(window).height() - footerHeight ) + "px"; // Where is the footer?

        locateFooter();

        function locateFooter(){
            // Is the body height plus the footer height upper to the windows height?
            if( ($(document.body).height() + footerHeight) < $(window).height() ){
                footerSelector.css({
                    position: "absolute",
                    bottom: 0 // I know is not the best practice, but works very fine :)
                });
            }else{
                // Well... I don't think so..
                footerSelector.css({
                    position: "static"
                });
            }
        }

       // If the windows parameters (like window size) change, please relocate the footer.
       $(window)
            .scroll(locateFooter)
            .resize(locateFooter)

    }
}(jQuery));