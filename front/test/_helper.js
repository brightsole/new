const { JSDOM } = require('jsdom');
const test = require('ava');

global.test = test;

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/',
});
const { window } = jsdom;

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
global.cancelAnimationFrame = callback => {
  setTimeout(callback, 0);
};

/* eslint-disable */
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });
