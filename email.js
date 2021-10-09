function enviar(){
    var temPara={
    
        nombre:document.getElementById("inputName").value,
        servicio:document.getElementById("inputService").value,
        cliente:document.getElementById("inputEmail").value,
        telefono:document.getElementById("inputTelefono").value,
        num_gente:document.getElementById("inputPersons").value,
        fecha:document.getElementById("inputDate").value,
        hora:document.getElementById("inputTime").value,
        m:document.getElementById("textAreaMessage").value,
        
        
    };
    emailjs.send('service_5dpxtmh','template_x2axngi',temPara);
    

}