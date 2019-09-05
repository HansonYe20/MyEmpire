import { Component } from 'inferno';

export default class ViewTestAnnimation extends Component {

  public constructor(props, state){
    super(props, state);
  }

  public componentDidMount() {
    this.init();
  }

  public init = () => {
    var canvas = document.getElementById('canvas') as any;
    var ctx = canvas.getContext('2d');
    var raf;
    const ball = {
      x: 50,
      y: 50,
      vx: 5,
      vy: 2,
      radius: 25,
      color: 'blue',
      draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const run = () => {
      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      }
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
      ctx.clearRect(0,0, canvas.width, canvas.height);
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;
      raf = window.requestAnimationFrame(run);
    }

    ball.draw();
    canvas.addEventListener('mouseover', function(e){
      raf = window.requestAnimationFrame(run);
    });
    
    canvas.addEventListener('mouseout', function(e){
      window.cancelAnimationFrame(raf);
    });
  }


  render() {
    return (
      <div>
        <h1>AnniBall Page</h1>
        <canvas className="run-div" id="canvas"></canvas>
      </div>
    );
  }
};