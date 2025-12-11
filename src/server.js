require('dotenv').config();
const express = require('express');

const app = express();

// Parse JSON from OpenAI webhooks
app.use(express.json());

// Simple health check route
app.get('/', (_req, res) => {
  res.send('AlemSpa AI Receptionist webhook server is running.');
});

// OpenAI webhook endpoint
app.post('/openai-webhook', (req, res) => {
  const webhookId = req.header('webhook-id');
  const eventType = req.body?.type;

  console.log('==== OpenAI Webhook Received ====');
  console.log('webhook-id:', webhookId);
  console.log('event type:', eventType);
  console.log('body:', JSON.stringify(req.body, null, 2));
  console.log('=================================');

  res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Webhook server listening on port ${port}`);
});
