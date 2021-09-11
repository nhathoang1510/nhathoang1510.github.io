window.onload = function onLoad() {
  gen(6, 7);
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
  position.on('value', function (snapshot) {
    var childData = snapshot.val();
    pos = childData;
    var x = pos.slice(0, 1);
    var y = pos.slice(2, 3);
    console.log(pos);
    console.log(x);
    console.log(y);
    var cc = x + y;
    console.log(cc);
    // changeSquareColor(cc, 3);
    var robot = "<li id='sq-" + cc + "' class='robot'></li>";
    $('#sq-' + cc).remove();
    yc = (parseInt(y) + 1).toString();
    console.log(yc);
    if (yc > 7) {
      yc = (parseInt(yc) - 2).toString();
      console.log(yc);
      $('#sq-' + x + yc).after(robot);
    } else {
      $('#sq-' + x + yc).before(robot);
    }
    

  });
  const button = document.getElementById('button')
  button.addEventListener('click', () => {
    start();
  })
};
const colors = [
  'black',
  'blue',
  'cyan',
  'green',
  'magenta',
  'red',
  'yellow',
  'orange',
  'white',
  'gray'
];
const numColors = colors.length - 1;
function gen(numrow, numcol) {
  for (let i = 1; i <= numrow; i++) {
    $('#container1').append("<ul id='row-" + i + "' class='row'>");
    var $row = $('#row-' + i);
    for (let j = 1; j <= numcol; j++) {
      count = i.toString() + j
      var square = "<li id='sq-" + count + "' class='square'></li>";
      $row.append(square);
      var cc = '#sq-' + count;
      colorId = 9;
      changeSquareColor(cc, colorId);
    }
  }
}
function changeSquareColor(square, newColorId) {
  var newColor = colors[newColorId];

  $(square).data('color', newColorId);
  //$(square).html('<span>'+newColor+'</span>');
  $(square).css('background-color', newColor);
};
function start() {
  var x = document.getElementById("input_x").value; // A String value
  var y = document.getElementById("input_y").value; // A String value
  var c = x + 0 + y;
  console.log(x);
  console.log(y);
  console.log(c);
  var database = firebase.database();
  database.ref('Position/user').set(c);
};
