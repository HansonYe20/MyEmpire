import { Component } from 'inferno';

export default class ViewTestInterceptBack extends Component {

  public constructor(props, state){
    super(props, state);
  }

  public state = {
  };

  public componentDidMount() {
    window.onpopstate = function (event) {
      window.location.href = 'http://www.baidu.com';
      alert('location: ' + document.location + ', state: ' + JSON.stringify(event.state));
    };

    // window.addEventListener('hashchange', () => {
    //   // 触发函数
    //   window.location.href = 'http://www.sina.com';
    // });
  }

  public sayHello = (sth: string): string => {
    return (`${this} say ${sth}`);
  }

  render() {
    return (
      <div>
        <h1>Test InterceptBack Page</h1>
      </div>
    );
  }
};