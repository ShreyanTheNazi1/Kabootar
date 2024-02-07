const firebaseConfig = {
      apiKey: "AIzaSyAEzHoX6HIAsVTVQZeNK_cRFZO22TUYaio",
      authDomain: "kabootar-forum-v2.firebaseapp.com",
      databaseURL: "https://kabootar-forum-v2-default-rtdb.firebaseio.com",
      projectId: "kabootar-forum-v2",
      storageBucket: "kabootar-forum-v2.appspot.com",
      messagingSenderId: "241875722305",
      appId: "1:241875722305:web:87d57c0147adfe9ec8a6c0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!" + "&#x1f426";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name: " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }