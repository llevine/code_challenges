// ==============================
//       Dramatis Personae
// ==============================

var hobbits = [
"Frodo Baggins",
"Samwise 'Sam' Gamgee",
"Meriadoc 'Merry' Brandybuck",
"Peregrin 'Pippin' Took"
];

var buddies = [
"Gandalf the Grey",
"Legolas",
"Gimli",
"Strider",
"Boromir"
];

var baddies = [
"Sauron",
"Saruman",
"The Uruk-hai",
"Orcs"
];

var lands = [
"Shire",
"Rivendell",
"Mordor"
];

// ==============================
//           Chapters
// ==============================

var makeMiddleEarth = function() {
  console.log("/////////////////======================/////////////////");
  console.log("Making middle earth.");
  // create a section tag with an id of middle-earth
  $("body").append("<div id='middle-earth'></div>");
  // add each land as an article tag
  // assign the name of the land as the id of the corresponding article tag
  // inside each article tag include an h1 with the name of the land
  // append the section to the body
  console.log("all the lands are: " + lands);
  for (var i=0; i<lands.length; i++){
    $("#middle-earth").append("<article id=" + lands[i] + "><h1>" + lands[i] + "</h1></article>");
    console.log(lands[i] + " has been created.");
  };

  console.log("Middle earth has been created!");
  console.log("/////////////////======================/////////////////");
  $("#1").unbind("click");
  $("#1").hide();
};

var makeHobbits = function() {
  console.log("/////////////////======================/////////////////");
  console.log("Making the hobbits.");
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
  $("#Shire").append("<ul id='hobbits'></ul>");
  console.log("all the little hobbits are: " + hobbits);

  for (var i=0; i<hobbits.length; i++){
    console.log(hobbits[i] + " has been created.");
    $("#Shire ul").append("<li class='hobbit'>" + hobbits[i] + "</li>");
  };

  $(".hobbit").click(itWhispers);
  console.log("/////////////////======================/////////////////");
  $("#2").unbind("click");
  $("#2").hide();
};

var keepItSecretKeepItSafe = function() {
  console.log("/////////////////======================/////////////////");
  console.log("Keeping it secret; keeping it safe.");
  // create an empty div with an id of 'the-ring'
  // add the ring as a child of Frodo
  console.log("Frodo has the ring"); 
  $("li:contains('Frodo')").append("<div id='the-ring'></div>");

  console.log("/////////////////======================/////////////////");
  $("#3").unbind("click");
  $("#3").hide();
};

var makeBaddies = function() {
  console.log("/////////////////======================/////////////////");
  console.log("Making baddies.");
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
  $("#Mordor").append("<ul id='baddies'></ul>");

  console.log("Here come the baddies: " + baddies);
  for (var i=0; i<baddies.length; i++){
    console.log(baddies[i] + " is now in Mordor");
    $("#Mordor ul").append("<li class='baddy'>" + baddies[i] + "</li>");
  };

  console.log("/////////////////======================/////////////////");
  $("#4").unbind("click");
  $("#4").hide();
};

var makeBuddies = function() {
  console.log("/////////////////======================/////////////////");
  console.log("Making buddies.");
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
  
  $("<aside></aside>").insertAfter("#Mordor");
  $("#Mordor").next().append("<ul id='buddies'></ul>");

  console.log("Here come the buddies: " + buddies);
  for (var i=0; i<buddies.length; i++){
    console.log(buddies[i] + " is now below mordor");
    $("#buddies").append("<li class='buddy'>" + buddies[i] + "</li>");
  };


  console.log("/////////////////======================/////////////////");
  $("#5").unbind("click");
  $("#5").hide();
};

var leaveTheShire = function() {
  console.log("/////////////////======================/////////////////");
  console.log("Leaving the shire.");
  // grab the hobbits and move them to Rivendell

  $("#hobbits").appendTo("#Rivendell");

  console.log("/////////////////======================/////////////////");
  $("#6").unbind("click");
  $("#6").hide();
};

var beautifulStranger = function() {
  console.log("/////////////////======================/////////////////");
  console.log("Strider is no longer a stranger.");
  // change the buddy 'Strider' textnode to "Aragorn"

  $("li:contains('Strider')").text("Aragorn");

  console.log("/////////////////======================/////////////////");
  $("#7").unbind("click");
  $("#7").hide();
};

var forgeTheFellowShip = function() {
  console.log("/////////////////======================/////////////////");
  console.log("Forging the fellowship.");
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  $("#Rivendell").append("<div id='the-fellowship'><h1>The Fellowship</h1></div>");

  console.log("The hobbits are joining the fellowship: " + hobbits);
  for (var i=0; i<$(".hobbit").length; i++){
    alert($("ul .hobbit:first").text() + " joined the fellowship.");
    $("ul .hobbit:first").appendTo($("#the-fellowship"));
  };

  console.log("The buddies are joining the fellowship: " + buddies);
  for (var x=0; x<$(".buddy").length; x++){
    alert($("ul .buddy:first").text() + " joined the fellowship.");
    $("ul .buddy:first").appendTo($("#the-fellowship"));
  };

  console.log("/////////////////======================/////////////////");
  $("#8").unbind("click");
  $("#8").hide();
};

var theBalrog = function() {
  console.log("/////////////////======================/////////////////");
  console.log("Gandalf faught the Balrog and is now Gandalf the white!");
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css, add a css rule to make elements of the class "the-white"
  // have a white background and a grey border

  $("li:contains('Gandalf')").text("Gandalf the White").addClass("the-white");


  console.log("/////////////////======================/////////////////");
  $("#9").unbind("click");
  $("#9").hide();
};

var hornOfGondor = function() {
  console.log("/////////////////======================/////////////////");
  console.log("THE HORN OF GONDOR HAS BEEN BLOWN.");
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
  alert("THE HORN OF GONDOR HAS BEEN BLOWN");

  $("li:contains(Boromir)").css( "text-decoration", "line-through");  
  $("li:contains(Uruk-hai)").remove();  

  console.log("/////////////////======================/////////////////");
  $("#10").unbind("click");
  $("#10").hide();
};

var itsDangerousToGoAlone = function(){
  console.log("/////////////////======================/////////////////");
  console.log("It's too dangerous to go alone.");
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

  $("li:contains('Frodo'), li:contains('Sam')").appendTo("#Mordor");
  $("<div id='mount-doom'></div>").appendTo("#Mordor");

  console.log("/////////////////======================/////////////////");
  $("#11").unbind("click");
  $("#11").hide();
};

var weWantsIt = function() {
  console.log("/////////////////======================/////////////////");
  console.log("Gollum.");
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

  console.log("enter gollum");
  $("<div id='gollum'></div>").appendTo("#Mordor");
  console.log("Gollum is stealing the ring!");
  $("#the-ring").appendTo("#gollum");
  alert("Gollum is entering mount doom");
  $("#gollum").appendTo("#mount-doom");

  console.log("/////////////////======================/////////////////");
  $("#12").unbind("click");
  $("#12").hide();
};

var thereAndBackAgain = function() {
  console.log("/////////////////======================/////////////////");
  console.log("there and back again.");
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

  $("#gollum, .baddy").remove();
  $(".hobbit").appendTo("#Shire");
  alert("The End");

  console.log("/////////////////======================/////////////////");
  $("#13").unbind("click");
  $("#13").hide();
};

// ==============================
//         Miscellaneous
// ==============================

var itWhispers = function() {
  // add a class "whispered" to the hobbit that was clicked
  // add a CSS rule in style.css for the class "whispered" to turn the text
  // color to "goldenrod"
  console.log(this);
  $(this).addClass("whispered");
  console.log("/////////////////======================/////////////////");
};

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  console.log("page has loaded");
  // Attach chapter event listeners here!
  $("#1").click(makeMiddleEarth);
  $("#2").click(makeHobbits);
  $("#3").click(keepItSecretKeepItSafe);
  $("#4").click(makeBaddies);
  $("#5").click(makeBuddies);
  $("#6").click(leaveTheShire);
  $("#7").click(beautifulStranger);
  $("#8").click(forgeTheFellowShip);
  $("#9").click(theBalrog);
  $("#10").click(hornOfGondor);
  $("#11").click(itsDangerousToGoAlone);
  $("#12").click(weWantsIt);
  $("#13").click(thereAndBackAgain);
};
