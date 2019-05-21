import '../style/index.less';
let now = new Date();
setInterval(() => {
  now = new Date();
  console.log(now);
}, 2000);