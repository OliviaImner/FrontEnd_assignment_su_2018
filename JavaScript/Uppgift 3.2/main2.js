
$(document).ready(function(){
    
    $("#text").css('border', '4px solid darkgrey');
        $("button").click(function(){
                    $("#text").remove();
        });
    $('#change').click(function(){
		$(this).css('background-color','lightblue ');
	});

    $("img").delay(1000).fadeOut(500, function() { 
        $(this).attr("src", "grown.jpg").fadeIn(500);
        
        });
    $('#toggle').click(function(){
		$(this).toggleClass('Class1').toggleClass('Class2');
	   });
    $('#Content').click(function(){
		$(this).text('Nu är det ny text');
	});
    $('#hover').hover(function(){
		$(this).css('background-color','#FFFFFF');
	},function(){
		$(this).css('background-color','#267272');
	});
    $('#mouseEvent').click(function(evt){
		$('#mouseEvent span').text('X = ' + evt.pageX + ', Y = ' + evt.pageY);
      	});
  
    $('#removeE').mouseover(function() {
		$(this).css('background-color','white');
	});

	$('#removeE').mouseout(function() { 
		$(this).css('background-color','lightpink');
		$('#removeE').unbind('mouseover');
		$('#removeE').unbind('mouseout');
	});
	
    $('#windowSize span').text($(this).width()+'x'+$(this).height());
	$(window).resize(function(){
		$('#windowSize span').text($(this).width()+'x'+$(this).height());
	});
    	$('#preventLink').click(function(evt){
		evt.preventDefault();
	});
    	$('#textInput').keyup(function(){
		$('#getInfo span').text($('#textInput').val());
	});
    	$('#textInput').focus(function(){
		$(this).css('border','2px solid lightblue');
	});
	$('#textInput').blur(function(){
		$(this).css('border','');
	});
 });
