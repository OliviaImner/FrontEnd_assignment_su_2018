
$(document).ready(function() {
	$('#linkAlert').click(function(evt) {
		window.alert('Här är alert popup!');
		evt.preventDefault();
	});	
    $('#linkPrompt').click(function(evt) {
		window.prompt('Prompt!');
		evt.preventDefault();
	});
	$('#linkConfirm').click(function(evt) {
		window.confirm('Confirm?');
		evt.preventDefault();
	});
    var myWindow;
	$('#divLinkOpen').click(function(){
		myWindow = window.open('','','width=300,height=400');
	});
	$('#divLinkClose').click(function(){
		myWindow.close('');
	});
    	var myvar;
	$('#setInterval').click(function(evt){
		myvar = window.setInterval(function(){
			alert("Alarm 1!")
		}, 3000);
		evt.preventDefault();

	});
	$('#clearInterval').click(function(evt){
		window.clearInterval(myvar);
		evt.preventDefault();
	});
	var myvar2;
	$('#setTimeout').click(function(evt){
		myvar2 = window.setTimeout(function(){
			alert("Alarm 2!")
		}, 3000);
		evt.preventDefault();
	});
	$('#clearTimeout').click(function(evt){
		window.clearTimeout(myvar);
		evt.preventDefault();
	});
});