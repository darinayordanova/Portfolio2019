var config = {
    apiKey: "AIzaSyBZeoFQT4xeF3YzgvcIYDRz4bIubpem0Dw",
    authDomain: "portfolio-contactme-c2a27.firebaseapp.com",
    databaseURL: "https://portfolio-contactme-c2a27.firebaseio.com",
    projectId: "portfolio-contactme-c2a27",
    storageBucket: "portfolio-contactme-c2a27.appspot.com",
    messagingSenderId: "249541851381"
  };
  firebase.initializeApp(config);

  var messageRef = firebase.database().ref('messages')

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var name=getInputVal("name");
    var company=getInputVal("company");
    var email=getInputVal("email");
    var phone=getInputVal("phone");
    var message=getInputVal("message");
    if(name!="" && company!="" && email!="" && phone!="" && message!=""){
    saveMessage(name, company, email, phone, message);

    $('#messages').removeClass('hide').addClass('alert alert-success alert-dismissible').slideDown().show();
     $('#messages_content').html('Your message was sent');
                $('#modal').modal('show');
                var element = document.getElementById(messages);
               setTimeout(function(){$('#messages').fadeOut(); $('#messages').removeClass('alert-success')}, 2500);
                document.getElementById('contactForm').reset();
                
}
    else{
        $('#messages').removeClass('hide').addClass('alert alert-danger alert-dismissible').slideDown().show();
                $('#messages_content').html('Please enter all neded information!');
                $('#modal').modal('show');
                var element = document.getElementById(messages);
                setTimeout(function(){$('#messages').fadeOut();$('#messages').removeClass('alert-danger')}, 2500);
                
    }

    
}



function getInputVal(id){
    return document.getElementById(id).value;
    
}

function saveMessage(name, company, email, phone, message){
    var newMessageRef=messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message:message
    });
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}