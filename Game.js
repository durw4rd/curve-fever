  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var unit = 5;
  //var ctx2 = c.getContext("2d");

  var keyCode = 39;
  var x = 10;
  var y = 250;
  //ctx.moveTo(x,y);

  //65 left    83 right   87 up     90 down
  var keyCode2 = 65;
  var x2 = 490;
  var y2 = 250;
  //ctx2.moveTo(x2,y2);

  var object = {x:x, y:y};
  var allObjects = [];
  allObjects.push(object);

  document.addEventListener('keydown', function(event) {
      if(event.keyCode == 37) {
          keyCode = event.keyCode;
      }
      else if(event.keyCode == 39) {
      keyCode = event.keyCode;
      }
    else if(event.keyCode == 38) {
      keyCode = event.keyCode;
      }
    else if(event.keyCode == 40) {
          keyCode = event.keyCode;
      }
    else {
      keyCode2 = event.keyCode;
    }
  });

  var startGame = setInterval(function() {
    ctx.beginPath();
    ctx.strokeStyle='#00cc00';
    ctx.moveTo(x,y);
    if(keyCode == 37) {
      x = x-unit;
      }
    else if(keyCode == 39) {
      x = x+unit;
    }
    else if(keyCode == 38) {
      y = y-unit;
    }
    else if(keyCode == 40) {
      y = y + unit;
    }
    ctx.lineTo(x,y);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle='#cc0000';
    ctx.moveTo(x2,y2);
    if(keyCode2 == 65) {
          x2 = x2-unit;
      }
      else if(keyCode2 == 83) {
      x2 = x2+unit;
      }
    else if(keyCode2 == 87) {
      y2 = y2-unit;
      }
    else if(keyCode2 == 90) {
          y2 = y2 + unit;
      }
    ctx.lineTo(x2,y2);
    ctx.stroke();

    var searchedObject = allObjects.filter(function ( searchedObject ) {
      return (searchedObject.x === x && searchedObject.y === y) || (searchedObject.x === x2 && searchedObject.y === y2);
    })[0];
    if(searchedObject != undefined){
      alert('Game over!');
      clearInterval(startGame);
    }

    if((x == 0) || (x == 500) || (y == 0) || (y == 500)){
        alert('Player 2 wins!');
        clearInterval(startGame);
    }

    if((x2 == 0) || (x2 == 500) || (y2 == 0) || (y2 == 500)){
      alert('Player 1 wins!');
      clearInterval(startGame);
    }

    var object = {x:x, y:y};
    allObjects.push(object);

    var object2 = {x:x2, y:y2};
    allObjects.push(object2);

    }, 100);
