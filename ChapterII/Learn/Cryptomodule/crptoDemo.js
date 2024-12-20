import crypto from 'crypto';
const harsh=crypto.createHash('sha256');
harsh.update('Duck');
console.log(harsh.digest('base64'));
