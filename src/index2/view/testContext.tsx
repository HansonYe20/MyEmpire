import { Component } from 'inferno';
import createInfernoContext from 'create-inferno-context';

export default class ViewTestContext extends Component {

  public constructor(props, state){
    super(props, state);
  }

  public state = {
  };

  public componentDidMount() {
    // inferno作者说可以context的api和react一毛一样, 但是没有试出来
    // 暂时没有找到原生的方法, 使用了create-inferno-context去polyfill
  }

  render() {
    return (
      <div>
        <h1>Test Context Page</h1>
        <MyContext.Provider value='dark'>
          <Cantainer1 />
        </MyContext.Provider>
      </div>
    );
  }
};

const MyContext = createInfernoContext('light'); // 默认值

class Cantainer1 extends Component {
  render(){
    return <Cantainer2 />;
  }
}

class Cantainer2 extends Component {
  render(){
    return <MyContext.Consumer>
    {(context) => (
      <div>
        <p>context: {context}</p>
      </div>
    )}
  </MyContext.Consumer>
  }
}