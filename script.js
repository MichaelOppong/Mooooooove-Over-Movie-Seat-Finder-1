var movieReviewPikachu = [
    "The best movie this year love Pikachu!",
    "I laughed, I cried, then I laughed again really love Pikachu!",
    "I could not sleep after seeing this movie because I love Pikachu!"
];
var movieReviewMIB = [
    "The best movie this year love MIB!",
    "I laughed, I cried, then I laughed again really love MIB!",
    "I could not sleep after seeing this movie because I love MIB!"
];
var movieReviewAladdin = [
    "The best movie this year love Aldadin!",
    "I laughed, I cried, then I laughed again really love Aldaddin!",
    "I could not sleep after seeing this movie because I love Aladdin!"
];
var movieReviewToyStory = [
    "The best movie this year love Woody!",
    "I laughed, I cried, then I laughed again really love Woody!",
    "I could not sleep after seeing this movie because I love Woody!"
];
$(".buy").hide();
$(".pokemon").click(function(){
        $(".pokemon").css("border","5px solid yellow");
         $(".aladdin").css("border","none");
        $(".toy").css("border","none");
        $(".mib").css("border","none");
        $(".movieReviews").text("");
    for(var review of movieReviewPikachu){
        $(".movieReviews").append(`<p>${review}</p>`);
    }
});
$(".mib").click(function(){
    $(".pokemon").css("border","none");
    $(".aladdin").css("border","none");
    $(".toy").css("border","none");
    $(".mib").css("border","5px solid black");
    $(".movieReviews").text("");
    for(var review of movieReviewMIB){
        $(".movieReviews").append(`<p>${review}</p>`);
    }
});
$(".aladdin").click(function(){
            $(".aladdin").css("border","5px solid purple");
        $(".pokemon").css("border","none");
        $(".toy").css("border","none");
        $(".mib").css("border","none");
        $(".movieReviews").text("");
    for(var review of movieReviewAladdin){
        $(".movieReviews").append(`<p>${review}</p>`);
    }
});
$(".toy").click(function(){
        $(".toy").css("border","5px solid blue");
        $(".aladdin").css("border","none");
        $(".pokemon").css("border","none");
        $(".mib").css("border","none");
        $(".movieReviews").text("");
    for(var review of movieReviewToyStory){
        $(".movieReviews").append(`<p>${review}</p>`);
    }
});
$(".calculateTotal").click(function(){
    var child=$(".numberChild").val()*8;
    var adult=$(".numberAdult").val()*12;
    var totalCost=child+adult; 
    
    if(totalCost<0){
        $(".totalCost").text(`You cannot select a negative number`);
    }else if(totalCost===0){
         $(".totalCost").text(`You did not select any tickets`);  
    }else{
           $(".totalCost").text(`Your total cost is ${totalCost}`);
           $(".buy").show();
    }
});
$(".buy").click(function(){
    $("body").html(`<img class='final' src='https://media2.giphy.com/media/13ZVRnWnmSMaRy/giphy.gif?cid=790b76115d1b93c74257546951befdee&rid=giphy.gif'>`);

});