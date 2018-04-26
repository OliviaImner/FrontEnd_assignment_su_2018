$(document).ready(function(){
	
	$('#signup').validate({
		//debug: true,
		errorElement: "span",
		rules: {
			username: {
				required: true,
				minlength: 4
			},
			password: {
				required: true,
				rangelength: [6,20]
			},
			confirm_password: {
				equalTo:'#password'
			},
			name: 'required',
			email: {
				required: true,
				email: true
			}
		}, //Rules
		messages: {
			username: {
				required: "Fyll i ditt användarnamn!",
      			minlength: jQuery.format("Minst {0} tecken krävs!")
			},
			password: {
				required: "Fyll i ett lösenord!",
				rangelength: jQuery.format("Lösenordet måste vara mellan {0}-{1} tecken långt!")
			},
			confirm_password: {
				equalTo:'Lösenorden matchar inte!'
			},
			name: "Fyll i ditt namn!",
			email: {
				required: "Fyll i din e-postadress!",
				email: "Fyll i en giltig e-postadress!"
			}
		}, //Messages
		submitHandler: function(form) {
		    window.alert("Allt är ifyllt korrekt!");
		    return false;
  		}
	});//Validate
	
	$(':text,:password').focus(function(){
		$(this).css('border', '2px solid lightblue');
	});
	$(':text,:password').blur(function(){
		$(this).css('border', '');
	});
	$(':text:first').focus();
	$(':radio').click(function(){
		if($(this).val() == 'Röd')
			disableCheckboxes();
		else
			enableCheckboxes();
	});
	
});

function disableCheckboxes(){
	$(':checkbox').each(function(){
		if($(this).val()!='Ruby'){
			$(this).attr('disabled', true);
		}
	});
}
function enableCheckboxes(){
	$(':checkbox').each(function(){
		if($(this).val()!='Ruby'){
			$(this).attr('disabled', false);
		}
	});
}