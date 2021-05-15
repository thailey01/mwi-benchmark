var objectOne = {
  Matt: "Johnson",
  Bart: "Paden",
  Ryan: "Doss",
  Jared: "Malcolm"
};
var objectTwo = {
  Matt: "Johnson",
  Bart: "Paden",
  Jordan: "Heigle",
  Tyler: "Viles"
};
var resultObject = new Object();


$(document).ready(function(){
  $("#list-generator").click(function(){
    if(Object.keys(resultObject).length != 0){
      alert("You have already removed duplicates!");
      return false;
    }
    resultObject = {
      ...objectOne,
      ...objectTwo
    };
    var html = "";
    for(person in resultObject){
      html += "<li>" + person + " " + resultObject[person] + "</li>";
    }
    $("#object-list").html(html);
    return false;
  });
});

function validateForm(){
  const form = document.forms[0];
  const {email, subject, message} = form.elements;
  var hasError = false;
  if(email.value == ""){
    document.getElementById("email-err").innerHTML = "Must use a valid email.";
    hasError = true;
  }else{
    document.getElementById("email-err").innerHTML = "";
  }
  if(subject.value == ""){
    document.getElementById("subject-err").innerHTML = "Subject is empty.";
    hasError = true;
  }else{
    document.getElementById("subject-err").innerHTML = "";
  }
  if(message.value == ""){
    document.getElementById("message-err").innerHTML = "Message is empty.";
    hasError = true;
  }else{
    document.getElementById("message-err").innerHTML = "";
  }
  if(hasError){
    return false;
  }
  return true;
}
