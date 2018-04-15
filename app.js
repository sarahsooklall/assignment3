/*
** Button to start quiz
*/
const startButton = document.getElementById('start');
startButton.onclick = function (){
    document.getElementById('partTwo').style.display = "block";
    document.getElementById('partOne').style.display = "none";
}

/*
** Document ready event
*/
$(document).ready(function() {
	$('#query').on("keypress", function(event) {
        /* keyCode 13 is the enter key to submit query */
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "G27cFqltoAFa6grAhM6gJv94Nbk5zdiL";
			var url = "http://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;
			
			$.getJSON(url, function(json) {
                
                /*
                ** Basic Identifying ID
                */
                document.getElementById('gifs').innerHTML = "";
                const result = document.getElementById('endResult');
                const message = document.createElement('article');
                const container = document.getElementById("partTwo");
                
                /* Score, set to zero - to begin at zero */
                var click = 0;
                
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
					
						 $('#gifs').append(imgContainer);
					}
				}
                
                /*
                ** Clickable Gif Code
                */
                $('#gifs').click(function() {
                    const $gifs = $(this);
                    
                    /* To increment score by 1 when clicking */
					click++;
                    console.log(click);
                    /* Showing the message for last page */
                    $('#endResult').append(message);
                    
                    /* Statment to display message when gif is clicked a certain amount*/
                    if (click++ > 11){ //click 10
                        message.textContent ="You clicked 10 times!";
//                        document.getElementById('partTwo').style.display = "block";
//                        document.getElementById('endResult').style.display = "none";
                        }else if(click++ > 21){ //click 20
                            message.textContent ="You clicked 20 times!";
//                            document.getElementById('partTwo').style.display = "block";
//                            document.getElementById('endResult').style.display = "none";
                        }else if(click++ > 31){ //click 30
                            message.textContent ="You clicked 30 times!";
                        }else if(click++ > 41){ //click 40
                            message.textContent ="You clicked 40 times!";
                        }else if(click++ > 51){ //click 50
                            message.textContent ="You clicked 50 times!";
                        }else if(click++ > 61){ //click 60
                            message.textContent ="You clicked 60 times!";
                        }else if(click++ > 71){ //click 70
                            message.textContent ="You clicked 70 times!";
                        }else if(click++ > 81){ //click 80
                            message.textContent ="You clicked 80 times!";
                        }else if(click++ > 91){ //click 90
                            message.textContent ="You clicked 90 times!";
                    }else{ //click 100
                        document.getElementById('partTwo').style.display = "none";
                        document.getElementById('endResult').style.display = "block";
                        message.textContent ="You clicked 100 times!";
                    }
                    
                });
                
			});
		}
	});
});
              