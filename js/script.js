$(document).ready(function () {

    var buttonNombre = $('#button-nombre');
    var buttonRandom = $('#button-random');
    var buttonNumero = $('#button-numero');

    $(buttonNombre).click(function () {
        console.log();
        var inputNombre = $('#input-nombre').val();
        
        let ajax1 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${inputNombre}`,
            success: function (data) {
                llenarCampos(data);
                return data;
            },
            dataType: "json",
            async: true,
            success: function (result) {}
        
        });  

        let ajax2 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon-species/${inputNombre}`,
            dataType: "json",
            async: true,
            success: function (result) {}
            
            });



        $.when( ajax1 , ajax2 ).done(function( a1, a2 ) {

        var data = a1 + a2; 
        
        llenarCampos(a1,a2);
        grafico(a1);

        $('#input-nombre')[0].value = ""
       
    });
        
    }); 

    $(buttonNumero).click(function () {
        var inputNumero = $('#input-numero').val();
        
        var ajax1 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${inputNumero}`,
            success: function (data) {
                llenarCampos(data);
                return data;
            },
            dataType: "json",
            async: true,
            success: function (result) {}
        
        });        

        var ajax2 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon-species/${inputNumero}`,
            dataType: "json",
            async: true,
            success: function (result) {}

            });

        $.when( ajax1 , ajax2 ).done(function( a1, a2) {

        var data = a1 + a2; 
        
        llenarCampos(a1,a2);
        grafico(a1);
        
        $('#input-numero')[0].value = ""
    }); 
    });


    $(buttonRandom).click(function () {
        var randomNumber = Math.floor(Math.random()* (+1 - +880) + +880);  

        
        var ajax1 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randomNumber}`,
            success: function (data) {
                llenarCampos(data);
                return data;
            },
            dataType: "json",
            async: true,
            success: function (result) {}
        
        });        

        var ajax2 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon-species/${randomNumber}`,
            dataType: "json",
            async: true,
            success: function (result) {}

            });


        $.when( ajax1 , ajax2).done(function( a1, a2) {

        var data = a1 + a2; 
        
        llenarCampos(a1,a2);
        grafico(a1);
    });
    
    })

    function grafico(a1) {
        var chart = new CanvasJS.Chart("chartContainer",{
            theme: "light1",
            animationEnabled: true,
            data: [{
                
                type: "bar",
                dataPoints: [
                    { label: "HP",  y: a1[0].stats[0]["base_stat"] },
                    { label: "Ataque", y: a1[0].stats[1]["base_stat"]},
                    { label: "Defensa", y: a1[0].stats[2]["base_stat"]},
                    { label: "Ataque SP",  y: a1[0].stats[3]["base_stat"]},
                    { label: "Defensa SP",  y: a1[0].stats[4]["base_stat"]},
                    { label: "Velocidad",  y: a1[0].stats[5]["base_stat"]}
                ]
            }],
        
        });
            chart.render();
    }

    function llenarCampos(a1,a2) {
                
        var imgPokemon = $('#img-pokemon');
        var nombrePokemon = $('#nombre-pokemon');
        var categoriaPokemon = $('#categoria');
        var numeroPokemon = $('#numero-pokemon');
        var tipoPokemon1 = $('#tipo1');
        var tipoPokemon2 = $('#tipo2');
        var habitatPokemon1 = $('#habitat');
        var descripcionPokemon = $('#descripcion');
        var hp = $('#hp')
        var ataque = $('#ataque')
        var defensa = $('#defensa')
        var ataqueEspecial = $('#ataqueEspecial')
        var defensaEspecial = $('#defensaEspecial')
        var velocidad = $('#velocidad')
        
        /* Valores por defecto */
        tipoPokemon1.text("");
        tipoPokemon2.text("");
        tipoPokemon2.attr("class"," ");
        habitatPokemon1.text("");


        hp.text(a1[0].stats[0]["base_stat"]);
        ataque.text(a1[0].stats[1]["base_stat"]);
        defensa.text(a1[0].stats[2]["base_stat"]);
        ataqueEspecial.text(a1[0].stats[3]["base_stat"]);
        defensaEspecial.text(a1[0].stats[4]["base_stat"]);
        velocidad.text(a1[0].stats[5]["base_stat"]);
        nombrePokemon.text(a1[0]["name"]);
        imgPokemon.attr("src", a1[0]["sprites"]["other"]["official-artwork"]["front_default"]);
        tipoPokemon1.text(a1[0]['types']["0"]["type"]["name"]);
        tipoPokemon1.addClass((a1[0]['types']["0"]["type"]["name"])+"-type");
        numeroPokemon.text(a1[0]['id']);
        categoriaPokemon.text(a2['0']['genera']['5']['genus']);
        
        const descripcion = a2[0]["flavor_text_entries"].filter(elemento => {

            return elemento.language.name == "es";
            
        })
        
        descripcionPokemon.text(descripcion[0]["flavor_text"]);


        if (a2[0]["habitat"]!= null) {
        habitatPokemon1.text(a2[0]["habitat"]["name"]);
        
        }

        else {
            habitatPokemon1.text("Desconocido")
        }

        if(a1[0]['types'].length > 1){
            tipoPokemon2.text(a1[0]['types']["1"]["type"]["name"]);
            tipoPokemon2.addClass((a1[0]['types']["1"]["type"]["name"])+"-type");
        }
 
    } 

    
    })
    









