import createHistory from 'history/createBrowserHistory';
// Warning telling me to use this instead
// require("history").createBrowserHistory
export default (typeof global.window !== 'undefined') ? createHistory({ basename: '/' }) : null;
