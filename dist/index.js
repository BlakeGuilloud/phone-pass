'use strict';

var _nodeBandwidth = require('node-bandwidth');

var _nodeBandwidth2 = _interopRequireDefault(_nodeBandwidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handler(event, context, callback) {
  var client = new _nodeBandwidth2.default({
    userId: process.env.BANDWIDTH_USER_ID,
    apiToken: process.env.BANDWIDTH_TOKEN,
    apiSecret: process.env.BANDWIDTH_SECRET
  });

  function sendMessage(message) {
    try {
      client.Message.send(message);
    } catch (err) {
      console.error(err.message || err);
    }
  }

  var message = {
    from: event.from,
    to: '+18438126962',
    text: 'Hello world'
  };

  sendMessage(message);
} // require('dotenv').config()

exports.handler = handler;