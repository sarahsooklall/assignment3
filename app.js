/*
** Document ready event
*/
$(document).ready(function() {
    
    /*
    ** Button to start quiz
    */
    $('#start').click(function() {
        document.getElementById('nextOne').style.display = "block";
        document.getElementById('partOne').style.display = "none";
    });
    
//    const firstInput = document.getElementById("noun");
//    
//    /*
//    ** Array for buttons
//    */
//    const firstRbtn = {
//        "\"Hi\"",
//        "\"Hello\"",
//        "\"Hola\"",
//    };
//    const rbtnFirst = document.getElementById("randomOne");
//    rbtnFirst.onclick = function() {
//        const randOne = firstRbtn[Math.floor(Math.random() * firstRbtn.length)];
//        firstInput.value = randOne;
//    }
    /*
    ** For Noun Gif
    */
	$('#noun').on("keypress", function(event) {
        /* keyCode 13 is the enter key to submit query */
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "G27cFqltoAFa6grAhM6gJv94Nbk5zdiL";
			var url = "https://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;
			
			$.getJSON(url, function(json) {
                
                document.getElementById('gifsNoun').innerHTML = "";
                document.getElementById('nextOne').style.display = "none";
                document.getElementById('nextTwo').style.display = "grid";
                
                /*
                ** Gif Code
                */
				console.log(json);
				for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
					
						const imgContainer = $('<div>')
							.addClass('gif');
					
						imgContainer.append(imgElem);
					
						 $('#gifsNoun').append(imgContainer);
					}
				}
            });
        };
    });
    
    /*
    ** For Adjective Gif
    */
    $('#adjective').on("keypress", function(event) {
        /* keyCode 13 is the enter key to submit query */
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "G27cFqltoAFa6grAhM6gJv94Nbk5zdiL";
			var url = "https://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;
			
			$.getJSON(url, function(json) {
                
                document.getElementById('gifsAdjective').innerHTML = "";
                document.getElementById('nextTwo').style.display = "none";
                document.getElementById('nextThree').style.display = "grid";
                
                /*
                ** Gif Code
                */
				console.log(json);
				for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
					
						const imgContainer = $('<div>')
							.addClass('gif');
					
						imgContainer.append(imgElem);
					
						 $('#gifsAdjective').append(imgContainer);
					}
				}
            });
        };
    }); 
    
    /*
    ** For Verb Gif
    */
    $('#verb').on("keypress", function(event) {
        /* keyCode 13 is the enter key to submit query */
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "G27cFqltoAFa6grAhM6gJv94Nbk5zdiL";
			var url = "https://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;
			
			$.getJSON(url, function(json) {
                
                document.getElementById('gifsVerb').innerHTML = "";
                document.getElementById('nextThree').style.display = "none";
                document.getElementById('nextFour').style.display = "grid";
                
                /*
                ** Gif Code
                */
				console.log(json);
				for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
					
						const imgContainer = $('<div>')
							.addClass('gif');
					
						imgContainer.append(imgElem);
					
						 $('#gifsVerb').append(imgContainer);
					}
				}
            });
        };
    }); 
    
    /*
    ** For Adverb Gif
    */
    $('#adverb').on("keypress", function(event) {
        /* keyCode 13 is the enter key to submit query */
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "G27cFqltoAFa6grAhM6gJv94Nbk5zdiL";
			var url = "https://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;
			
			$.getJSON(url, function(json) {
                
                document.getElementById('gifsAdverb').innerHTML = "";
                document.getElementById('nextFour').style.display = "none";
                document.getElementById('endResult').style.display = "grid";
                
                /*
                ** Gif Code
                */
				console.log(json);
				for (let i = 0; i < json.data.length; i++) {
					const img = json.data[i];
					if (img.images.downsized.url) {
						const imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
					
						const imgContainer = $('<div>')
							.addClass('gif');
					
						imgContainer.append(imgElem);
					
						 $('#gifsAdverb').append(imgContainer);
					}
				}
            });
        };
    }); 
});