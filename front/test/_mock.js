import nock from 'nock';

export const sleep = ms => new Promise(r => setTimeout(r, ms));

export const mockApi = nock
  .expect('http://localhost:3119')
  .defaultReplyHeaders({
    'Access-Control-Allow-Origin': '*',
  });
