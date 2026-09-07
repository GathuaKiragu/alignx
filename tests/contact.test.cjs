const { test } = require('node:test');
const assert = require('node:assert/strict');
const handler = require('../api/contact.js');
const { transporter } = require('../server/mailer.js');

const payload = { name: 'Test User', email: 'test@example.com', message: 'Test inquiry' };
async function request(body, method = 'POST') {
  const res = {
    setHeader() {},
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; }
  };
  await handler({ method, body }, res);
  return res;
}

test('contact handler loads in Node and handles validation and delivery', async t => {
  t.mock.method(console, 'error', () => {});
  let sends = 0;
  const send = t.mock.method(transporter, 'sendMail', async () => { sends++; return {}; });
  for (const body of [null, '{', {}, { ...payload, name: ' ' }, { ...payload, message: 12 }]) {
    assert.equal((await request(body)).statusCode, 400);
  }
  assert.equal((await request(payload, 'GET')).statusCode, 405);
  assert.equal(sends, 0);
  assert.equal((await request(JSON.stringify(payload))).statusCode, 200);
  assert.equal(sends, 2);

  send.mock.mockImplementation(async () => { throw new Error('SMTP unavailable'); });
  const failed = await request(payload);
  assert.equal(failed.statusCode, 500);
  assert.equal(failed.body.success, undefined);
  assert.ok(!failed.body.error.includes('SMTP'));

  let attempt = 0;
  send.mock.mockImplementation(async () => {
    if (++attempt === 2) throw new Error('Acknowledgment rejected');
    return {};
  });
  assert.equal((await request(payload)).statusCode, 200);
  assert.equal(attempt, 2);
});
