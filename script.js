function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      return false;
    }
    
    return true;
  }
  