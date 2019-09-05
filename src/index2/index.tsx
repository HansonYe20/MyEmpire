import './style/index.less';
import { render } from 'inferno';
import routes from './router';

render(routes, document.getElementById('app'));