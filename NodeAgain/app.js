const os=require("os");

const content={
  user:os.userInfo(),
  uptime: os.uptime(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  operatingSystem: os.type(),
}
console.log(content);