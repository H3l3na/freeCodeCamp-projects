  window.onload=function(){
  var randomQuote;
  var randomA;
  function getQuote(){
	
	var quotes=["Going outside is highly overrated.", "You'd be amazed how much research you can get done when you have no life whatsoever.", "Perhaps it's impossible to wear an identity without becoming what you pretend to be.", "Ender Wiggin isn't a killer. He just wins—thoroughly.", "So the whole war is because we can't talk to each other.", "I need you to be clever, Bean. I need you to think of solutions to problems we haven't seen yet. I want you to try things that no one has ever tried because they're absolutely stupid.", "Yes, of course duct tape works in a near-vacuum. Duct tape works anywhere. Duct tape is magic and should be worshiped.", "Maybe I'll post a consumer review. 'Brought product to surface of Mars. It stopped working. 0/10.'", "As with most of life's problems, this one can be solved by a box of pure radiation.", "It's true, you know. In space, no one can hear you scream like a little girl.", "Once you get to naming your laptop, you know that you're really having a deep relationship with it.", "So close the book and go. The world is full of security systems. Hack one of them.", "I've always loved just learning stuff for its own sake. Just to be smarter about the world around me."];
	var authors=["-Ernest Cline, Ready Player One", "-Ernest Cline, Ready Player One", "-Orson Scott Card, Ender's Game", "-Orson Scott Card, Ender's Game", "-Orson Scott Card, Ender's Game", "-Orson Scott Card, Ender's Game", "Andy Weir, The Martian", "-Andy Weir, The Martian", "-Andy Weir, The Martian", "-Andy Weir, The Martian", "-Cory Doctorow, Little Brother", "-Cory Doctorow, Little Brother", "-Cory Doctorow, Little Brother"];
	var random=Math.floor(Math.random()*quotes.length);
	randomQuote=quotes[random];
	 randomA=authors[random];
	$(".q").text(randomQuote);
	$(".a").text(randomA);
  }
  $("#newQuote").on('click',function(){
	getQuote();
  });
  
   $('.twitter-share-button').on('click', function() {
    
      window.open('https://twitter.com/intent/tweet?text='+randomQuote + ' ' + randomA);
    
  });
  
  };
  