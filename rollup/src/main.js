// src/main.js
import { version } from '../package.json';
import answer from 'the-answer'
import _ from 'lodash'

export default () => {
  console.log('version ' + version);
  console.log(`the answer is ${answer}`);
}