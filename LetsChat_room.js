const firebaseConfig = {
    apiKey: "AIzaSyBwsdybgAyqIregJZxi28acCv8JkOwH81o",
    authDomain: "letschatapp-6267c.firebaseapp.com",
    databaseURL: "https://letschatapp-6267c-default-rtdb.firebaseio.com",
    projectId: "letschatapp-6267c",
    storageBucket: "letschatapp-6267c.appspot.com",
    messagingSenderId: "971622852260",
    appId: "1:971622852260:web:a74a730635027e6f206831"
  };

  firebase.initializeApp(firebaseConfig); 
    user_name = localStorage.getItem("user_name"); 
    room_name = localStorage.getItem("room_name");

    document.getElementById("user_name").innerHTML = user_name; 

  function getData() 
{ 
firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey; console.log("Room Name - " + Room_names); 
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row; });
       });
       } 
       getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "LetsChat_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "LetsChat_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}