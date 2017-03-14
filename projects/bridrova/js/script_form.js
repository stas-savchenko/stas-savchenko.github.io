$.validate({
  form : '.form',
  onElementValidate : function(valid, $el, $form, errorMess) {
    //  console.log('Input ' +$el.attr('name')+ ' is ' + ( valid ? 'VALID':'NOT VALID') );
  }  
});



$('#button1').click(function() {
  errors = [];
  if( !$('#form1').isValid() ) {
    //displayErrors( errors );
  } else {
    $.post( 
    
    "submit.php", //url
    
    { 
      email: $('[name="email"]').val(),
      name: $('[name="name"]').val(),
      phone: $('[name="phone"]').val()
    }, 
    
    function( data ) { 
      $( ".result" ).html(data);
    }
    
    );
  }

});

$('#button2').click(function() {
  errors = [];
  if( !$('#form2').isValid() ) {
    //displayErrors( errors );
  } else {
    $.post( 
    
    "submit.php", //url
    
    { 
      email: $('[name="email2"]').val(),
      name: $('[name="name2"]').val(),
      phone: $('[name="phone2"]').val()
    }, 
    
    function( data ) { 
      $( ".result2" ).html(data);
    }
    
    );
  }

});

//E-mail Ajax Send
  //Documentation & Example: https://github.com/agragregra/uniMail
  $("#form1").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "submit.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });


