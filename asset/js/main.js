var x_old=0;
var y_old=0;
window.onload = function onLoad() {
  //tao grid
  gen(6,7);
  var database = firebase.database();
  var position = database.ref('Position/robot');
  position.on('value', function (snapshot) {
    var childData = snapshot.val();
    pos = childData;
    var x = pos.slice(0, 1);
    var y = pos.slice(2, 3);
    setColor(x,y);
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