	$(document).ready(function() {

    $('#hide').click(function(evt) {
		$('#divHide').hide();
		evt.preventDefault();
	});
	$('#show').click(function(evt) {
		$('#divShow').show();
		evt.preventDefault();
	});
	$('#toggle').click(function(evt) {
		$('#divToggle').toggle();
		evt.preventDefault();
	});
        $('#fadeIn').click(function(evt) {
		$('#divFadeIn').fadeIn();
		evt.preventDefault();
	});
	$('#fadeOut').click(function(evt) {
		$('#divFadeOut').fadeOut();
		evt.preventDefault();
	});
	$('#fadeToggle').click(function(evt) {
		$('#divFadeToggle').fadeToggle();
		evt.preventDefault();
	});
	$('#fadeTo').click(function(evt) {
		$('#divFadeTo').fadeTo('normal', .50);
		evt.preventDefault();
	});
});