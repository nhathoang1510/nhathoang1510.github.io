var x_old=0;
var y_old=0;
window.onload = function onLoad() {
  //tao grid
  gen(6,7);
  var database = firebase.database();
  var position = database.ref('Robot/robot');
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
  //
  userdata();
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
        //document.querySelector('#sq-'+count).style.backgroundColor = "gray"
        // dieu khien gen ra cac o ke hang
        if (i >= 2 && i <= 5 && j >= 2 && j <= 3 || i >= 2 && i <= 5 && j >= 5 && j <= 6) { 
          document.querySelector('#sq-'+count).style.backgroundColor = "red"
        } else {
          document.querySelector('#sq-'+count).style.backgroundColor = "gray"
        }
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
      if (x >= 2 && x <= 5 && j >= 2 && j <= 3 || x >= 2 && x <= 5 && j >= 5 && j <= 6) { 
        document.querySelector('#sq-'+x+j).style.backgroundColor = "red"
        document.querySelector('#sq-'+x+j).style.border="0em solid red";
      } else {
        document.querySelector('#sq-'+x+j).style.backgroundColor = "gray"
      }

      if (x >= 2 && x <= 5 && y >= 2 && y <= 3 || x >= 2 && x <= 5 && y >= 5 && y <= 6) { 
        document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
        document.querySelector('#sq-'+x+y).style.border="0.5em solid red";
      } else {
        document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
        document.querySelector('#sq-'+x+y).style.border="0.5em solid gray";
      }
      xy_old=(x+0+y).toString();
      var database = firebase.database();
      database.ref('Robot/old').set(xy_old);
    }
    if(x==x_old&&y<y_old){
      var j =(parseInt(y)+1).toString();
      if (x >= 2 && x <= 5 && j >= 2 && j <= 3 || x >= 2 && x <= 5 && j >= 5 && j <= 6) { 
        document.querySelector('#sq-'+x+j).style.backgroundColor = "red"
        document.querySelector('#sq-'+x+j).style.border="0em solid red";
      } else {
        document.querySelector('#sq-'+x+j).style.backgroundColor = "gray"
      }
      if (x >= 2 && x <= 5 && y >= 2 && y <= 3 || x >= 2 && x <= 5 && y >= 5 && y <= 6) { 
        document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
        document.querySelector('#sq-'+x+y).style.border="0.5em solid red";
      } else {
        document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
        document.querySelector('#sq-'+x+y).style.border="0.5em solid gray";
      }
      xy_old=(x+0+y).toString();
      var database = firebase.database();
      database.ref('Robot/old').set(xy_old);
    }
    if(y==y_old&&x>x_old){
      var j =(parseInt(x)-1).toString();
      if (j >= 2 && j <= 5 && y >= 2 && y <= 3 || j >= 2 && j <= 5 && y >= 5 && y <= 6) { 
        document.querySelector('#sq-'+j+y).style.backgroundColor = "red"
        document.querySelector('#sq-'+j+y).style.border="0em solid red";
      } else {
        document.querySelector('#sq-'+j+y).style.backgroundColor = "gray"
      }

      if (x >= 2 && x <= 5 && y >= 2 && y <= 3 || x >= 2 && x <= 5 && y >= 5 && y <= 6) { 
        document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
        document.querySelector('#sq-'+x+y).style.border="0.5em solid red";
      } else {
        document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
        document.querySelector('#sq-'+x+y).style.border="0.5em solid gray";
      }
      xy_old=(x+0+y).toString();
      var database = firebase.database();
      database.ref('Robot/old').set(xy_old);
    }
    if(y==y_old&&x<x_old){
      var j =(parseInt(x)+1).toString();
      if (j >= 2 && j <= 5 && y >= 2 && y <= 3 || j >= 2 && j <= 5 && y >= 5 && y <= 6) { 
        document.querySelector('#sq-'+j+y).style.backgroundColor = "red"
        document.querySelector('#sq-'+j+y).style.border="0em solid red";
      } else {
        document.querySelector('#sq-'+j+y).style.backgroundColor = "gray"
      }

      if (x >= 2 && x <= 5 && y >= 2 && y <= 3 || x >= 2 && x <= 5 && y >= 5 && y <= 6) { 
        document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
        document.querySelector('#sq-'+x+y).style.border="0.5em solid red";
      } else {
        document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
        document.querySelector('#sq-'+x+y).style.border="0.5em solid gray";
      }
      xy_old=(x+0+y).toString();
      var database = firebase.database();
      database.ref('Robot/old').set(xy_old);
    }
    if(y==y_old&&x==x_old){
      document.querySelector('#sq-'+x+y).style.backgroundColor = "green"
    }
}
//ham lay user dataa
function userdata(){
  var database = firebase.database();
  var usr = database.ref('User/user');
  usr.on('value', function(snapshot) {
    var childData = snapshot.val();   
    user=childData;
    x_user= user.slice(0,1);
    y_user= user.slice(2,3);
    document.querySelector('#sq-'+x_user+y_user).style.backgroundColor = "yellow"
    database.ref('User/old').set(user);
  });
}
//ham gui data user len firebase
function start()  {
  var x = document.getElementById("input_x").value; // A String value
  var y = document.getElementById("input_y").value; // A String value
  var c = x + 0 + y;
  var database = firebase.database();
  database.ref('User/user').set(c);
};
//ham logout
function logout(){
  firebase.auth().signOut()
};