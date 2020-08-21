$(document).ready(function(){

    // Data a mostrar en la tabla
    // El atributo Area contiene la data en JSON que corresponde a las opciones del select
    var dataSet = [
        {
            "Nombre": "Rosa",
            "Apellido": "Perez",
            "Codigo": "2",
            "Empresa": "Claro",
            "Area": [
                {"COD": "1", "NOM": "Call Center"},
                {"COD": "2", "NOM": "Soporte"},
                {"COD": "3", "NOM": "Ventas"},
            ],
        },
        {
            "Nombre": "Camila",
            "Apellido": "Florez",
            "Codigo": "9",
            "Empresa": "ETB",
            "Area": [
                {"COD": "9", "NOM": "Mensajeria"},
                {"COD": "8", "NOM": "Contabilidad"},
                {"COD": "7", "NOM": "Mercadeo"},
            ],
        },
        {
            "Nombre": "Laura",
            "Apellido": "Rojas",
            "Codigo": "3",
            "Empresa": "Tigo",
            "Area": [
                {"COD": "1", "NOM": "Call Center"},
                {"COD": "2", "NOM": "Soporte"},
                {"COD": "3", "NOM": "Ventas"},
            ],
        }
    ];

    // Al id example se le agrega DataTable
    $("#example").DataTable(
        {
            data: dataSet,
            columns: [
                { data: 'Nombre', title: 'Nombre' },
                { data: 'Apellido', title: 'Apellido' },
                { data: 'Codigo', title: 'Area' },
                { data: 'Empresa', title: 'Empresa' }
            ],
            columnDefs: [{
                "targets": -2, // Toma el valor de la columna Codigo
                "render": function(data, type, row, meta){
                    // data -> El valor de la columan, en este ejemplo el valor que tiene en la columna Codigo
                    // row  -> Los datos de cada fila de la tabla (Nombre | Apellido | Codigo | Empresa | Area)
                    // meta -> Envia el indice de la fila y la columna (col | row)

                    // Se declara la variable que va a contener el select
                    var $select = $('<select style="width: 100%; padding: 3px;"></select>', {
                    });

                    // Hace el recorrido de los elementos de Area (opciones del select)
                    $.each(row.Area, function (k, v) {
                        // text: Es el nombre que se visualiza en el select (NOM)
                        // value: Es el valor que contine cada option (COD)
                        var $option = $("<option></option>", {
                            "text": v.NOM,
                            "value": v.COD
                        });
                        // Compara si el dato de la columan Codigo es igual a la opción actual,
                        // Al ser verdadero adiciona el atributo selected para marcarla por defecto
                        if (data == v.COD) {
                            $option.attr("selected", "selected")
                        }
                        // Adiciona el option al select
                        $select.append($option);
                    });
                    return $select.prop("outerHTML");
                }
            }
        ],
        }
    ); 
});
