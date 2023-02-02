const { EmailJSResponseStatus } = require("emailjs-com");

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("to_email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,

  } ;

  const serviceID = "service_amr6cuo";
const templateID = "template_tbm2kny";

EmailJSResponseStatus.send(serviceID, templateID, params)
.then(response =>{
      document.getElementById("name").value = "";
      document.getElementById("to_email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(response);
      alert("Your message has been sent successfully");
})
.catch((err) => console.log(err));
}
