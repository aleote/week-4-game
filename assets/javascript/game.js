


var targetNumber = Math.floor(Math.random() * 101+19);

  $("#number-to-guess").text(targetNumber);

  var counter = 0;

  var wins = 0;

  var losses = 0; 

  // Now for the hard part. Creating multiple crystals each with their own unique number value.
 // here starts what I am trying out! 



var blueCrystal = $("#crystal1").attr("data-crystalvalue", randomNumber1);
var	redCrystal =  $("#crystal2").attr("data-crystalvalue", randomNumber2);
var	purpleCrystal = $("#crystal3").attr("data-crystalvalue", randomNumber3);
var	whiteCrystal = $("#crystal4").attr("data-crystalvalue", randomNumber4);

var randomNumber1 = Math.floor(Math.random() * 11+1);
var randomNumber2= Math.floor(Math.random() * 11+1);
var randomNumber3 =  Math.floor(Math.random() * 11+1);
var randomNumber4 = Math.floor(Math.random() * 11+1);
  
	

	blueCrystal.attr("data-crystalvalue", randomNumber1);
	redCrystal.attr("data-crystalvalue", randomNumber2); 
	purpleCrystal.attr("data-crystalvalue", randomNumber3); 
	whiteCrystal.attr("data-crystalvalue", randomNumber4); 

	console.log(blueCrystal.attr('data-crystalvalue'));
	console.log(blueCrystal);



  // We begin by expanding our array to include four options.
  // var numberOptions = [1, 2, 3, 4];

  // // Next we create a for loop to create crystals for every numberOption.
  // for (var i = 0; i < numberOptions.length; i++) {

  //   // For each iteration, we will create an imageCrystal
  //   var imageCrystal = $("<img>");

  //   // First each crystal will be given the class ".crystal-image".
  //   // This will allow the CSS to take effect.
  //   imageCrystal.addClass("crystal-image");

  //   // Each imageCrystal will be given a src link to the crystal image
  //   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

  //   // Each imageCrystal will be given a data attribute called data-crystalValue.
  //   // This data attribute will be set equal to the array value.
  //   imageCrystal.attr("data-crystalvalue", randomNumber);  

  //   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  //   $("#crystals").append(imageCrystal);
  // }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

  	function reset (){
  		counter = 0;
  	}

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    document.querySelector("#totalScore").innerHTML = "New score: " + counter;

    if (counter === targetNumber) {
      wins++;
      document.querySelector("#wins").innerHTML = "Wins:" + wins;
      alert("you win!");
      reset();  
       }

    else if (counter >= targetNumber) {
    	losses++;
    	document.querySelector("#losses").innerHTML = "Losses:" + losses;
    	alert("You lose!!");
    	reset ();
    }

  });
















