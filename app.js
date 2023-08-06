const path = require('path')
const process = require('process')
const os = require('os')

const cwd = path.resolve();
console.log({cwd});

const separator = path.sep;
console.log({separator});

const extName = path.extname('C:\Users\USER\OneDrive\Desktop\ALTSCHOOLAFRICA\aderonkes-module-assignment\app.js');
console.log({extName});

const pid = process.pid;
console.log({pid});

const userInfo = os.userInfo();
console.log({userInfo});

const platform = os.platform();
console.log({platform});