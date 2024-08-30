document.addEventListener("DOMContentLoaded", function() {

    //Seleccionar los elementos de la interfez
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const inputNombre = document.querySelector("#nombre");
    const formulario = document.querySelector("#formulario");

    //Asignar eventos
    inputEmail.addEventListener("blur", validar);
    inputAsunto.addEventListener("blur", validar);
    inputMensaje.addEventListener("blur", validar);
    inputNombre.addEventListener("blur", validar)

    function validar (e){
        console.log()
       if(e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
       }; 

       if(e.target.id === "email" && !validarEmail(e.target.value)){
            mostrarAlerta("Email invalido", e.target.parentElement);
            return;
       };
       
       limpiarAlerta( e.target.parentElement);
    };

    function mostrarAlerta (mensaje, referencia){
        limpiarAlerta(referencia);

        //Generar alerta en HTML
        const error = document.createElement("P");
        error.textContent = mensaje;
        error.classList.add("bg-red-600", "text-white", "p-2", "text-center", "rounded-lg");

        //Se agrega el mensaje de error al formulario
        referencia.appendChild(error);
    };

    //Se comprueba si ya existe una alerta
    function limpiarAlerta(referencia){
        const alerta = document.querySelector(".bg-red-600");
        if( alerta ){
            alerta.remove();
        };
    };

    function validarEmail (email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/  //Código que busca patrón en una cadena de texto
        const resultado = regex.test(email);
        return resultado;
    }
});