const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
});
const { window } = jsdom;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

/* eslint-disable */
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });
