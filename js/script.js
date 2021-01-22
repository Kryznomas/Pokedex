$(document).ready(function () {

    let buttonNombre = $('#button-nombre');
    let buttonRandom = $('#button-random');
    let buttonNumero =$('#button-numero');

    function busquedaId(indicePokemon, primeraBusqueda){

        var ajax1;
        if (!primeraBusqueda){
            
            ajax1 = $.ajax({
                method: "GET",
                url: `https://pokeapi.co/api/v2/pokemon/${indicePokemon}`,
                dataType: "json",
                async: true,
                success: function (result) {
                }
            
            });  
        
            
        }

        else {ajax1 = primeraBusqueda}; 

        var ajax2 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon-species/${indicePokemon}`,
            dataType: "json",
            async: true,
            success: function (result) {}
            
            });

        var ajax3 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${indicePokemon}/encounters`,
            dataType: "json",
            async: true,
            success: function (result) {}
            
            }); 

        $.when( ajax1 , ajax2, ajax3  ).done(function( a1, a2, a3 ) {
            
            if (!primeraBusqueda){
                a1 = a1[0]
            }
            llenarCampos(a1,a2,a3);
            
        });
    };

    $(buttonNumero).click(function () {
        busquedaId($('#input-numero').val(), false);

    });

    $(buttonNombre).click(function () {
        var inputNombre = $('#input-nombre').val();
        
        var ajax1 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${inputNombre}`,
            dataType: "json",
            async: true,
            success: function (result) {
                busquedaId(result.id, result);
            }
        });    
});  

    $(buttonRandom).click(function () {
        
        busquedaId(Math.floor(Math.random()* (+1 - +150) + +150));  

    });

    function llenarCampos(a1,a2,a3) {
        console.log(a1,a2,a3);
        let idPokemon=$
        let imgPokemon = $('#img-pokemon');
        let nombrePokemon = $('#nombre-pokemon');
        let categoriaPokemon = $('#categoria');
        let numeroPokemon = $('#numero-pokemon');
        let tipoPokemon = $('#tipo');
        let habilidadesPokemon = $('#habilidades');
        let area1 = $('#area1');
        let area2 = $('#area2');
        let area3 = $('#area3');
        let descripcionPokemon = $('#descripcion');
        let debilidadesPokemon = $('#debilidades');


        nombrePokemon.text(a1["name"]);
        imgPokemon.attr("src", a1["sprites"]["other"]["official-artwork"]["front_default"]);
        tipoPokemon.text(a1['types']["0"]["type"]["name"]);
        tipoPokemon.addClass(a1['types']["0"]["type"]["name"]);
        numeroPokemon.text(a1['id']);
        categoriaPokemon.text(a2['0']['genera']['5']['genus'])
        area1.text(a3[0][0]["location_area"].name)
        area2.text(a3[0][1]["location_area"].name)
        area3.text(a3[0][2]["location_area"].name)
        descripcionPokemon.text(a2[0]["flavor_text_entries"][1]["flavor_text"])
    }

});






