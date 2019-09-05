import { Component } from 'inferno';
const width = '163';
const height = '132';
export default class ViewTestCanvas extends Component {

  public constructor(props, state){
    super(props, state);
  }

  public componentDidMount() {
    this.act1();
    this.act2();
    this.act3();
    this.act4();
    this.act5();
    this.act6();
    this.act7();
    this.act8();
    this.act9();
  }

  public getCanvasObj = (index) => {
    const canvas = document.getElementById(`canvas${index}`) as any;
    const ctx = canvas.getContext('2d');
    return ctx;
  }

  public act1 = () => {
    const ctx = this.getCanvasObj(1);
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, width, height);
    ctx.strokeRect(20, 20, width, height)
    ctx.clearRect(15, 15, 50, 50)
  }

  public act2 = () => {
    const context = this.getCanvasObj(2);
    context.beginPath();
    context.fillStyle = '#00ffff';
    context.moveTo(0, 132);
    context.quadraticCurveTo(30,20,163,0);
    context.lineWidth = 2;
    context.stroke();
    // 以下两行是画边框
    context.fillStyle = 'blue';
    context.strokeRect(0, 0, width, height);
  }

  public act3 = () => {
    const ctx = this.getCanvasObj(3);
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(75, 75);
    ctx.lineTo(100, 50);
    ctx.closePath();
    ctx.stroke();
    // ctx.fill();
  }

  public act4 = () => {
    const ctx = this.getCanvasObj(4);
    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
  }

  public act5 = () => {
    const ctx = this.getCanvasObj(5);
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI, true); // 整圆弧度为2π, 弧度=(Math.PI/180)*角度
    ctx.stroke();
  }

  public act6 = () => {
    const ctx = this.getCanvasObj(6);
    // 二次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke();
  }

  public act7 = () => {
    const ctx = this.getCanvasObj(7);
    // 三次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(75,40);
    ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);
    ctx.fill();
  }

  public act8 = () => {
    const ctx = this.getCanvasObj(8);
    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }

  public act9 = () => {
    const ctx = this.getCanvasObj(9);
    // 这条路径将先移动到点 (M10 10) 
    // 然后再水平移动80个单位(h 80)，
    // 然后下移80个单位 (v 80)，
    // 接着左移80个单位 (h -80)，
    // 再回到起点处 (z)
    var p = new Path2D("M20 20 h 80 v 80 h -80 Z");
    // ctx.stroke(p);
    ctx.fill(p);
  }

  render() {
    return (
      <div>
        <h1>Canvas Page</h1>
        <div className="canvas-div">
          <canvas id="canvas1"></canvas>
        </div>
        <div className="canvas-div">
          <canvas id="canvas2"></canvas>
        </div>
        <div className="canvas-div">
          <canvas id="canvas3"></canvas>
        </div>
        <div className="canvas-div">
          <canvas id="canvas4"></canvas>
        </div>
        <div className="canvas-div">
          <canvas id="canvas5"></canvas>
        </div>
        <div className="canvas-div">
          <canvas id="canvas6"></canvas>
        </div>
        <div className="canvas-div">
          <canvas id="canvas7"></canvas>
        </div>
        <div className="canvas-div">
          <canvas id="canvas8"></canvas>
        </div>
        <div className="canvas-div">
          <canvas id="canvas9"></canvas>
        </div>
      </div>
    );
  }
};