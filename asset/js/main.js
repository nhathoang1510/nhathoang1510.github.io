
window.onload = function onLoad() {
  createGrid(2, 4,'#container1');
  createGrid(2, 4,'#container2');
  var firebaseConfig = {
    apiKey: "AIzaSyAULD_5XOVsrub8anXNRIQkPdOEX8Z1Qjw",
    authDomain: "project2-b7d1e.firebaseapp.com",
    databaseURL: "https://project2-b7d1e-default-rtdb.firebaseio.com",
    projectId: "project2-b7d1e",
    storageBucket: "project2-b7d1e.appspot.com",
    messagingSenderId: "732028616880",
    appId: "1:732028616880:web:b826bd73c949e95b56fb75",
    measurementId: "G-VMMDLQ5B39"
    };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var position = database.ref('Position/robot');
  position.on('value', function(snapshot) {
    var childData = snapshot.val();
    pos=childData;
    var x= pos.slice(0,1);
    var y= pos.slice(2,3);
    console.log(pos);
    console.log(x);
    console.log(y);
    var cc= "#sq-"+x+y;
    console.log(cc);
    changeSquareColor(cc, 3);
  });
  const button = document.getElementById('button')
    button.addEventListener('click', () => {
    start();
  })
// $(document).ready(function() {

// });
//   $('.square').on('mouseenter', function(event) {
//     var square = event.target;
//     var colorId = $(square).data('color');

//     if (colorId || colorId === 0) {
//       var color = colors[colorId];
    
//       $(square).html('<span>'+color+'</span>');
//     }
//   });

//   $('.square').on('mouseleave', function(event) {
//     var square = event.target;
  
//     $(square).html('');
//   });

//   $('.square').on('click', function(event) {
//     var square = event.currentTarget;
//     var colorId = $(square).data('color');

//     if (colorId === numColors) {
//       changeSquareColor(square, 0);
//     } else {
//       var newColorId = colorId+1;
    
//       changeSquareColor(square, newColorId);
//     }
//   });
};
const colors = [
  'black', 
  'blue',
  'cyan', 
  'green', 
  'magenta', 
  'red', 
  'yellow',
  'orange'
];
const numColors = colors.length-1;
function createGrid(numRows, numSquares,id) {
  for (var i=0; i<numRows; i++) {
    if(id=='#container1'){
        $(id).append("<ul id='row-"+i+1+"' class='row'>");
    }
    else{
        $(id).append("<ul id='row-"+i+2+"' class='row'>");
    }

    if (i===(numRows-1)) {
      createSquares(numRows, numSquares,id);
    };
  }
}
function createSquares(numRows, numSquares,id2) {
  var count = 0;
  for (var i=0; i<numRows; i++) {
    if(id2=='#container1'){
        var $row = $('#row-'+i+1);
    }
    else{
        var $row = $('#row-'+i+2);
    }
    for (var j=0; j<numSquares; j++) {
        if(id2=='#container1'){
            var square = "<li id='sq-"+count+1+"' class='square'></li>";
            $row.append(square);
        }
        else{
            var square = "<li id='sq-"+count+2+"' class='square'></li>";
            $row.append(square);
        }
        // var square = "<li id='sq-"+count+"' class='square'></li>";
        // $row.append(square);
        count++;
        if (j===(numSquares-1)) {
            colorSquares(count,id2);
        }
    }
  }
}
function colorSquares(numSquares,id2) {
  var colorId = 0;
  
  for (var i=0; i<numSquares; i++) {
    //var square = '#sq-'+i;
    if(id2=='#container1'){
        var square = '#sq-'+i+1;
    }
    else{
        var square = '#sq-'+i+2;
    }
    colorId=5;
    changeSquareColor(square, colorId);
    
    
    // if (colorId < numColors) {
    //   changeSquareColor(square, colorId);
    //   colorId++;
    // } else {
    //   changeSquareColor(square, colorId);
    //   colorId = 0;
    // }
  }
}
function changeSquareColor(square, newColorId) {
  var newColor = colors[newColorId];
  
  $(square).data('color', newColorId);
  $(square).html('<span>'+newColor+'</span>');
  $(square).css('background-color', newColor);
};
function start()  {
  var x = document.getElementById("input_x").value; // A String value
  var y = document.getElementById("input_y").value; // A String value
  var c=x+0+y;
  console.log(x);
  console.log(y);
  console.log(c);
  var database = firebase.database();
  database.ref('Position/user').set(c);
};
