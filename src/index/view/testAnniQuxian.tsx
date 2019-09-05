import { Component } from 'inferno';

export default class ViewTestQuxian extends Component {

  public constructor(props, state) {
    super(props, state);
  }

  public percent = 0;
  public runId;

  public state ={
    circleStyle: {},
  }

  public componentDidMount() {
    this.runId = window.requestAnimationFrame(this.runLine);
  }

  public init1 = () => {
    const canvas = document.getElementById('canvas') as any;
    const context = canvas.getContext('2d') as any;
    canvas.width = '163';
    canvas.height = '132';
    context.beginPath();
    context.fillStyle = '#999';
    context.moveTo(0, 132);
    // context.lineWidth = 2;
    context.quadraticCurveTo(30, 20, 163, 0);
    context.lineTo(163, 2);
    context.quadraticCurveTo(32, 20, 2, 132);
    context.fill();
    // context.stroke();
  }

  public init2 = () => {
    const canvas = document.getElementById('canvas') as any;
    const context = canvas.getContext('2d') as any;
    // width: 327px;
    // height: 265px;
    canvas.width = '163';
    canvas.height = '132';
    context.beginPath();
    context.moveTo(0, 132);
    context.lineWidth = 5;
    context.lineCap = "square"; // square round butt
    context.quadraticCurveTo(30, 20, 163, 0);
    context.strokeStyle = 'rgba(101, 101, 117, 0.7)';  // rgb(157, 157, 175)
    context.stroke();
  }
  public start = 0;

  public init3 = () => {
    const canvas = document.getElementById('canvas') as any;
    const context = canvas.getContext('2d') as any;
    // width: 327px;
    // height: 265px;
    canvas.width = '163';
    canvas.height = '132';
    context.beginPath();
    // this.drawCurvePath1(context, [0, 132], [30, 20], [163, 0]);
    // this.drawCurvePath2(context, [0, 132], [163, 0], 0.3);
    this.drawCurvePath3(context, [0, 132], [163, 0], 0.3, 80);
    context.lineWidth = 5;
    context.lineCap = "square"; // square round butt
    context.strokeStyle = 'rgba(101, 101, 117, 0.7)';  // rgb(157, 157, 175)
    context.stroke();
  }

  public runLine = (percent) => {
    const canvas = document.getElementById('canvas') as any;
    const context = canvas.getContext('2d') as any;
    canvas.width = '163';
    canvas.height = '132';
    context.beginPath();
    if(this.percent < 100){
      this.percent += 1;
      this.drawCurvePath3(context, [0, 132], [163, 0], 0.3, this.percent);
      context.lineWidth = 5;
      context.lineCap = "square"; // square round butt
      context.strokeStyle = 'rgba(101, 101, 117, 0.7)';  // rgb(157, 157, 175)
      context.stroke();
      this.runId = window.requestAnimationFrame(this.runLine);
    } else {
      window.cancelAnimationFrame(this.runId);
      this.drawCurvePath3(context, [0, 132], [163, 0], 0.3, 100);
      context.lineWidth = 5;
      context.lineCap = "square"; // square round butt
      context.strokeStyle = 'rgba(101, 101, 117, 0.7)';  // rgb(157, 157, 175)
      context.stroke();
    }
  }

  /**
   * 绘制二次贝赛尔曲线路径
   * @param  {CanvasRenderingContext2D} ctx
   * @param  {Array<number>} p0
   * @param  {Array<number>} p1
   * @param  {Array<number>} p2
   */
  public drawCurvePath1 = (context, p0, p1, p2) => {
    context.moveTo(p0[0], p0[1]);
    context.quadraticCurveTo(
      p1[0], p1[1],
      p2[0], p2[1]
    );
  }

/**
 * 绘制一条曲线路径
 * @param  {Object} ctx canvas渲染上下文
 * @param  {Array<number>} start 起点
 * @param  {Array<number>} end 终点
 * @param  {number} curveness 曲度(0-1)
 */
public drawCurvePath2 = ( context, start, end, curveness ) => {
  // 计算中间控制点
  var cp = [
       ( start[ 0 ] + end[ 0 ] ) / 2 - ( start[ 1 ] - end[ 1 ] ) * curveness,
       ( start[ 1 ] + end[ 1 ] ) / 2 - ( end[ 0 ] - start[ 0 ] ) * curveness
  ];
  context.moveTo( start[ 0 ], start[ 1 ] );
  context.quadraticCurveTo( 
      cp[ 0 ], cp[ 1 ],
      end[ 0 ], end[ 1 ]
  );
}

  /**
   * 绘制一条曲线路径
   * @param  {Object} ctx canvas渲染上下文
   * @param  {Array<number>} start 起点
   * @param  {Array<number>} end 终点
   * @param  {number} curveness 曲度(0-1)
   * @param  {number} percent 绘制百分比(0-100)
   */
  public drawCurvePath3 = ( ctx, start, end, curveness, percent ) => {
    console.log(percent);
    var cp = [
      ( start[ 0 ] + end[ 0 ] ) / 2 - ( start[ 1 ] - end[ 1 ] ) * curveness,
      ( start[ 1 ] + end[ 1 ] ) / 2 - ( end[ 0 ] - start[ 0 ] ) * curveness
    ];
    ctx.moveTo( start[ 0 ], start[ 1 ] );
    for ( var t = 0; t <= percent / 100; t += 0.01 ) {
      var x = this.quadraticBezier( start[ 0 ], cp[ 0 ], end[ 0 ], t );
      var y = this.quadraticBezier( start[ 1 ], cp[ 1 ], end[ 1 ], t );
      ctx.lineTo( x, y );
      this.setState({
        circleStyle: {
          'left': `${x}px`,
          'top': `${y}px`,
        }
      });
    }
  }

  public quadraticBezier = ( p0, p1, p2, t ) => {
    var k = 1 - t;
    return k * k * p0 + 2 * ( 1 - t ) * t * p1 + t * t * p2;    // 这个方程就是二次贝赛尔曲线方程
  }

  render() {
    return (
      <div>
        <h1>AnniQuxian Page</h1>
        <div className="quxian-div">
          <canvas id="canvas"></canvas>
          <canvas id="canvas-value"></canvas>
          <div className="circle" style={this.state.circleStyle}></div>
        </div>
      </div>
    );
  }
};