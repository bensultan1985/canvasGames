let x = 0;
let y = 0;
let cannonBalls = [];

var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#2E4053";
ctx.fillRect(x, y, 150, 75);

const state = {
    cPress: {
        space: false,
        up: false,
        down: false,
        right: false
    }
}

window.addEventListener('keydown', (e) => {
    if (e.key == " ") state.cPress.space = true
    if (e.key == "ArrowUp") state.cPress.up = true
    if (e.key == "ArrowDown") state.cPress.down = true
    if (e.key == "ArrowLeft") state.cPress.left = true
    if (e.key == "ArrowRight") state.cPress.right = true
})

window.addEventListener('keyup', (e) => {
    if (e.key == " ") state.cPress.space = false
    if (e.key == "ArrowUp") state.cPress.up = false
    if (e.key == "ArrowDown") state.cPress.down = false
    if (e.key == "ArrowLeft") state.cPress.left = false
    if (e.key == "ArrowRight") state.cPress.right = false
})

    class CannonBall {
        constructor(rectx, recty, dx) {
        this.w = 5,
        this.h = 5,
        this.padding = 30,
        this.offsetx = 45,
        this.offsety = 60,
        this.visible = true,
        this.color = "#120D85",
        this.x = rectx,
        this.y = recty,
        this.dx = 1,
        this.dy = 0
        }
    }

    const rect = {
        w: 20,
        h: 20,
        padding: 30,
        offsetx: 45,
        offsety: 60,
        visible: true,
        color: "#F7B02B",
        x: 0,
        y: 0,
        dx: 3,
        dy: -1,
      };

    function drawRect(rect) {
        ctx.beginPath();
        ctx.fillStyle = rect.color,rect.padding, rect.visible;
        ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
        ctx.closePath();
      }
      
      function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      function drawBall(ball) {
        // console.log(ball)
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.closePath();
      }

      function moveBall(ball) {
        ball.x += ball.dx;
        // ball.y += ball.dy;
      };

      function update() {
        if (state.cPress.down) rect.y = rect.y + 5
        if (state.cPress.up) rect.y = rect.y - 5
        if (state.cPress.left) rect.x = rect.x - 5
        if (state.cPress.right) rect.x = rect.x + 5
        if (state.cPress.space) {
            cannonBalls.push(new CannonBall(rect.x, rect.y, 1.5))
        }
        drawCanvas()
        drawRect(rect)
        // console.log(rect)
        for (let i = 0; i < cannonBalls.length;i++) {
            // console.log('ball')
            // console.log(cannonBalls[i])
            drawBall(cannonBalls[i])
            moveBall(cannonBalls[i])

        }
        // draw the canvas again
        // now you call update recursively in order to keep moving
      requestAnimationFrame(update);
      //
      };
      
      //uncomment the statement below to animate
    //   function drawBall(ball) {
    //     ctx.beginPath();
    //     ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    //     ctx.fillStyle = ball.color;
    //     ctx.fill();
    //     ctx.closePath();
    //   }

      drawRect(rect)

      update();
