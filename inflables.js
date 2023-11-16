window.onload = function () {
    var bienvenidaElement = document.getElementById("bienvenida");
    if (bienvenidaElement) {
        bienvenidaElement.innerHTML = "¡Bienvenidos a Inflables Benavidez JRM!";
    }
};
/*.....................*/


document.addEventListener("DOMContentLoaded", function () {

    var scrollLinks = document.querySelectorAll('.nav-link-scroll');


    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();


            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);


            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});

/*..... boton*/
function volverArriba() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.onscroll = function () {
    mostrarOcultarBoton();
};

function mostrarOcultarBoton() {
    var botonVolverArriba = document.getElementById("btnVolverArriba");


    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        botonVolverArriba.style.display = "block";
    } else {
        botonVolverArriba.style.display = "none";
    }
}








// archivo: comentarios.js


function addComment() {

    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;


    var newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerHTML = '<strong>' + name + ':</strong> ' + comment;


    document.getElementById('comments').appendChild(newComment);


    document.getElementById('commentForm').reset();
}
