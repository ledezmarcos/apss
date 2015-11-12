function NombresLaboratorio()
{
    var availableTags = [];
    $.getJSON("http://192.168.43.47:8080/APSS/webresources/model.laboratorio/", function (data)
    {
        $.each(data, function (key, val) {
            availableTags.push(val.idPaciente, val.nombresLaboratorio);
        });
    });
    $("#nombreLaboratorio").autocomplete({
        source: availableTags,
        select: function (event, ui) {
            var cont = 0;
            while (cont < 10000)
            {
                if (ui.item.label === availableTags[cont]) {
                    $("#idLaboratorio").val(availableTags[cont - 1]);
                    cont = 10000;
                }
                cont++;

            }
        }
    });
}