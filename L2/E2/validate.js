$(function(){
    $("form[name='newAlbum'").validate({
        rules: {
            name: "required",
            year: "required",
            description: "required"
        },
        messages: {
            name: "Enter a name",
            year: "Enter a release year",
            description: "Write a description"
        },
        submitHandler: function(form){
            form.submit();
        }
    })
})