var errorMsg = "";
$(function(){	
	$("#bookingForm").on('submit', function(e){
		//var isvalidate = validate("bookingForm");
		validate("bookingForm");		
		e.preventDefault();
	});	
});

function validate(f)
{
	var form=$("#"+f);
	var error = false;
	var str='';	
	 $("input:not('input:submit')", form).each(function(i){
		var fieldType  = $(this).prop('type');
		var fieldName  = $(this).prop('name');
		var fieldValue = $(this).val();
		switch(fieldType)
		{
			case 'text':
			      if(fieldValue == " " || fieldValue == "") 
				  {
					  error = true;
					  errorMsg = "You have to fill out " + fieldName ;
				  }	
				  
				  if(!error)
				  {
					  switch (fieldName)
					  {
						  case 'e-mail':
						       if( !validateEmail(fieldValue)) {
								   error = true;
					               errorMsg = "The e-mail address is not valid";								   
							   }
						   case 'numberOfPersons':
						        if( Math.floor(fieldValue) == fieldValue && $.isNumeric(fieldValue)) 
								{
									if(fieldValue <=0 )
									{
										error = true;
					                    errorMsg = "the number of participants must be greater than 0";					      
									}
								}
								else
								{
									error = true;
					                errorMsg = "The number of participant has to be a NUMBER!";	
								}
						        break;					   
					  }
				  }
			      break;
			/*case "radio":
			      break;*/
		}
		if(error)
		{
			return false;
		}
    });
	if(error)
	{
		 //tu peux decommenter ces deux lignes pour afficher 
		 // un dialog jquery va falloir le customiser dans bookings.css
		//$('#dialog p').html(errorMsg);
		//$('#dialog').dialog();
		
		//sinon tu peux laisser en commentaires les 2 lignes precedentes et afficher les alert, pas tres beau !!!
		alert(errorMsg);
		
	}
	else
	{
		form.submit();
	}
}

function validateEmail(email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if( !emailReg.test( email ) ) {
    return false;
  } else {
    return true;
  }
}

