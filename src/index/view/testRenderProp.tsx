import { Component, createRef } from 'inferno';
import PropTypes from 'prop-types';

export default class ViewTestRef extends Component {

  public constructor(props, state){
    super(props, state);
  }

  public state = {
    x: 0, y: 0 
  };

  public componentDidMount() {
  }

  public handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
        <h1>移动鼠标!</h1>
        <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
};