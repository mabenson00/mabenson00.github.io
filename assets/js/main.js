document.addEventListener("DOMContentLoaded", function() {
    new SweetScroll( {}
    );

    var canvas = document.getElementById("michaelcanvas");
    var ctx = canvas.getContext("2d");
    var pieceX = (canvas.width-2)/2;
    var pieceY = (canvas.height-2)/2;
    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;


    function drawPiece() {
      ctx.beginPath();
      ctx.arc(pieceX, pieceY, 1, 0, Math.PI*2);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();
    }


    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPiece();

    }
    var mbtime=0
    function setAllFalse() {
      leftPressed=false
      rightPressed=false
      downPressed=false
      upPressed=false
    }
    function moveleft() {
      setAllFalse();
      leftPressed=true;
    }

    function moveright() {
      setAllFalse();
      rightPressed=true;
    }

    function moveup() {
      setAllFalse();
      upPressed=true;
    }

    function movedown() {
      setAllFalse();
      downPressed=true;
    }

    var directions = [moveleft, moveright, moveup, movedown, setAllFalse]

    function movePiece() {
      directions[Math.floor(Math.random() * directions.length)]();
    }


    function run() {
      setInterval(function() { draw();  }, 10);
     }

    function run2() {
      setInterval(function() { movePiece() }, 300 )
    }

     function draw(balls) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPiece()
    if(rightPressed && pieceX < canvas.width-4) { pieceX += 2;}
    if(leftPressed && pieceX >4) { pieceX -= 2;}
    if (upPressed && pieceY >4) {pieceY -=2}
    if (downPressed && pieceY< canvas.height-4) {pieceY+=2}

}
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    function keyDownHandler(e) {
      e.preventDefault();
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }
    else if(e.keyCode == 32) {
      run();
      timer()
    }
}



function keyUpHandler(e) {

    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 38) {
        upPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
    }
}

    run()
    run2()

    particlesJS("particles-js", {
        particles: {
            number: {
                value:15, density: {
                    enable: !0, value_area: 800
                }
            }
            , color: {
                value: "#ff0000"
            }
            , shape: {
                type:"polygon", stroke: {
                    width: 0, color: "#000000"
                }
                , polygon: {
                    nb_sides: 5
                }
                , image: {
                    src: "img/github.svg", width: 100, height: 100
                }
            }
            , opacity: {
                value:1, random:0, anim: {
                    enable: !1, speed: 1, opacity_min: .1, sync: !1
                }
            }
            , size: {
                value:3, random:!1, anim: {
                    enable: !1, speed: 19.18081918081918, size_min: .1, sync: !1
                }
            }
            , line_linked: {
                enable: !1, distance: 150, color: "#ff0000", opacity: .4, width: 1
            }
            , move: {
                enable:!0, speed:40, direction:"none", random:!0, straight:!1, out_mode:"out", bounce:!1, attract: {
                    enable: !1, rotateX: 600, rotateY: 1200
                }
            }
            , nb:80
        }
        , interactivity: {
            detect_on:"window", events: {
                onhover: {
                    enable: !1, mode: "grab"
                }
                , onclick: {
                    enable: !0, mode: "push"
                }
                , resize:!0
            }
            , modes: {
                grab: {
                    distance:400, line_linked: {
                        opacity: 1
                    }
                }
                , bubble: {
                    distance: 400, size: 40, duration: 2, opacity: 8, speed: 3
                }
                , repulse: {
                    distance: 200, duration: .4
                }
                , push: {
                    particles_nb: 4
                }
                , remove: {
                    particles_nb: 2
                }
            }
        }
        , retina_detect:!0
    }
    )
}

, !1);
