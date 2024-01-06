const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE2 = document.querySelector('.circle2');


var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Captura o objeto de evento (movimento do mouse).
    // Obtém a coordenada X (distância da borda esquerda da janela de visualização) através da propriedade clientX.
    // Pega a largura total da janela, subtrai a coordenada atual e a largura do círculo.
    // Faz o mesmo para a coordenada Y (distância da borda superior da janela de visualização).
    var horizontalPosition = windowWidth - e.clientX - 250;
    var horizontalPosition2 = windowWidth - e.clientX - 100;
    var verticalPosition= windowHeight - e.clientY - 10;
    var verticalPosition2= windowHeight - e.clientY - 10;


    // Define a posição horizontal e vertical.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
    CIRCLE2.style.left = horizontalPosition + 'px';
    CIRCLE2.style.left = horizontalPosition2 + 'px';
    CIRCLE2.style.top = verticalPosition + 'px';
    CIRCLE2.style.top = verticalPosition2 + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "red";
}
function changeColorOnTouch2() {
    CIRCLE2.style.backgroundColor = "gold";
    CIRCLE2.style.borderColor = "purple";
}

// Quando o mouse se move, executa a função mouseCoordinates.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// Quando o mouse toca o círculo, executa a função changeColorOnTouch.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
CIRCLE2.addEventListener('mouseenter', changeColorOnTouch2, false);

// Quando o mouse sai do círculo, remove estilos embutidos com uma função anônima.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
CIRCLE2.addEventListener('mouseleave', function(){CIRCLE2.removeAttribute("style");}, false);
