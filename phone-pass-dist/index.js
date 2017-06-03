const Bandwidth = require('node-bandwidth');

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
    from: process.env.FROM_NUMBER,
    to: event.to,
    text: event.text
  };

  sendMessage(message);
}

exports.handler = handler;
