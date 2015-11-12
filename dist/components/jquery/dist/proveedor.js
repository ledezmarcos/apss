function eraseP(id) {
   alert("entre"+id);
			$.ajax({
				type: "DELETE",
                url: "http://192.168.43.47:8080/APSS/webresources/model.proveedor/delete/"+id,
				 processData: true,
				 success: function (data, status, jqXHR) {
                     alert("Eliminado Correctamente. "+id);
					Refresh();
                 },
                 error: function (xhr, status, error) {
                     alert("no anda che "+id);
                 }
             });
			 
}
		 function idtemporalpro(id) {
		localStorage.setItem("idProveedor", id);
      
	function Refresh() {
//alert("entre en refrest");
    window.location.reload();  
        }
 }
function Saveproveedor() {
     var nom = document.getElementById('nombre').value;
     var dir = document.getElementById('direccion').value;
     var tele = document.getElementById('telefono').value;
     var email = document.getElementById('email').value;
	 alert(nom+dir+tele+email);
             var CLData = {
                 "nombreProveedor": nom.toString(),
                 "direccionProveedor": dir.toString(),
                 "telefonoProveedor": tele.toString(),
                 "emailProveedor": email.toString()
             };
             $.ajax({
                 type: "POST",
                 url: "http://192.168.43.47:8080/APSS/webresources/model.proveedor/",
                 data: JSON.stringify(CLData),
                 contentType: "application/json; charset=utf-8",
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                    alert("Guardado Correctamente.");
                    location.href="Proveedor.html"
                 },
                 error: function (xhr) {
                    alert("no anda nada loco11 " +xhr.responseText);
                 }
             });
         }
	
function EditProveedor() {

    var ided  = document.getElementById('codigo').value;
     var nom = document.getElementById('nombre').value;
     var dir = document.getElementById('direccion').value;
     var tele = document.getElementById('telefono').value;
     var email = document.getElementById('email').value;
	  alert(nom+dir+tele+email+" : "+ided);
             var CLData = {
                    "nombreProveedor": nom.toString(),
                 "direccionProveedor": dir.toString(),
                 "telefonoProveedor": tele.toString(),
                 "emailProveedor": email.toString(),
                 "idProveedor": ided
             };
             $.ajax({
                 type: 'PUT',
                 url: "http://192.168.43.47:8080/APSS/webresources/model.proveedor/"+ided,
                 data: JSON.stringify(CLData),
                 contentType: 'application/json',
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                  alert("Guardado Correctamente. ");
                 location.href="Proveedor.html";
                 },
                 error: function (xhr) {
                  //   alert("No se pudo actualizar el archivo." +xhr.responseText);
                     
                 }
             });
         }	
	