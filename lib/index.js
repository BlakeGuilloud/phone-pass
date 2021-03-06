// require('dotenv').config()

import Bandwidth from 'node-bandwidth';

function handler(event, context, callback) {
  const client = new Bandwidth({
    userId: process.env.BANDWIDTH_USER_ID,
    apiToken: process.env.BANDWIDTH_TOKEN,
    apiSecret: process.env.BANDWIDTH_SECRET,
  });

  function sendMessage(message) {
    try {
      client.Message.send(message);
    } catch (err) {
      console.error(err.message || err);
    }
  }

  const message = {
      from: event.from,
      to: '+18438126962',
      text: 'Hello world'
  };

  sendMessage(message);
}

exports.handler = handler;
