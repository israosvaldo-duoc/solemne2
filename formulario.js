$(document).ready(function(){
    console.log("jQuery Funcionando")

    $("#formularioContacto").validate({
        rules: {
            txtNombre: {
                required: true,
            },

            email: {
                required: true,
            }
        },
        messages: {
            txtNombre: {
                required: "El campo nombre es requerido.*"
            },
            email: {
                required: "El campo email es requerido.*"
            }
        } 
    })

    
    $("#rut").prop("disabled", true)
    $("#pasaporte").prop("disabled", true)

    
    
})