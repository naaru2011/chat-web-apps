var firebaseConfig = {
  apiKey: "AIzaSyDuF2nm0QxnC4gTEdwaGn9mRcj_EkYNJmg",
  authDomain: "kwitter-121ff.firebaseapp.com",
  databaseURL: "https://kwitter-121ff-default-rtdb.firebaseio.com",
  projectId: "kwitter-121ff",
  storageBucket: "kwitter-121ff.appspot.com",
  messagingSenderId: "398891535017",
  appId: "1:398891535017:web:fb50309e34d21fec5bf7b8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
 
  if (user_name == "") {
    window.alert("Username cannot be empty!");
  } else {
    

    localStorage.setItem("user_name", user_name);
    
      window.location = "Kwitter_room.html";
  }

}
