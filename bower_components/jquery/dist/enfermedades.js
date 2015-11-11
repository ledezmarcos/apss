function idtemporalenfe(id) {
localStorage.setItem("idenfermedad", id);
      

 }

 function cargarEnfer() {
       var iddee = localStorage.getItem("idenfermedad");
       $('#idenferm').val(iddee);
       $.getJSON("http://192.168.0.10:8080/APSS/webresources/model.enfermedades/"+iddee,
        function (jsonData) { 
        //    Por cada uno creamos una fila de HTML
           
           $.each(jsonData, function (key, val) {
                //Añadimos la fila a la tabla
              $('#idenferm').val(jsonData.clase);
            });
       }
        );

 }

function erase(id) {
    //recibe el id del campo seleccionado en la tabla para poder borrarlo, se pasa al RESTFUL agragandolo en la parte final de la url
            
             $.ajax({
                 type: "DELETE",
                 url: "http://192.168.0.10:8080/APSS/webresources/model.enfermedades/delete/"+id,
                 processData: true,
                 success: function (data, status, jqXHR) {
                     alert("Eliminado Correctamente. "+id);
                 },
                 error: function (xhr, status, error) {
                     alert("no anda che "+id);
                 }
             });
            /*var json = {"['clase':'enf','idEnfermedades':0},{'clase':'otra','idEnfermedades':2},{'clase':'Hola como andas','idEnfermedades':1}"};
            var key = "idEnfermedades";
            delete json[key];
            alert(json);*/


         }

function NewEnfermedades() {
     var enfermedadnueva = document.getElementById('nuevaenf').value;
             var CLData = {
                 "clase": enfermedadnueva.toString()
             };
             $.ajax({
                 type: "POST",
                 url: "http://192.168.0.10:8080/APSS/webresources/model.enfermedades",
                 data: JSON.stringify(CLData),
                 contentType: "application/json; charset=utf-8",
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                     alert("Enfermedad creada: "+enfermedadnueva);
                 },
                 error: function (xhr) {
                   alert("no guarda. ");
                 }
             });
         }

function UpdateEnfermedades() {
     var enfermedadactualizada = document.getElementById('actualizarenf').value;
     var idac = document.getElementById('idactualizar').value;
             var CLData = {
                 "clase": enfermedadactualizada.toString(),
                 "idEnfermedades":idac.toString(),
             };
             $.ajax({
                 type: "PUT",
                 url: "http://192.168.0.10:8080/APSS/webresources/model.enfermedades/"+idac,
                 data: JSON.stringify(CLData),
                 contentType: "application/json; charset=utf-8",
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                     alert("actualizacion realizada: "+enfermedadactualizada);
                 },
                 error: function (xhr) {
                   alert("no actualiza. "+enfermedadactualizada);
                 }
             });
         }

        