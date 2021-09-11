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
  var position = database.ref('Position/robot');
  position.on('value', function(snapshot) {
    var childData = snapshot.val();
    pos=childData;
    var x= pos.slice(0,1);
    var y= pos.slice(2,3);
    console.log(pos);
    console.log(x);
    console.log(y);
    var cc= x+y;
    console.log(cc);
    setColor(cc,x,y);

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
function setColor(position,x,y){
    var database = firebase.database();
    var old = database.ref('Position/olddata');
    old.on('value', function(snapshot) {
      var childData = snapshot.val();
      old=childData;
      x_old= old.slice(0,1);
      y_old= old.slice(2,3);
    });
    if(x>x_old){
      var j =(parseInt(position)-1).toString();
      console.log(j);
      document.querySelector('#sq-'+j).style.backgroundColor = "gray"
      document.querySelector('#sq-'+position).style.backgroundColor = "green"
      old =data;
      var database = firebase.database();
      database.ref('Position/olddata').set(old);
    }
    if(data<old){
      var k =(parseInt(position)+1).toString();
      console.log(k);
      document.querySelector('#sq-'+k).style.backgroundColor = "gray"
      document.querySelector('#sq-'+position).style.backgroundColor = "green"
      old =data;
      var database = firebase.database();
      database.ref('Position/olddata').set(old);
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
  database.ref('Position/user').set(c);
};
