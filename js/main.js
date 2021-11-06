$(document).ready(function(){
    $("#btn").click(function(){
        $(`<div class="text"></div>`)
            .appendTo('body');
        const text = $("#add").val()
        if(text){
            $( ".text" ).each(function() {
                $( this ).text(text);
            });
        }
    });
})
