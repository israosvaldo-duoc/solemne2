
$( document ).ready(function() {
    let apiKey = 'adcbd9b055d3b22b09749c76fb773456'
    let idCiudad = 3871336
    let units = 'metric'
    

    $.get({
        url: 'https://api.openweathermap.org/data/2.5/weather?id='+idCiudad+'&appid='+apiKey+'&units='+units,
        success: function(listado){

            let contenedor = $('#clima')
            contenedor.empty()

            console.log(listado)
            
        //    $.each(listado, function(index, personaje){
             //   console.log(personaje);

                contenedor.append("<div class='row justify-content-center'> "+
                "<div class='col-12 col-md-4 col-sm-12 col-xs-12'>"+
                    "<div class='card p-4'>"+
                        "<div class='d-flex'>"+
                            "<h6 class='flex-grow-1'>"+listado.name+"</h6>"+
                            "<h6>16:08</h6>"+
                        "</div>"+
                        "<div class='d-flex flex-column temp mt-5 mb-3'>"+
                            "<h1 class='mb-0 font-weight-bold' id='heading'>"+ listado.main.temp +"° C </h1> <span class='small grey'>Stormy</span>"+
                        "</div>"+
                        "<div class='d-flex'>"+
                            "<div class='temp-details flex-grow-1'>"+
                                "<p class='my-1'> <img src='https://i.imgur.com/B9kqOzp.png' height='17px'> <span>"+ listado.wind.speed +"m/s </span> </p>"+
                                "<p class='my-1'> <i class='fa fa-tint mr-2' aria-hidden='true'></i> <span>" +listado.main.humidity+"% </span> </p>"+
                            "</div>"+
                            "<div> <img src='https://i.imgur.com/Qw7npIg.png' width='100px'> </div>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
                "</div>"
                )
         //   }) 
        },
        error: function(mensajeError){
            console.error(mensajeError)
        }
    }) // fin get

}); // fin document ready




