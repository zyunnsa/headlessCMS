import { createClient } from 'microcms-js-sdk';
require('dotenv').config();

export const client = createClient({
  serviceDomain: 'test-202103',
  apiKey: process.env.API_KEY,
});