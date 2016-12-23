var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '')));


 app.use('/', index);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  // superagent.get('https://cnodejs.org/')
  //   .end(function (err, sres) {
  //     // 常规的错误处理
  //     if (err) {
  //       return next(err);
  //     }
  //     // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
  //     // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
  //     // 剩下就都是 jquery 的内容了
  //     var $ = cheerio.load(sres.text);
  //     var items = [];
      // var $elementq;
      // $('#topic_list .topic_title').each(function (idax, element) {
      //   var $element = $(element);
      //   $('#topic_list img').each(function (idx, elementq) {
      //     $elementq = $(elementq);
      //      });
      //     items.push({
      //       title: $element.attr('title'),
      //       href: $element.attr('href'),
      //       author: $elementq.attr('title'),
      //   });
      // });


//       例子：
// $("#table tr").each(function(i,n){
//         $(n).find("td").each(function(j.m){
//
//         });
// });


      // $('#topic_list .cell').each(function (idax, element) {


      //   var $element=  $(element).find('.topic_title');
      //   var $elementq=  $(element).find('img');

      //     items.push({
      //       title: $element.attr('title'),
      //       href: $element.attr('href'),
      //       author: $elementq.attr('title')
      //   });
      // });

      // res.send();
    // });
// });
app.listen(process.env.PORT || 5000);
