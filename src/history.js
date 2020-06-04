import { createBrowserHistory } from 'history';

export default (typeof global.window !== 'undefined')
  ? createBrowserHistory({ basename: '/' })
  : null;
