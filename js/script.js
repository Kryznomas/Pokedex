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
        
        var ajax4 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon-form/${indicePokemon}`,
            dataType: "json",
            async: true,
            success: function (result) {}
            
            }); 

        $.when( ajax1 , ajax2, ajax3, ajax4 ).done(function( a1, a2, a3, a4 ) {
            
            if (!primeraBusqueda){
                a1 = a1[0]
            }
            llenarCampos(a1,a2,a3,a4);
            
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
        
        busquedaId(Math.floor(Math.random()* (+1 - +880) + +880));  

    });

    function llenarCampos(a1,a2,a3,a4) {
        console.log(a1,a2,a3,a4);
        let idPokemon=$
        let imgPokemon = $('#img-pokemon');
        let nombrePokemon = $('#nombre-pokemon');
        let categoriaPokemon = $('#categoria');
        let numeroPokemon = $('#numero-pokemon');
        let tipoPokemon = $('#tipo');
        let habilidadPokemon1 = $('#habilidad-1');
        let habilidadPokemon2 = $('#habilidad-2');
        let habilidadPokemon3 = $('#habilidad-3');
        let habitatPokemon1 = $('#habitat');
        let descripcionPokemon = $('#descripcion');
        let debilidadesPokemon = $('#debilidades');


        nombrePokemon.text(a1["name"]);
        imgPokemon.attr("src", a1["sprites"]["other"]["official-artwork"]["front_default"]);
        tipoPokemon.text(a1['types']["0"]["type"]["name"]);
        tipoPokemon.addClass(a1['types']["0"]["type"]["name"]);
        numeroPokemon.text(a1['id']);
        categoriaPokemon.text(a2['0']['genera']['5']['genus']);
        habilidadPokemon1.text(a1.abilities[0]['ability']['name']);
        habilidadPokemon2.text(a1.abilities[1]['ability']['name']);
        habilidadPokemon3.text(a1.abilities[2]['ability']['name']);
        habitatPokemon1.text(a2[0].habitat.name)
        descripcionPokemon.text(a2[0]["flavor_text_entries"][0]["flavor_text"])
    }

});

var ctx= document.getElementById("myChart").getContext("2d")

var myChart= new Chart(ctx,{
    type:"radar",
    data:{
        labels:['SP DEFENSE', 'SPEED', 'DEFENSE', 'SP ATTACK', 'ATTACK', 'HP'],
        datasets:[{
                label:'Stats',
                data:[80,105,70,80,100,95],
                backgroundColor:[
                    'rgb(66, 134, 244,0.5)',
                ]
                
/*dataPoints: [
  { y: spd, label: "SPEED" },
  { y: sdef, label: "SP. DEFENSE" },
  { y: satk, label: "SP. ATTACK" },
  { y: def, label: "DEFENSE" },
  { y: atk, label: "ATTACK" },
  { y: hp, label: "HP" }
]*/
        }]
    },
    options:{
        scales:{
            angleLines: {
    display: false
},
            ticks: {
    suggestedMin: 70,
    suggestedMax: 110
            
        }}
    }
}); 






