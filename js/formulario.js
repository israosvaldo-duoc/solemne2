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

    
    $("#rut").prop("disabled", true)
    $("#pasaporte").prop("disabled", true)

    

    
    
})