jQuery(document).ready(function($){
    //open popup
    $('#submittext').on('click', function (event) {
        event.preventDefault();
        $('.panelofinput').hide();
        $('.paneloftext').show();
        $('#submitinput').parent().hide();
        
        
    });
    $('#submitininput').on('click', function (event) {
        event.preventDefault();
        $('.panelofinput').show();
        $('#submitinput').parent().show();
        $('.paneloftext').hide();
        
        
    });
    
})
