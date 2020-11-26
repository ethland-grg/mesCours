
$(document).ready(function () {
    $("#p1").click(function () {
        $(this).hide();
    });
});

window.$(){
$();
}

$(function(){
    $("span").not(".souligne").css("color", "green");
});

$(document).ready(function(){
    $("span").first().css("color", "green");
    $("span").eq(1).css("color", "blue");
    $("span").last().css("color", "orange");

})

$(function(){
    /*Cible l'élément parent direct de chaque élément li et ajoute 
    une bordure autour
    $("li").parent().css("border", "1px solid black");

    Cible l'élément parent direct de chaque élément li uniquement si
    il possède un id="parents" et change la couleur de fond en bleu
    $("li").parent("#parents").css("background-color", "lightBlue");*/
});


