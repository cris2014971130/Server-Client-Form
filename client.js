 getList = function(){
    console.log("Get list")
    fetch('http://localhost:3000/personas')
    .then(response => response.json())
    .then(
        data => {
            var panel = document.createElement("div");
            data.list.forEach(element => {
                var card = document.createElement("h1");
                card.innerText = "Nombre="+element.name+"&Codigo="+element.id;
                panel.appendChild(card)
            });
            var body = document.getElementById("main");
            body.appendChild(panel);
        }
    );
}
$(document).ready(function() {
    $('#abc').on('click', function(e) {
        e.preventDefault();
        var dataString = $('#Formulario').serialize();
        getList();
        $("body").append('<h1>' + dataString+ '</h1>')
        $.post( "http://localhost:3000/personas", dataString );
    }); 
});
