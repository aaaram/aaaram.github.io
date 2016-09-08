$(document).ready(function() {
	
	redrawDotNav();

	
	/* Scroll event handler */
    $(window).on('scroll',function(e){
    	parallaxScroll();primary
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.nav-visitkorea').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.nav-smc').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#smc-article').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.nav-smc-eng').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#smc-eng-article').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.nav-hospia').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#hospia-article').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.nav-jck').click(function(){
        $('html, body').animate({
            scrollTop:$('#jck-article').offset().top
        }, 1000, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
    });

    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h2').show();
		},
		function () {
			$(this).prev('h2').hide();
		}
    );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

 /*   $(function(){   

       
        $('#primary li a').click(function(ev){
            ev.preventDefault();
            var targetHash = $(this).attr('href'),
                $targetObj = $(targetHash),
                scroll_to = $targetObj.offset().top

            $('html, body').stop(true,false).animate({scrollTop: scroll_to},700, 'easeInOutQuart', function(){
                console.log('ok')
            });
        });
    });*/

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
    var section1Top =  0;
    // The top of each section is offset by half the distance to the previous section.
    var section2Top =  $('#smc-article').offset().top - (($('#smc-eng-article').offset().top - $('#smc-article').offset().top)/2); //450
    var section3Top =  $('#smc-eng-article').offset().top - (($('#hospia-article').offset().top - $('#smc-eng-article').offset().top)); //1200
    var section4Top =  $('#hospia-article').offset().top - (($('#jck-article').offset().top - $('#hospia-article').offset().top)); //2000
    var section5Top =  $('#jck-article').offset().top - (($(document).height() - $('#jck-article').offset().top)); //3450
    $('nav#primary a').removeClass('active');
    if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
        $('nav#primary a.nav-visitkorea').addClass('active');
    } else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
        $('nav#primary a.nav-smc').addClass('active');
    } else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
        $('nav#primary a.nav-smc-eng').addClass('active');
    } else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
        $('nav#primary a.nav-hospia').addClass('active');
    } else if ($(document).scrollTop() >= section5Top){
        $('nav#primary a.nav-jck').addClass('active'); }
        console.log(section2Top);
    
}