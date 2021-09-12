window.onload = function onLoad() {
<<<<<<< Updated upstream
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
=======
  //tao grid
  gen(6,7);
>>>>>>> Stashed changes
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
  //nut nhan start
  const button = document.getElementById('button')
  button.addEventListener('click', () => {
    start();
  });
  // Kiem tra nguoi dung hien tai
  firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
  })
};
<<<<<<< Updated upstream
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
=======
//ham tao grid
function gen(numrow, numcol){
  for(let i = 1; i <= numrow; i++ ){
    $('#container1').append("<ul id='row-"+i+"' class='row'>");
    var $row = $('#row-'+i);
      for(let j = 1; j <= numcol; j++){
        count = i.toString() + j
        var square = "<li id='sq-"+count+"' class='square'> </li>";
        $row.append(square);
        document.querySelector('#sq-'+count).style.backgroundColor = "gray"
    }
  }
}
//ham setcolor tai vi tri x y
function setColor(x,y){
    var database = firebase.database();
    var old = database.ref('Robot/old');
    old.on('value', function(snapshot) {
      var childData = snapshot.val();   
      xy_old=childData;
      x_old= xy_old.slice(0,1);
      y_old= xy_old.slice(2,3);
    });
    if(x==x_old&&y>y_old){
      var j =(parseInt(y)-1).toString();
      document.querySelector('#sq-'+x+j).style.backgroundColor = "gray"
      document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
      document.querySelector('#sq-'+x+y).style.border="0.5em solid gray";
      xy_old=(x+0+y).toString();
      var database = firebase.database();
      database.ref('Robot/old').set(xy_old);
    }
    if(x==x_old&&y<y_old){
      var j =(parseInt(y)+1).toString();
      document.querySelector('#sq-'+x+j).style.backgroundColor = "gray"
      document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
      document.querySelector('#sq-'+x+y).style.border="0.5em solid gray";
      xy_old=(x+0+y).toString();
      var database = firebase.database();
      database.ref('Robot/old').set(xy_old);
    }
    if(y==y_old&&x>x_old){
      var j =(parseInt(x)-1).toString();
      document.querySelector('#sq-'+j+y).style.backgroundColor = "gray"
      document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
      document.querySelector('#sq-'+x+y).style.border="0.5em solid gray";
      xy_old=(x+0+y).toString();
      var database = firebase.database();
      database.ref('Robot/old').set(xy_old);
    }
    if(y==y_old&&x<x_old){
      var j =(parseInt(x)+1).toString();
      document.querySelector('#sq-'+j+y).style.backgroundColor = "gray"
      document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
      document.querySelector('#sq-'+x+y).style.border="0.5em solid gray";
      xy_old=(x+0+y).toString();
      var database = firebase.database();
      database.ref('Robot/old').set(xy_old);
    }
    if(y==y_old&&x==x_old){
      document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
    }
}
//ham gui data user len firebase
function start()  {
>>>>>>> Stashed changes
  var x = document.getElementById("input_x").value; // A String value
  var y = document.getElementById("input_y").value; // A String value
  var c = x + 0 + y;
  console.log(x);
  console.log(y);
  console.log(c);
  var database = firebase.database();
  database.ref('Position/user').set(c);
};
//ham logout
function logout(){
  firebase.auth().signOut()
};