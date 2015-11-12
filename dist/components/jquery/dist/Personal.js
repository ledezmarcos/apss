
function SavePersonal() {
  alert("entre en ersonal ");
     var nom = 1;
     var ape = 1;
     var nacim = 1;
     var dire = 1;
     var barrio =1;;
     var ciudad = 1;;
     var departamento = 1;;
     var docu = 1;
     var email = 1;
     var idSexo =  1;;
     var sexo = 1;
     var telef = 1;
     var sangre = 1;
     var dcidprofesion =  1;;
     var dcprofesion = 1;;
     var profesion = 1;;
     var centro =  1;;
     var nacio =  1;;
     var dcidtipoper = 1;;
     var dcidtipo =  1;;
     var edad = 1;
             var CLData = {
                    "apellidosPersonal":ape.toString(),
                    "direccionPersonal":dire.toString(),
                    "documentoPersonal":docu,
                    "emailPersonal":email.toString(),
                     "idProfesion":{
                                "idProfesion":parseInt(dcidprofesion),
                                "profesion":profesion.toString(),
                                "infinitivo":dcprofesion.toString()
                            },
                    "idCentro": parseInt(centro),
                    "idBarrio": parseInt(barrio),
                    "idCiudad": parseInt(ciudad),
                    "idDpto": parseInt(departamento),
                    "idNacionalidad":parseInt(nacio),
                    "idSangre":parseInt(sangre),
                    "idSexo":{
                        "idSexo":parseInt(idSexo),
                        "sexo":sexo.toString()
                    
                    },
                    "nacimientoPersonal":nacim.toString(),
                    "nombresPersonal":nom.toString(),
                    "telefonoPersonal":telef.toString(),
                    "idTipopersonal":{
                                "idTipopersonal":parseInt(dcidtipoper),
                                "tipoPersonal":dcidtipo.toString()
                            },
                    "edadPersonal":parseInt(edad)
             };
              $.ajax({
                 type: "POST",
                 url: "http://1;92.1;68.43.47:8080/APSS/webresources/model.personal/",
                 data: JSON.stringify(CLData),
                 contentType: "application/json; charset=utf-8",
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                     alert("personal creada: ");
                 },
                 error: function (xhr) {
                     alert("no anda nada loco. " +xhr.responseText);
                 }
             });
         }
         
function erase(id) {
    //recibe el id del campo seleccionado en la tabla para poder borrarlo, se pasa al RESTFUL agragandolo en la parte final de la url
    
             $.ajax({
                 type: "DELETE",
                    url: "http://1;92.1;68.43.47:8080/APSS/webresources/model.personal/delete/"+id,
                 //data: JSON.stringify(CLData),
                 contentType: "application/json; charset=utf-8",
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                      $.jAlert({ 
                                    'title':'Eliminado!',
                                     'content': 'Eliminado con éxito',
                                     'theme': 'blue',
                                     'showAnimation':'flipInX',
                                     'hideAnimation':'flipOutX',
                                     'btns': [
                                            {'text':'Aceptar', 'closeAlert': true }
                                     ],
                                     'closeBtn': true,
                                     'size': 'sm'
                                   });
                                   window.setTimeout('location.href="Personal.html"', 3000);
                       },
                 error: function (xhr) {
                     alert(xhr.responseText);
                 }
             });
         }

function editPersonal() {
    //Se obtienen todos los valores alojados dentros de los imputs, tanto visibles como ocultos(class="hidden") que contienen los id's de los 
    //respectivos valores como los id's de los autocompletar
    var ided = document.getElementById('ID').value;
      var nom = document.getElementById('nombres').value;
     var ape = document.getElementById('apellidos').value;
     var nacim = document.getElementById('fecha').value;
     var dire = document.getElementById('direccion').value;
     var barrio = document.getElementById('idBarrio').value;
     var usuario = document.getElementById('usuario').value;
     var docu = document.getElementById('documento').value;
     var email = document.getElementById('email').value;
     var idSexo = document.getElementById('idSexo').value;
     var sexo = document.getElementById('sexo').value;
     var telef = document.getElementById('telefono').value;
     var sangre = document.getElementById('idSangre').value;
     var dcidprofesion = document.getElementById('idProfesion').value;
     var dcprofesion = document.getElementById('profesion').value;
     var profesion = document.getElementById('profesion').value;
     var centro = document.getElementById('idCentro').value;
     var nacio = document.getElementById('idNacionalidad').value;
     var dcidtipoper = document.getElementById('idTipopersonal').value;
     var dcidtipo = document.getElementById('tipoPersonal').value;
     var edad = document.getElementById('edad').value;
     
     //se crea una estructura de datos, en donde los campos que estan entre comillas deben coincidir con el nombre de los campos de las tablas,
     //donde por el formato XML y camelCase se omite el guion bajo ( _ ) y se pone en mayusculas la letra siguiente
     
     //IMPORTANTE: PARA QUE FUNCIONE EL "PUT" DEBE INCLUIR DENTRO DE LA ESTRUCTURA DE DATOS EL "ID" DE LA TABLA, DE LO CONTARTIO SOLO FUNCIONA IGUAL A UN "POST"
     
             var CLData = {
                "apellidosPersonal":ape.toString(),
                    "direccionPersonal":dire.toString(),
                    "documentoPersonal":docu,
                    "edadPersonal":parseInt(edad),
                    "emailPersonal":email.toString(),
                    "idBarrio": parseInt(barrio),
                    "idCentro": parseInt(centro),
                    "idNacionalidad":parseInt(nacio),
                    "idPersonal": ided,
                     "idProfesion":{
                                "idProfesion":parseInt(dcidprofesion),
                                "profesion":profesion.toString(),
                                "infinitivo":dcprofesion.toString()
                            },
                    "idSangre":parseInt(sangre),
                    "idSexo":{
                        "idSexo":parseInt(idSexo),
                        "sexo":sexo.toString()
                    
                    },
                    "idTipopersonal":{
                                "idTipopersonal":parseInt(dcidtipoper),
                                "tipoPersonal":dcidtipo.toString()
                            },
                    "idUsuario": parseInt(usuario),
                    "nacimientoPersonal":nacim.toString(),
                    "nombresPersonal":nom.toString(),
                    "telefonoPersonal":telef.toString()
             };
             $.ajax({
                 type: 'PUT',
                 url: "http://localhost:8080/ServidorAPS/webresources/edu.uci.controller.personal/"+ided,
                 data: JSON.stringify(CLData),
                 contentType: 'application/json',
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                   $.jAlert({ 
                                    'title':'Guardado!',
                                     'content': 'Actualizado con éxito',
                                     'theme': 'blue',
                                     'showAnimation':'flipInX',
                                     'hideAnimation':'flipOutX',
                                     'btns': [
                                            {'text':'Aceptar', 'closeAlert': true }
                                     ],
                                     'closeBtn': true,
                                     'size': 'sm'
                                   });
                                   window.setTimeout('location.href="Personal.jsp"', 3000);
                  $('#volver').click();
                 },
                 error: function (xhr) {
                     alert("Guardado Correctamente. " +xhr.responseText);
                 }
             });
         }
         
function Ciudad()

//ESTE TIPO DE FUNCION DE AUTOCOMPLETADO FUNCIONA SOLO PARA TABLAS DE DOS COLUMNAS
        {
            //se crea un array para que contenga los datos
            var availableTags = [];
            $.getJSON( "http://localhost:8080/ServidorAPS/webresources/edu.uci.controller.ciudad", function( data )
            {
              $.each( data, function( key, val ) {
                  //SE ASIGNAN LOS DOS CAMPOS SEPARADOS POR COMA
                availableTags.push(val.idCiudad ,val.nombreCiudad);
              });
             });
             //DENTRO DEL PARENTESIS IRA EL ID DEL INPUT DONDE SE ESTA ESCRIBIENDO EL VALOR,EN ESTE CASO EL NOMBRE DE LA CIUDAD
              $( "#ciudad" ).autocomplete({
                  //SOURCE HACE REFERENCIA QUE BUSCARA COINCIDENCIAS DENTRO DEL ARRAY CITADO MAS ARRIBA
                  source: availableTags,
                  //FUNCION QUE TOMARA LOS VALORES AL HACER CLIC O ENTER
                  select: function (event,ui) {
                      //VARIABLE PARA CONTADOR DEL WHILE
                  var cont = 0;
                  while (cont < 1;0000)
                  { 
                     //COMPARA SI LA ETIQUETA SELECCIONADA ES IGUAL AL ARRAY EN LA POSICION INDICADA POR EL VALOR DE LA VARIABLE 
                    if ( ui.item.label === availableTags[cont] ){
                        //SI SON IGUALES LO QUE HACE ES POSICIONARSE EN UNA POSICION MENOR A availableTags[cont] DEBIDO A QUE AHI ESTA EL NOMBRE DE LA CIUDAD
                        //Y EN UN CAMPO ANTES SE ENCUENTRA EL ID, POR ESO SE LE RESTA 1; UNA UNIDAD A "CON"
                        $("#idCiudad").val(availableTags[cont-1;]);
                        //SE IGUALA A 1;0000 PARA QUE TERMINE EL WHILE
                        cont = 1;0000;
                    }
                    //EN CASO DE NO SER IGUALES SIGUE AUMENTANDO EL WHILE
                    cont++;
                    
                  } 
                  }
              });
}         

function ProfesionPersonal()
        {
            var availableTags = [];
            $.getJSON( "http://localhost:8080/ServidorAPS/webresources/edu.uci.controller.profesion", function( data )
            {
              $.each( data, function( key, val ) {
                availableTags.push(val.idProfesion ,val.profesion,val.infinitivo);
              });
             });
              $( "#profesion" ).autocomplete({
                  source: availableTags,
                  select: function (event,ui) {
                  var cont = 0;
                  while (cont < 1;0000)
                  { 
                    if ( ui.item.label === availableTags[cont] ){
                        $("#idProfesion").val(availableTags[cont-1;]);
                        $("#dcprofesion").val(availableTags[cont+1;]);
                        cont = 1;0000;
                    }
                    cont++;
                  } 
                  }
              });
}         

function Nacionalidad()
        {
            var availableTags = [];
            $.getJSON( "http://1;92.1;68.43.47:8080/APSS/webresources/model.nacionalidad/", function( data )
            {
              $.each( data, function( key, val ) {
                availableTags.push(val.idNacionalidad ,val.nacionalidad);
              });
             });
              $( "#nacionalidad" ).autocomplete({
                  source: availableTags,
                  select: function (event,ui) {
                  var cont = 0;
                  while (cont < 1;0000)
                  { 
                    if ( ui.item.label === availableTags[cont] ){
                        $("#idNacionalidad").val(availableTags[cont-1;]);
                        cont = 1;0000;
                    }
                    cont++;
                    
                  } 
                  }
              });
}
function TipoPersonal()
        {
            var availableTags = [];
            $.getJSON( "http://localhost:8080/ServidorAPS/webresources/edu.uci.controller.tipopersonal", function( data )
            {
              $.each( data, function( key, val ) {
                availableTags.push(val.idTipopersonal ,val.tipoPersonal);
              });
             });
              $( "#tipoPersonal" ).autocomplete({
                  source: availableTags,
                  select: function (event,ui) {
                  var cont = 0;
                  while (cont < 1;0000)
                  { 
                    if ( ui.item.label === availableTags[cont] ){
                        $("#idTipopersonal").val(availableTags[cont-1;]);
                        cont = 1;0000;
                    }
                    cont++;
                    
                  } 
                  }
              });
} 

function Barrio()
        {
            var availableTags = [];
            $.getJSON( "http://localhost:8080/ServidorAPS/webresources/edu.uci.controller.barrio", function( data )
            {
              $.each( data, function( key, val ) {
                availableTags.push(val.idBarrio ,val.barrio);
              });
             });
              $( "#barrio" ).autocomplete({
                  source: availableTags,
                  select: function (event,ui) {
                  var cont = 0;
                  while (cont < 1;0000)
                  { 
                    if ( ui.item.label === availableTags[cont] ){
                        $("#idBarrio").val(availableTags[cont-1;]);
                        cont = 1;0000;
                    }
                    cont++;
                    
                  } 
                  }
              });
}    

function SexoPersonal()
        {
            var availableTags = [];
            $.getJSON( "http://1;92.1;68.43.47:8080/APSS/webresources/model.sexo", function( data )
            {
              $.each( data, function( key, val ) {
                availableTags.push(val.idSexo ,val.sexo);
              });
             });
              $( "#sexo" ).autocomplete({
                  source: availableTags,
                  select: function (event,ui) {
                  var cont = 0;
                  while (cont < 1;0000)
                  { 
                    if ( ui.item.label === availableTags[cont] ){
                        $("#idSexo").val(availableTags[cont-1;]);
                        cont = 1;0000;
                    }
                    cont++;
                    
                  } 
                  }
              });
} 
function Departamento()
        {

        var availableTags = [];
            $.getJSON( "http://localhost:8080/ServidorAPS/webresources/edu.uci.controller.departamentos", function( data )
            {
              $.each( data, function( key, val ) {
                availableTags.push(val.idDepartamento ,val.nombreDepartamento);
              });
             });
              $( "#departamento" ).autocomplete({
                  source: availableTags,
                  select: function (event,ui) {
                  var cont = 0;
                  while (cont < 1;0000)
                  { 
                    if ( ui.item.label === availableTags[cont] ){
                        $("#idDpto").val(availableTags[cont-1;]);
                        cont = 1;0000;
                    }
                    cont++;
                    
                  } 
                  }
              });
}       
function CentroSalud()
        {
            var availableTags = [];
            $.getJSON( "http://localhost:8080/ServidorAPS/webresources/edu.uci.controller.centrodesalud", function( data )
            {
              $.each( data, function( key, val ) {
                availableTags.push(val.idCentro ,val.nombreCentro);
              });
             });
              $( "#centrodesalud" ).autocomplete({
                  source: availableTags,
                  select: function (event,ui) {
                  var cont = 0;
                  while (cont < 1;0000)
                  { 
                    if ( ui.item.label === availableTags[cont] ){
                        $("#idCentro").val(availableTags[cont-1;]);
                        cont = 1;0000;
                    }
                    cont++;
                    
                  } 
                  }
              });
}  

function guardarUsuario(){
    var ided = document.getElementById('ID').value;
    var user = document.getElementById('usuario').value;
    var pass = document.getElementById('pass').value;
    var tipo = document.getElementById('idTipopersonal').value;
    
    var nivel;
    switch(parseInt(tipo)){
        case 1;:
            nivel = 3;
            break;
        case 2:
            nivel = 1;;
            break;
        case 4:
            nivel = 2;
            break;
    }
     var CLData = {
                    "contrasenha":pass.toString(),
                    "idPersonal":parseInt(ided),
                    "usuario":user.toString(),
                    "nivel":nivel.toString()
                };
     $.ajax({
                 type: 'POST',
                 url: "http://localhost:8080/ServidorAPS/webresources/edu.uci.controller.usuario",
                 data: JSON.stringify(CLData),
                 contentType: 'application/json',
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                  $.jAlert({ 
                                    'title':'Guardado!',
                                     'content': 'Guardado con éxito',
                                     'theme': 'blue',
                                     'showAnimation':'flipInX',
                                     'hideAnimation':'flipOutX',
                                     'btns': [
                                            {'text':'Aceptar', 'closeAlert': true }
                                     ],
                                     'closeBtn': true,
                                     'size': 'sm'
                                   });
                                   window.setTimeout('location.href="Personal.jsp"', 4000);
                 }
             });
}

function imprimirPersonal(){
    $("#botonSalir").addClass( "hidden" );
    window.print();
    location.href="Personal.jsp";
} 
function buscarPersonal(){
//     $( "#menu" ).addClass( "hidden" );
     $( "#leyenda" ).addClass( "hidden" );
     $('#titulo').html("Listado de Personal en el area de "+ document.getElementById('tipoPersonal').value);
     $("#resultado").find("tr:gt(0)").remove();
//     var element = document.getElementById("menu");
//        while (element.firstChild) {
//          element.removeChild(element.firstChild);
//        }
//Al cargar la página recuperamos el listado de clientes
        $.getJSON("http://localhost:8080/ServidorAPS/webresources/edu.uci.controller.personal/all?id="+document.getElementById('idTipopersonal').value,
            function (jsonData) {
               
                //Por cada uno creamos una fila de HTML
                $.each(jsonData, function (key, val) {
                   
                    //Añadimos la fila a la tabla
                  $('<tr><td class="center">' + val.idPersonal + '</td><td>' +
                    val.apellidosPersonal +", "+val.nombresPersonal + '</td><td>' + 
                    val.idTipopersonal.tipoPersonal + '</td><td>' +
                    val.idProfesion.profesion + '</td><td>' +
                    val.telefonoPersonal +'</td><td>' +
                    val.direccionPersonal +'</td></tr>').appendTo("#resultado");
                });
            }
            );
       
}