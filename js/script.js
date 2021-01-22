$(document).ready(function () {
var inputNombre = $('#input-nombre').value;
    let pokemon = $.ajax({
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/bulbasaur/${inputNombre}`,
    success: function(data) {
    
    return data;
    },
    dataType: "json",
    });
    
    let buttonNombre = $('#button-nombre')
    
    let imgPokemon = $('#img-pokemon');
    let nombrePokemon = $('#nombre-pokemon');
   
    $(buttonNombre).click(function(e){
        e.prevenDefault;
        nombrePokemon.text(pokemon.responseJSON["name"]);
        imgPokemon.attr("src",pokemon.responseJSON["sprites"]["other"]["official-artwork"]["front_default"]);
});
        console.log(pokemon);

    })






            

            