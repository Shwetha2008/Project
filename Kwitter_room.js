const firebaseConfig = {
      apiKey: "AIzaSyCMEq7vhI6RJeMXC-WUQyJY_4oWRuHp6Ng",
      authDomain: "project-93-9da77.firebaseapp.com",
      databaseURL: "https://project-93-9da77-default-rtdb.firebaseio.com",
      projectId: "project-93-9da77",
      storageBucket: "project-93-9da77.appspot.com",
      messagingSenderId: "1001016356089",
      appId: "1:1001016356089:web:e08b7c461be79907444628"
    };

firebase.initializeApp(firebaseConfig); 

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name : " + Room_names);
      row = "<div class= 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}