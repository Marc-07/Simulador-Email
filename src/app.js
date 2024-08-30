document.addEventListener("DOMContentLoaded", function() {

    //Se crea Objeto que mantiene los valores de los elementos
    const email = {
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    };

    //Seleccionar los elementos de la interfez
    const inputNombre = document.querySelector("#nombre");
    const inputEmail = document.querySelector("#email");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]')

    //Asignar eventos
    inputEmail.addEventListener("input", validar);
    inputAsunto.addEventListener("input", validar);
    inputMensaje.addEventListener("input", validar);
    inputNombre.addEventListener("input", validar)

    btnReset.addEventListener("click", function (e){
        e.preventDefault();

        //Reiniciar el objeto
        email.nombre = "";
        email.email = "";
        email.asunto = "";
        email.mensaje = "";

        formulario.reset();
        comprobarEmail();

    })

    function validar (e){

       if(e.target.value.trim() === ""){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = "";
            comprobarEmail();
            return;
       }; 

       if(e.target.id === "email" && !validarEmail(e.target.value)){
            mostrarAlerta("Email invalido", e.target.parentElement);
            email[e.target.name] = "";
            comprobarEmail();
            return;
       };
       
       limpiarAlerta( e.target.parentElement);

       //Asignar los Valores
       email[e.target.name] = e.target.value.trim().toLowerCase();

       //Comprobar el objeto Email
       comprobarEmail ();

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

    function comprobarEmail (){

       if(Object.values(email).includes("")){
            btnSubmit.classList.add("opacity-50");
            btnSubmit.disabled = true;
            return
        };

        btnSubmit.classList.remove("opacity-50");
        btnSubmit.disabled = false;
    };
});