/*
** Document ready event
*/
$(document).ready(function() {
    
    /*
    ** Button to start quiz
    */
    $('#start').click(function() {
        /* To go to next question (and div) */
        document.getElementById('nextOne').style.display = "block";
        document.getElementById('partOne').style.display = "none";
    });
    
    /*
    ** For Question 1 and Gif 1
    */
	$('#queryOne').on("keypress", function(event) {
        /* keyCode 13 is the enter key to submit query */
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
            var queryOne = this.value;
			var key = "G27cFqltoAFa6grAhM6gJv94Nbk5zdiL"; /* Key from personal Giphy account */
			var urlOne = "https://api.giphy.com/v1/gifs/search?q="
                        + queryOne
						+ "&api_key="
						+ key
                        /* Only 1 gif */
						+ "&limit=1"
			$.getJSON(urlOne, function(jsonOne) {       
                document.getElementById('gifsNoun').innerHTML = ""
                /* To go to next question (and div) */
                document.getElementById('nextOne').style.display = "none";
                document.getElementById('nextTwo').style.display = "grid";
				    console.log(jsonOne);
                        /* Do not need line 37, 38 & If Statment because there is only one image but kept them incase project is changed to have more images */
				        for (let a = 0; a < jsonOne.data.length; a++) {
                            const imgOne = jsonOne.data[a];
                            if (imgOne.images.downsized.url) {
                                const imgElemOne = $('<img>')
                                    .attr('src', imgOne.images.downsized.url);
                                const imgContainerOne = $('<div>')
                                    /* For CSS to style gif */
			                         .addClass('gifOne');
                                imgContainerOne.append(imgElemOne);
                                $('#gifsNoun').append(imgContainerOne);
                            }
                        }
                });
        };
    });
    
    /*
    ** For Question 2 and Gif 2
    */
    $('#queryTwo').on("keypress", function(event) {
        /* keyCode 13 is the enter key to submit query */
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
            var queryTwo = this.value;
			var key = "G27cFqltoAFa6grAhM6gJv94Nbk5zdiL"; /* Key from personal Giphy account */
            var urlTwo = "https://api.giphy.com/v1/gifs/search?q="
                        + queryTwo
						+ "&api_key="
						+ key
                        /* Only 1 gif */
						+ "&limit=1"
                    $.getJSON(urlTwo, function(jsonTwo) {
                        document.getElementById('gifsAdjective').innerHTML = "";
                        /* To go to next question (and div) */
                        document.getElementById('nextTwo').style.display = "none";
                        document.getElementById('nextThree').style.display = "grid";
                            console.log(jsonTwo);
                                /* Do not need line 71, 72 & If Statment because there is only one image but kept them incase project is changed to have more images */
                                for (let b = 0; b < jsonTwo.data.length; b++) {
                                    const imgTwo = jsonTwo.data[b];
                                    if (imgTwo.images.downsized.url) {
                                        const imgElemTwo = $('<img>')
                                            .attr('src', imgTwo.images.downsized.url);
                                        const imgContainerTwo = $('<div>')
                                            /* For CSS to style gif */
                                            .addClass('gifTwo');
                                        imgContainerTwo.append(imgElemTwo); 
                                        $('#gifsAdjective').append(imgContainerTwo);
                                    }
                                }
                        });
        };
    });
    
    /*
    ** For Question 3 and Gif 3
    */
    $('#queryThree').on("keypress", function(event) {
        /* keyCode 13 is the enter key to submit query */
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
            var queryThree = this.value;
			var key = "G27cFqltoAFa6grAhM6gJv94Nbk5zdiL"; /* Key from personal Giphy account */
            var urlThree = "https://api.giphy.com/v1/gifs/search?q="
                        + queryThree
						+ "&api_key="
						+ key
                        /* Only 1 gif */
						+ "&limit=1"
                        $.getJSON(urlThree, function(jsonThree) {
                            document.getElementById('gifsVerb').innerHTML = "";
                            /* To go to next question (and div) */
                            document.getElementById('nextThree').style.display = "none";
                            document.getElementById('nextFour').style.display = "grid";
                                console.log(jsonThree);
                                    /* Do not need line 105, 106 & If Statment because there is only one image but kept them incase project is changed to have more images */
                                    for (let c = 0; c < jsonThree.data.length; c++) {
                                        const imgThree = jsonThree.data[c];
                                        if (imgThree.images.downsized.url) {
                                            const imgElemThree = $('<img>')
                                                .attr('src', imgThree.images.downsized.url);
                                            const imgContainerThree = $('<div>')
                                                /* For CSS to style gif */
                                                .addClass('gifThree');
                                            imgContainerThree.append(imgElemThree);
                                            $('#gifsVerb').append(imgContainerThree);
                                        }
                                    }
                        });
        };
    });
    
    /*
    ** For Question 4 and Gif 4
    */
    $('#queryFour').on("keypress", function(event) {
        /* keyCode 13 is the enter key to submit query */
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
            var queryFour = this.value;
			var key = "G27cFqltoAFa6grAhM6gJv94Nbk5zdiL"; /* Key from personal Giphy account */
            var urlFour = "https://api.giphy.com/v1/gifs/search?q="
                        + queryFour
						+ "&api_key="
						+ key
                       /* Only 1 gif */
						+ "&limit=1"
                        $.getJSON(urlFour, function(jsonFour) {
                            document.getElementById('gifsAdverb').innerHTML = "";
                            /* To go to next question (and div) */
                            document.getElementById('nextFour').style.display = "none";
                            document.getElementById('clickTwo').style.display = "grid";
                                    console.log(jsonFour);
                                        /* Do not need line 139, 140 & If Statment because there is only one image but kept them incase project is changed to have more images */
                                        for (let d = 0; d < jsonFour.data.length; d++) {
                                            const imgFour = jsonFour.data[d];
                                            if (imgFour.images.downsized.url) {
                                                const imgElemFour = $('<img>')
                                                    .attr('src', imgFour.images.downsized.url);
                                                const imgContainerFour = $('<div>')
                                                    /* For CSS to style gif */
							                         .addClass('gifFour');
                                                imgContainerFour.append(imgElemFour);
                                                $('#gifsAdverb').append(imgContainerFour);
                                            }
                                        }
                        });
        };
    });
    
    const InputOne = document.getElementById("queryOne");
    const InputTwo = document.getElementById("queryTwo");
    const InputThree = document.getElementById("queryThree");
    const InputFour = document.getElementById("queryFour");
    
    /*
    ** For Question 5 and Gif 5
    */
    const images = [
        "https://media.giphy.com/media/9Y6n9TR7U07ew/giphy.gif",
        "https://media.giphy.com/media/Xtij9YYM3NLYk/giphy.gif",
        "https://media.giphy.com/media/xTeWOVI8shjIDTq9Yk/giphy.gif",
        "https://media.giphy.com/media/TydZAW0DVCbGE/giphy.gif",
        "https://media.giphy.com/media/3ofSBoGaRAsrGTbb56/giphy.gif",
        "https://media.giphy.com/media/P0IAxxZGYjfxu/giphy.gif"
    ];
    const captions = [
        "Happiness", 
        "Anger", 
        "Surprise",
        "Sadness", 
        "Fear", 
        "Disgust"
    ];
    const container = document.getElementById("imgTwo");
    /* Loop for Images and captions */
    for (let i = 0; i < 6; i++) {
        const imgContainer = document.createElement('div');
        const img = new Image();
        img.src = images[i];
        img.id = "imgTwo"+i;
        imgContainer.appendChild(img);
        const caption = document.createElement('article');
        caption.classList.add("captions");
        caption.textContent = captions[i];
        imgContainer.appendChild(caption);
        container.appendChild(imgContainer);
    };
    
    /* For clickable Happiness images */
    document.getElementById("imgTwo0").onclick = function() {
        document.getElementById('clickTwo').style.display = "none";
        document.getElementById('endResultOne').style.display = "grid";
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif')";
        /* For message to show on last page */
        const message = document.createElement("article");
        message.textContent = " While "
                            + InputOne.value
                            + " hates "
                            + InputTwo.value
                            + ", he/she/it enjoys "
                            + InputThree.value
                            + " and treasures "
                            + InputFour.value
                            + ". ";
         endText.appendChild(message);
    };
    /* For clickable Anger images */
    document.getElementById("imgTwo1").onclick = function() {
        document.getElementById('clickTwo').style.display = "none";
        document.getElementById('endResultOne').style.display = "grid";
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/3oz8xDp5mAEOAZXEPe/giphy.gif')";
        /* For message to show on last page */
        const message = document.createElement("article");
        message.textContent = " While "
                            + InputOne.value
                            + " hates "
                            + InputTwo.value
                            + ", he/she/it enjoys "
                            + InputThree.value
                            + " and treasures "
                            + InputFour.value
                            + ". ";
         endText.appendChild(message);
    };
    /* For clickable Surprise images */
    document.getElementById("imgTwo2").onclick = function() {
        document.getElementById('clickTwo').style.display = "none";
        document.getElementById('endResultOne').style.display = "grid";
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/UJVED7GZPDr56/giphy.gif')";
        /* For message to show on last page */
        const message = document.createElement("article");
        message.textContent = " While "
                            + InputOne.value
                            + " hates "
                            + InputTwo.value
                            + ", he/she/it enjoys "
                            + InputThree.value
                            + " and treasures "
                            + InputFour.value
                            + ". ";
         endText.appendChild(message);
    };
    /* For clickable Sadnes images */
    document.getElementById("imgTwo3").onclick = function() {
        document.getElementById('clickTwo').style.display = "none";
        document.getElementById('endResultOne').style.display = "grid";
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/26AHMBTzc1qJgFfDW/giphy.gif')";
        /* For message to show on last page */
        const message = document.createElement("article");
        message.textContent = " While "
                            + InputOne.value
                            + " hates "
                            + InputTwo.value
                            + ", he/she/it enjoys "
                            + InputThree.value
                            + " and treasures "
                            + InputFour.value
                            + ". ";
         endText.appendChild(message);
    };
    /* For clickable Fear images */
    document.getElementById("imgTwo4").onclick = function() {
        document.getElementById('clickTwo').style.display = "none";
        document.getElementById('endResultOne').style.display = "grid";
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/26n6HRgR5KXmKH3yM/giphy.gif')";
        /* For message to show on last page */
        const message = document.createElement("article");
        message.textContent = " While "
                            + InputOne.value
                            + " hates "
                            + InputTwo.value
                            + ", he/she/it enjoys "
                            + InputThree.value
                            + " and treasures "
                            + InputFour.value
                            + ". ";
         endText.appendChild(message);
    };
    /* For clickable Disgust images */
    document.getElementById("imgTwo5").onclick = function() {
        document.getElementById('clickTwo').style.display = "none";
        document.getElementById('endResultOne').style.display = "grid";
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/lTpw6QDGkLfDa/giphy.gif')";
        /* For message to show on last page */
        const message = document.createElement("article");
        message.textContent = " While "
                            + InputOne.value
                            + " hates "
                            + InputTwo.value
                            + ", he/she/it enjoys "
                            + InputThree.value
                            + " and treasures "
                            + InputFour.value
                            + ". ";
        endText.appendChild(message);
    };
    
    /*
    ** Button to restart quiz
    */
    $('#restart').click(function() {
        /* To go to next question (and div) */
        document.getElementById('partOne').style.display = "block";
        document.getElementById('endResultOne').style.display = "none";
        /* To reset the form */
        document.getElementById('queryOne').value = " ";
        document.getElementById('queryTwo').value = " ";
        document.getElementById('queryThree').value = " ";
        document.getElementById('queryFour').value = " ";
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/xT9IgN8YKRhByRBzMI/giphy.gif')";
    });
});
