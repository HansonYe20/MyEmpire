
const emojiArray = ["😆","😳","🙂","🙄","😠","😏","😱","😯","😈","😎"];

import { Component } from 'inferno';
// import { BaseComponent } from '../../../lib/baseComponent';

export default class ViewIndex extends Component {

  public constructor(props, state){
    super(props, state);
    this.clickTest3 = this.clickTest3.bind(this);
    alert('menu');
  }

  public state = {
    emoji: '',
    stopFlag: false
  };

  public componentDidMount() {
    this.randomEmoji();
  }

  public randomEmoji(): void{
    let emoji: string;
    setInterval(() => {
      emoji = emojiArray[Math.floor(Math.random()*10)];
      this.setState({
        emoji
      });
    }, 500);
  };

  public clickTest1 = () => {
    console.log(this.state.stopFlag);
    this.setState((state: any, props)=> ({
      stopFlag: !state.stopFlag
    }));
  }

  public clickTest2(id, e){
    console.log(2);
  }

  public clickTest3(){
    console.log(3);
  }

  render() {
    return (
      <div>
        <h1>Index Page</h1>
        <h3>变脸</h3>
        <span> { this.state.emoji }</span>
        <br/>
        <button onClick={this.clickTest1}>点击</button>
        <button onClick={(e) => this.clickTest2(2, e)}>敲我</button>
        <button onClick={this.clickTest3}>Click me</button>
      </div>
    );
  }
};