//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBuxieqt7jQsvJvXPdnYYKc9WuDRK8kgzk",
      authDomain: "kwitter-aceae.firebaseapp.com",
      databaseURL: "https://kwitter-aceae-default-rtdb.firebaseio.com",
      projectId: "kwitter-aceae",
      storageBucket: "kwitter-aceae.appspot.com",
      messagingSenderId: "474275910981",
      appId: "1:474275910981:web:f446aa9f645c53bd959a2c",
      measurementId: "G-G7VT22L30J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
msg:msg,
like:0
      });
}