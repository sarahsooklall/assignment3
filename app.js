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
    
    const firstInput = document.getElementById("noun");
    const secondInput = document.getElementById("adjective");
    const thirdInput = document.getElementById("verb");
    const fourthInput = document.getElementById("adverb");
    /*
    ** Array for (noun) first button
    */
    const firstRbtn = [
        "\"Nancy\"",
        "\"Paris\"",
        "\"Accordion\"",
        "\"Albatross\"",
        "\"Anime\"",
        "\"Alcohol\"",
    ];
    const rbtnFirst = document.getElementById("randomOne");
    rbtnFirst.onclick = function() {
        const randOne = firstRbtn[Math.floor(Math.random() * firstRbtn.length)];
        firstInput.value = randOne;
    }
      /*
    ** Array for (adjective) second button
    */
    const secondRbtn = [
        "\"Pretty\"",
        "\"Happy\"",
        "\"Silly\"",
        "\"Sunny\"",
        "\"Afraid\"",
        "\"Beautiful\"",
        "\"Better\"",
    ];
    const rbtnSecond = document.getElementById("randomTwo");
    rbtnSecond.onclick = function() {
        const randTwo = secondRbtn[Math.floor(Math.random() * secondRbtn.length)];
        secondInput.value = randTwo;
    }
     /*
    ** Array for (verb) third button
    */
    const thirdRbtn = [
        "\"Jump\"",
        "\"Run\"",
        "\"Swim\"",
        "\"Ski\"",
        "\"Fish\"",
        "\"Talk\"",
    ];
    const rbtnThird = document.getElementById("randomThree");
    rbtnThird.onclick = function() {
        const randThree = thirdRbtn[Math.floor(Math.random() * thirdRbtn.length)];
        thirdInput.value = randThree;
    }
     /*
    ** Array for(adverb) fourth button
    */
    const fourthRbtn = [
        "\"Quickly\"",
        "\"Slowly\"",
        "\"Happily\"",
        "\"Foolishly\"",
        "\"Speedily\"",
        "\"Blindly\"",
    ];
    const rbtnFourth = document.getElementById("randomFour");
    rbtnFourth.onclick = function() {
        const randFour = fourthRbtn[Math.floor(Math.random() * fourthRbtn.length)];
        fourthInput.value = randFour;
    }
    
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