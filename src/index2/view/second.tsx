// import '../style/index.less';
// let now = new Date();
// const emoji = ["😆","😳","🙂","🙄","😠","😏","😱","😯","😈","😎"];
// setInterval(() => {
//   print();
// }, 1000);

// function print(): void{
//   console.log(emoji[Math.floor(Math.random()*10)]);
// }

import { render, Component } from 'inferno';

const container = document.getElementById("app");

export default class SecondIndex extends Component { // export default 

  public state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <h1>我屮艸芔茻</h1>
        <span>Counter is at: { this.state.counter }</span>
      </div>
    );
  }
};

// render(ViewIndex, container);