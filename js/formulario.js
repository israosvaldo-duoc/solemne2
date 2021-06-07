$(document).ready(function(){
    console.log("jQuery Funcionando")

    $("#formularioContacto").validate({
        rules: {
            txtNombre: {
                required: true,
            },

            txtEmail: {
                required: true,
                email: true,
            },

            comentario : {
                minlength: 50,
            }

        },

        messages: {
            txtNombre: {
                required: "El campo nombre es requerido.*"
            },
            txtEmail: {
                required: "El campo email es requerido.*",
                email: "El email ingresado debe tener un formato 'correo@example.com'"
            },
            comentario: "El comentario debe tener al menos 50 caracteres"
        }
    })

    // Desabilitar inputs (Rut y Pasaporte)
    $("#rut").prop("disabled", true)
    $("#pasaporte").prop("disabled", true)


    // Validacion Tipo Documento (Rut/Pasaporte)
    $("input[name=tipoDocumento]").click(function(){
        if($('input:radio[name=tipoDocumento]:checked').val() == "isRut"){
            $("#rut").prop("disabled", false) && $("#pasaporte").prop("disabled", true)
        }
        if($('input:radio[name=tipoDocumento]:checked').val() == "isPasaporte"){
            $("#rut").prop("disabled", true) && $("#pasaporte").prop("disabled", false)
        }

    })

    // Botón Limpiar campos
    $("#btnLimpiar").click(function(event){
        $("#formularioContacto")[0].reset();
    })
    

    
    
})