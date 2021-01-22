$(document).ready(function () {

    let buttonNombre = $('#button-nombre');
    let buttonRandom = $('#button-random');

    $(buttonNombre).click(function () {
        var inputNombre = $('#input-nombre').val();
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${inputNombre}`,
            success: function (data) {
                llenarCampos(data);
                return data;
            },
            dataType: "json",
        });        
    });

    $(buttonRandom).click(function () {
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
    });

    function llenarCampos(pokemon) {

        let imgPokemon = $('#img-pokemon');
        let nombrePokemon = $('#nombre-pokemon');

        nombrePokemon.text(pokemon["name"]);
        imgPokemon.attr("src", pokemon["sprites"]["other"]["official-artwork"]["front_default"]);
    }

})





            

            