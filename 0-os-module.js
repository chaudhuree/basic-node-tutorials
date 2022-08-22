const os = require('os');
console.log("🚀 ~ file: 0-os-module.js ~ line 3 ~ os.userInfo()", os.userInfo())

// method returns the system uptime in seconds
console.log("🚀 ~ file: 0-os-module.js ~ line 6 ~ os.uptime()", os.uptime())

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log("🚀 ~ file: 0-os-module.js ~ line 13 ~ currentOS", currentOS)
