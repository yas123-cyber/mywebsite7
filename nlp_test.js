import { nlpParser } from './utils/nlpParser.js';

console.log("jewelry:", JSON.stringify(nlpParser("jewelry"), null, 2));
console.log("products under 5000:", JSON.stringify(nlpParser("products under 5000"), null, 2));
