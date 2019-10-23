/**
1.npm install mongodb --save-dev / cnpm install mongodb --save-dev
2.var MongoClient = require('mongodb').MongoClient;
 var url = 'mongodb://localhost:27017/test';   连接数据库的地址
 3.连接数据库
 MongoClient.connect(url, function(err, db) {
});
 4.实现增加修改删除
 MongoClient.connect(url, function(err, db) {
    db.collection('user').insertOne({'name':'zhangsan'},function(error,data){
    })
})
*/
var http = require('http');
var ejs = require('ejs');
var MongoClient = require('mongodb').MongoClient;
var Dburl = "mongodb://localhost:27017/"
var url = require('url')
var app = require('./model/route.js')
http.createServer(app).listen(3000)
console.log('server')
app.get('/', function (req, res) {
  // console.log(req)
  var msg = 'gjgjkll';
  ejs.renderFile('views/index.ejs', { msg: msg }, function (err, data) {
    if (err) {
      console.log(err)
    }
    res.send(data)
  })
})
app.get('/add', function (req, res) {
  MongoClient.connect(Dburl, { useUnifiedTopology: true }, function (err, db) {
    if (err) {
      console.log(err)
      console.log('数据库连接失败')
      db.close();
      return
    }
    var dbo = db.db('data')  // data 是数据库名称  user是表名称
    dbo.collection('user').insertOne({
      "name": "打的吗",
      "age": 100
    }, function (error, result) {
      if (error) {
        console.log("增加数据库失败")
        return
      }
      res.send("增加数据成功")
      db.close()
    })
  })
})

app.get('/edit', function (req, res) {
  MongoClient.connect(Dburl, { useUnifiedTopology: true }, function (err, db) {
    if (err) {
      console.log(err)
      console.log('数据库连接失败')
      db.close();
      return
    }
    var dbo = db.db('data')  // data 是数据库名称  user是表名称
    dbo.collection('user').updateOne({
      "name": "打的吗"
    }, { $set: { "age": 666 } }, function (error, data) {
      if (error) {
        console.log("修改数据失败")
        return
      }
      console.log(data)
      res.send("修改数据成功")
      db.close()
    })
  })
})

app.get('/delete', function (req, res) {
  var query = url.parse(req.url, true).query;
  var name = query.name;
  MongoClient.connect(Dburl, { useUnifiedTopology: true }, function (err, db) {
    if (err) {
      console.log(err)
      console.log('数据库连接失败')
      db.close();
      return
    }
    var dbo = db.db('data')  // data 是数据库名称  user是表名称
    dbo.collection('user').deleteOne({
      "name": name
    }, function (error, data) {
      if (error) {
        console.log("修改数据失败")
        return
      }
      console.log(data)
      res.send("修改数据成功")
      db.close()
    })
  })
})

app.get('/find', function (req, res) {
  MongoClient.connect(Dburl, { useUnifiedTopology: true }, function (err, db) {
    if (err) {
      console.log(err)
      console.log('数据库连接失败')
      db.close();
      return
    }
    var list = []
    var dbo = db.db('data')  // data 是数据库名称  user是表名称
    var result = dbo.collection('user').find({})
    result.each(function (error, doc) {
      // console.log(doc);
      if (error) {
        console.log(error);
      } else {
        if (doc != null) {
          list.push(doc);
        } else {  /*doc==null表示数据循环完成*/
          console.log(list);
          db.close();
          res.send("查询数据成功")
        }
      }
    })
  })
})