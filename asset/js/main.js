var x_old=0;
var y_old=0;
window.onload = function onLoad() {
  gen(6,7);
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
  var position = database.ref('Robot/robot');
  position.on('value', function(snapshot) {
    var childData = snapshot.val();
    pos=childData;
    var x= pos.slice(0,1);
    var y= pos.slice(2,3);
    setColor(x,y);
  });
  const button = document.getElementById('button')
    button.addEventListener('click', () => {
    start();
  })
};
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
function start()  {
  var x = document.getElementById("input_x").value; // A String value
  var y = document.getElementById("input_y").value; // A String value
  var c=x+0+y;
  console.log(x);
  console.log(y);
  console.log(c);
  var database = firebase.database();
  database.ref('User/user').set(c);
};
