// document ready event
$(document).ready(function() {
	$('#query').on("keypress", function(event) {
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "G27cFqltoAFa6grAhM6gJv94Nbk5zdiL";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=20"
						+ "&offset="
						+ offset;
        }
    });
});
                   