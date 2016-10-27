$(document).ready(function() {
	$(".upvote").click(function(){
        var votesContainer =$(this).siblings("p.votes");
        votesText = votesContainer.find(".vote-count");
        var votes = parseInt(votesText.text());
        votes++;
        votesText.html(votes);
    });

    $(".downvote").click(function(){
        var votesContainer =$(this).siblings("p.votes");
        votesText = votesContainer.find(".vote-count");
        var votes = parseInt(votesText.text());
        votes--;
        votesText.html(votes);
    });

});