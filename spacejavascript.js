$.ajax({
  "url":"https://www.kimonolabs.com/api/5err2aim?apikey=A9Gep5I6DrElZ4g8Q931nbNpbfQXTVMn",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data
  

  var collection = response.results.collection1;
    for (var i = 0; i < 17; i++){   
    // Traverses through every element in the entire collection 

      var hashtag = collection[i].trendinghashtags.text;
      // console.log(collection[i]);
      console.log(hashtag);

      var j = i+1;


      $('.text' + j.toString()).append('<p>' + hashtag + '</p>');
        
        // $(".list-group").append('<li class="list-group-item">' + collection[i].property1.text + '</li>');
        // // adds the text and the links from the first property into the list
      }
  
  }

});

function AnimateIt() {
    var theDiv = $(".text1"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt);
}

AnimateIt();

function AnimateIt2() {
    var theDiv = $(".text2"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt2);
}

AnimateIt2();

function AnimateIt3() {
    var theDiv = $(".text3"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt3);
}

AnimateIt3();


function AnimateIt4() {
    var theDiv = $(".text4"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt4);
}

AnimateIt4();

function AnimateIt5() {
    var theDiv = $(".text5"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt5);
}

AnimateIt5();

function AnimateIt6() {
    var theDiv = $(".text6"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt6);
}

AnimateIt6();

function AnimateIt7() {
    var theDiv = $(".text7"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt7);
}

AnimateIt7();

function AnimateIt8() {
    var theDiv = $(".text8"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt8);
}

AnimateIt8();

function AnimateIt8() {
    var theDiv = $(".text8"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt8);
}

AnimateIt8();

function AnimateIt9() {
    var theDiv = $(".text9"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt9);
}

AnimateIt9();

function AnimateIt10() {
    var theDiv = $(".text10"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt10);
}

AnimateIt10();

function AnimateIt11() {
    var theDiv = $(".text11"),
        theContainer = $(".container"),
        maxLeft = theContainer.width() - theDiv.width(),
        maxTop = theContainer.height() - theDiv.height(),
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop),
        degrees = 100;//degrees + Math.floor(Math.random() * 10);
    
    if (theDiv.position().left < leftPos) {
        theDiv.removeClass("left").addClass("right");
    } else {
        theDiv.removeClass("right").addClass("left");
    }
        
    theDiv.animate({
        "left": leftPos,
        "top": topPos,
    }, 10000, AnimateIt8);
}

AnimateIt11();