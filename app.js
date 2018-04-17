/*
** Document ready event
*/
$(document).ready(function() {
    
     $('#start').click(function() {
                    //startButton.onclick = function (){
                    document.getElementById('partTwo').style.display = "block";
                    document.getElementById('partOne').style.display = "none";
                });
    
	$('#query').on("keypress", function(event) {
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
                
                /*
                ** Identifying ID
                */
                document.getElementById('gifs').innerHTML = "";
//                document.getElementById('endResult').innerHTML = "";
                const message = document.createElement('article');
                const partTwo = document.getElementById('partTwo');
                const result = document.getElementById('endResult');
                /* Score, set to zero - to begin at zero */
                var click = 0;
                
                /*
                ** Button to start quiz
                */
                document.getElementById('start').innerHTML = "";
                //const startButton = document.getElementById('start');
                
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
//                 const $gifs = $(this);
                    
                    /* To increment score by 1 when clicking */
					click++;
                    console.log(click);
                    /* Showing the message for last page */
                    $('#endResult').append(message);
                    
                    
                    /* Statment to display message when gif is clicked a certain amount*/
                    if (click == 10){ //click 10
                        const result = document.createElement('p');
//                        document.getElementById('partTwo').style.display = "block";
//                        document.getElementById('endResult').style.display = "none";
                        console.log("You clicked 10 times!");
                        //Question
                        message.textContent ="Why did Kevin take soap to school!";
                    } else if(click < 21){
//                            document.getElementById('partTwo').style.display = "block";
//                            document.getElementById('endResult').style.display = "none";
                            console.log("You clicked 20 times!");
                            //Answer
                            message.textContent ="Because the weather-man perdicted showers!";
                        }else if(click < 31){ //click 30
                            message.textContent = "When will water stop running down hill?";
                            console.log("You clicked 30 times!");
                             //Answer
                            message.textContent ="When it reaches the bottom.";
                            //Question
                        }else if(click < 41){ //click 40
                            message.textContent ="Which is the only way a leopard can change his spots?";
                            console.log("You clicked 40 times!");
                             //Answer
                            message.textContent ="By going from one spot to another.";
                            //Answer
                        }else if(click < 51){ //click 50
                            message.textContent ="What do you call two witches who live together?";
                            console.log("You clicked 50 times!");
                             //Answer
                            message.textContent ="Broommates!";
                            //Question
                        }else if(click < 61){ //click 60
                            message.textContent ="There are two monkeys on a tree and one jumps off.  Why does the other monkey jump too?";
                            console.log("You clicked 60 times!");
                            //Answer
                            message.textContent ="Monkey see monkey do.";
                        }else if(click < 71){ //click 70
                            message.textContent ="What can point in every direction but can't reach the destination by itself.";
                            console.log("You clicked 70 times!");
                             //Answer
                            message.textContent ="Your finger.";
                            //Question
                        }else if(click < 81){ //click 80
                            message.textContent ="When is music like vegetables?";
                            console.log("You clicked 80 times!");
                             //Answer
                            message.textContent ="When there are two beats (beets) to the measure.";
                        }else if(click < 91){ //click 90
                            message.textContent ="What did the comedian say when he took off his clothes?";
                            console.log("You clicked 90 times!");
                            message.textContent ="Haven't you ever seen a comic strip.";
                            //Question
                    }else{ //click 100+
                        document.getElementById('partTwo').style.display = "none";
                        document.getElementById('endResult').style.display = "block";
                        console.log("You clicked 100 or more times!");
                        //Answer
                    }
                    
                });
                
			});
		}
	});
});