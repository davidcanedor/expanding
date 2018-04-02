$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    $("#story").toggle();
    $("#submit").click(function(){
        $("#word01").html($("#field01").val());
        $("#question").toggle();
        $("#story").toggle();
        $("#word02").html($("#field02").val());
        $("#word03").html($("#field03").val());
        $("#word04").html($("#field04").val());
        $("#word05").html($("#field05").val());
        $("#word06").html($("#field06").val());
        $("#word07").html($("#field07").val());
        $("#word08").html($("#field08").val());
        $("#word09").html($("#field09").val());
        $("#word10").html($("#field10").val());
        $("#word11").html($("#field11").val());
        $("#word12").html($("#field12").val());
        $("#word13").html($("#field13").val());
        $("#word14").html($("#field14").val());
        $("#word15").html($("#field15").val());
        $("#word16").html($("#field16").val());
        $("#word17").html($("#field17").val());
        $("#word18").html($("#field18").val());
        $("#word19").html($("#field19").val());
    });
});