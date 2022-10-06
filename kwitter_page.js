const firebaseConfig = {
      apiKey: "AIzaSyCMEq7vhI6RJeMXC-WUQyJY_4oWRuHp6Ng",
      authDomain: "project-93-9da77.firebaseapp.com",
      databaseURL: "https://project-93-9da77-default-rtdb.firebaseio.com",
      projectId: "project-93-9da77",
      storageBucket: "project-93-9da77.appspot.com",
      messagingSenderId: "1001016356089",
      appId: "1:1001016356089:web:e08b7c461be79907444628"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");



function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0 
      });

      document.getElementById("msg").value = " ";
}
function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4>" + name + "<img src = 'tick.png' class = 'user_tick'> </h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + "value = " + like + "onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like : " + like + "</span> </button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

