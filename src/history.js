import createHistory from 'history/createBrowserHistory';

export default (typeof global.window !== 'undefined') ? createHistory({ basename: '/' }) : null;
