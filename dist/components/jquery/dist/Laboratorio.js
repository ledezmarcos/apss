function erase(id) {
			$.ajax({
				type: "DELETE",
                url: "http://192.168.43.47:8080/APSS/webresources/model.laboratorio/delete/"+id,
				 processData: true,
				 success: function (data, status, jqXHR) {
                     alert("Eliminado Correctamente. "+id);
					// Refresh();
                 },
                 error: function (xhr, status, error) {
                     alert("no anda che "+id);
                 }
             });
			 
}
		 
		 function idtemporalLab(id) {
		localStorage.setItem("idLaboratorio", id);
      
	function Refresh() {
//alert("entre en refrest");
    window.location.reload();  
        }
 }

 function cargarLab() {
       var iddee = localStorage.getItem("idLaboratorio");
       $('#idLaboratorio').val(iddee);
       $.getJSON("http://192.168.43.47:8080/APSS/webresources/model.laboratorio/"+iddee,
        function (jsonData) { 
        //    Por cada uno creamos una fila de HTML
           
           $.each(jsonData, function (key, val) {
                //Añadimos la fila a la tabla
              $('#idLaboratorio').val(jsonData.nombreLaboratorio);
            });
       }
        );

 }

function SaveLaboratorio() {
     var nom = document.getElementById('nombre').value;
     var dir = document.getElementById('direccion').value;
     var tele = document.getElementById('telefono').value;
     var email = document.getElementById('email').value;
             var CLData = {
                 "nombreLaboratorio": nom.toString(),
                 "direccionLaboratorio": dir.toString(),
                 "telefonoLaboratorio": tele.toString(),
                 "emailLaboratorio": email.toString()
             };
             $.ajax({
                 type: "POST",
                 url: "http://192.168.43.47:8080/APSS/webresources/model.laboratorio/",
                 data: JSON.stringify(CLData),
                 contentType: "application/json; charset=utf-8",
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                    // alert("Guardado Correctamente.");
                    location.href="Laboratorio.html"
                 },
                 error: function (xhr) {
                    // alert("no anda nada loco. " +xhr.responseText);
                 }
             });
         }
		 
function editLaboratorio() {
    var ided  = document.getElementById('codigo').value;
     var nom = document.getElementById('nombre').value;
     var dir = document.getElementById('direccion').value;
     var tele = document.getElementById('telefono').value;
     var email = document.getElementById('email').value;
             var CLData = {
                 "nombreLaboratorio": nom.toString(),
                 "direccionLaboratorio": dir.toString(),
                 "telefonoLaboratorio": tele.toString(),
                 "emailLaboratorio": email.toString(),
                 "idLaboratorio": ided
             };
             $.ajax({
                 type: 'PUT',
                 url: "http://192.168.43.47:8080/APSS/webresources/model.laboratorio/"+ided,
                 data: JSON.stringify(CLData),
                 contentType: 'application/json',
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                  alert("Guardado Correctamente. ");
                 location.href="Laboratorio.html";
                 },
                 error: function (xhr) {
                  //   alert("No se pudo actualizar el archivo." +xhr.responseText);
                     
                 }
             });
         }
