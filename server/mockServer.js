const express = require('express'); //引入express模块
const Mock = require('mockjs'); //引入mock模块
const app = express(); //实例化express

// 路由api对应的模拟数据
app.all('/api', function (req, res) {
// mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增

  res.json(Mock.mock({
    "status": 200,
    "data|1-9": [{
      "name|5-8": /[a-zA-Z]/,
      "id|+1": 1,
      "value|0-500": 20
    }]
  }));
});

// 监听8090端口
app.listen('8080');