$(document).ready(function () {

    let buttonNombre = $('#button-nombre');
    let buttonRandom = $('#button-random');

    $(buttonNombre).click(function () {
        var inputNombre = $('#input-nombre').val();
        var ajax1 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${inputNombre}`,
            dataType: "json",
            async: true,
            success: function (result) {}

        });    
        var ajax2 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon-species/${inputNombre}`,
            dataType: "json",
            async: true,
            success: function (result) {}
            
            });

        var ajax3 = $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${inputNombre}/encounters`,
            dataType: "json",
            async: true,
            success: function (result) {}
            
            });
            
            $.when( ajax1 , ajax2, ajax3  ).done(function( a1, a2, a3 ) {
                
                let data = a1 + a2 + a3; 
                console.log(a1,a2,a3)
                llenarCampos(a1,a2,a3);
                
            });
        });  

        
        
    

/*     $(buttonRandom).click(function () {
        var randomNumber = Math.floor(Math.random()* (+1 - +150) + +150);  
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randomNumber}`,
            success: function (data) {
                llenarCampos(data);
                return data;
            },
            dataType: "json",
            
        });        
    }); */

    function llenarCampos(a1,a2,a3) {
        
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

 
        nombrePokemon.text(a1['0']["name"]);
        imgPokemon.attr("src", a1['0']["sprites"]["other"]["official-artwork"]["front_default"]);
        tipoPokemon.text(a1['0']['types']["0"]["type"]["name"]);
        numeroPokemon.text(a1['0']['id']);
        categoriaPokemon.text(a2['0']['genera']['5']['genus'])
        /* area1.text(a3["0"]["location_area"].name) */
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






