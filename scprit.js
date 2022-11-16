$('#fileup').change(function(){
    var res=$('#fileup').val();
    var arr = res.split("\\");
    var filename=arr.slice(-1)[0];
    filextension=filename.split(".");
    filext="."+filextension.slice(-1)[0];
    valid=[".jpg",".png",".jpeg",".bmp"];
    if (valid.indexOf(filext.toLowerCase())==-1){
        alert("Invalid File Format");
        document.getElementById('fileup').value = "";
    }
});


function ValidateEmail() {
    var input = document.getElementById('email');
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (input.value.match(validRegex)) {
        alert("Valid email address!");

    } else {
  
      alert("Invalid email address!");
  
    }
  
  }