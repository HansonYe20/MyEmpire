import { Component } from 'inferno';
export default class ViewTestAnnimation extends Component {

  public constructor(props, state){
    super(props, state);
  }
  public sun = new Image();
  public moon = new Image();
  public earth = new Image();

  public componentDidMount() {
    this.anni1();
    this.anni2();
  }

  public getCanvasObj = (id) => {
    const canvas = document.getElementById(id) as any;
    const ctx = canvas.getContext('2d');
    return ctx;
  }

  public anni1 = () => {
    let start;
    const element = document.getElementById('SomeElementYouWantToAnimate') as any;
    element.style.position = 'absolute';

    const step = (timestamp) => {
      // console.log(timestamp);
      if (!start){
        start = timestamp;
      }
      var progress = timestamp - start;
      element.style.left = Math.min(progress / 10, 200) + 'px';
      if (progress < 2000) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);

  }

  public draw = () => {
    const ctx = (document.getElementById('canvas') as any).getContext('2d');
  
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0,0,300,300); // clear canvas
  
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.strokeStyle = 'rgba(0,153,255,0.4)';
    ctx.save();
    ctx.translate(150,150);
  
    // Earth
    var time = new Date();
    ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(105,0);
    ctx.fillRect(0,-12,50,24); // Shadow
    ctx.drawImage(this.earth,-12,-12);
  
    // Moon
    ctx.save();
    ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
    ctx.translate(0,28.5);
    ctx.drawImage(this.moon,-3.5,-3.5);
    ctx.restore();
  
    ctx.restore();
    
    ctx.beginPath();
    ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
    ctx.stroke();
   
    ctx.drawImage(this.sun,0,0,300,300);
  
    window.requestAnimationFrame(this.draw);
  }

  public anni2 = () => {
    this.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    this.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    this.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(this.draw);
  }

  render() {
    return (
      <div>
        <h1>Anni Page</h1>
        <div className="rect-div" id="SomeElementYouWantToAnimate"></div>
        <canvas className="anni2" id="canvas"></canvas>
      </div>
    );
  }
};