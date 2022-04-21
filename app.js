var submit = $( 'form input[type=submit]' )


submit.click( function () {
    var input_value = $( 'form input[type=text]' ).val()
    console.log( input_value);
    if ( input_value === input_value.split( '' ).reverse().join( '' ) ) {
        $( '#result' ).text( "c'est un palindrome" )
        $( '#result' ).removeClass( 'infos_none' )
        $( '#result' ).addClass( 'infos' )
    } else {
        $( '#result' ).addClass( 'infos_none' )
        $( '#result' ).text( "ce n'est pas un palindrome" )
    }
} )
