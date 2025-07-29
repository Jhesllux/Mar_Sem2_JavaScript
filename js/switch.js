function opcionesUdea() {
    let op, mensaje1, mensaje2, mensaje3, mensajedefault;

    mensaje1 = "Para obtener mas informacion sobre la Universidad de Antioquia, puedes visitar su sitio web oficial en: <a href='https://www.udea.edu.co/wps/portal/udea/web/inicio/acerca-udea'>Acerca de la UdeA</a>";
    mensaje2 = "Para presentar tu PQRS debes ingresar al siguiente link: <a href='https://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/pqrs'>PQRS UdeA</a>.";
    mensaje3 = "Te pondremos en contacto con un asesor via whatsapp (Chat-bot): <a href= 'https://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/canales-atencion/chat-bot'>Link</a>";
    mensajedefault = "Lo siento, su opcion no es correcta.";

    op = document.getElementById("opcion").value;

    switch (op) {
        case "1":
            document.getElementById("respuesta").innerHTML = mensaje1;
            break;
        case "2":
            document.getElementById("respuesta").innerHTML = mensaje2;
            break;
        case "3":
            document.getElementById("respuesta").innerHTML = mensaje3;
            break;
        default:
            document.getElementById("respuesta").innerHTML = mensajedefault;

    }
}