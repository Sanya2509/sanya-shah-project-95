var firebaseConfig = {
  apiKey: "AIzaSyCSnmqCjzMgm7sHYDl_Rej_dg5JKJer7hI",
  authDomain: "sanya-shah-bbb5e.firebaseapp.com",
  databaseURL: "https://sanya-shah-bbb5e-default-rtdb.firebaseio.com",
  projectId: "sanya-shah-bbb5e",
  storageBucket: "sanya-shah-bbb5e.appspot.com",
  messagingSenderId: "1086766988493",
  appId: "1:1086766988493:web:5af35750d3060bdcb37d84",
  measurementId: "G-R8GJELQ16Q"
};


firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
