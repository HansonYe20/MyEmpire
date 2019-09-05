import { Component, createRef } from 'inferno';

export default class ViewTestRef extends Component {

  public constructor(props, state){
    super(props, state);
    this.myRef = createRef();
  }

  public myRef;
  public ref1;

  public state = {
    currentNode: ''
  };

  public componentDidMount() {
    const node = this.myRef.current.innerText;
  }

  public ceateRef = (ele) => {
    this.ref1 = ele;
  }

  public focusInput = () => {
    this.ref1.focus();
  }

  render() {
    return (
      <div ref={this.myRef}>
        <h1 onClick={this.focusInput}>Test Ref Page</h1>
        <input ref={this.ceateRef}></input>
      </div>
    );
  }
};