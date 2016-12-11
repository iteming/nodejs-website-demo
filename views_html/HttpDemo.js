// //HttpWrapper.wrapReqParams

// 来源：http://liuxufei.com/blog/jishu/798.html
// 取得 GET Request 的 Query Strings：
//
// GET /test?name=fred&tel=0926xxx572
//
// app.get('/test', function(req, res) {
//     console.log(req.query.name);
//     console.log(req.query.tel);
// });
//
// 如果是表单且是用 POST method：
//
// <form action='/test' method='post'>
//     <input type='text' name='name' value='fred'>
//     <input type='text' name='tel' value='0926xxx572'>
//     <input type='submit' value='Submit'>
//     </form>
//     app.post('/test', function(req, res) {
//         console.log(req.query.id);
//         console.log(req.body.name);
//         console.log(req.body.tel);
//     });
//
// 当然也可以 Query Strings 和 POST method 的表单同时使用：
//
// <form action='/test?id=3' method='post'>
//     <input type='text' name='name' value='fred'>
//     <input type='text' name='tel' value='0926xxx572'>
//     <input type='submit' value='Submit'>
//     </form>
//     app.post('/test', function(req, res) {
//         console.log(req.query.id);
//         console.log(req.body.name);
//         console.log(req.body.tel);
//     });
//
// 顺带补充，还有另一种方法传递参数给 Server，就是使用路径的方式，可以利用 Web Server 的 HTTP Routing 來解析，常见于各种 Web Framework。這不算是传统标准规范的做法，是属于 HTTP Routing 的延伸应用。
//
// GET /hello/fred/0926xxx572
//
// app.get('/hello/:name/:tel', function(req, res) {
//     console.log(req.params.name);
//     console.log(req.params.tel);
// });