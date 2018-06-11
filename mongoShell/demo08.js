var startTime = new Date().getTime();

var db = connect('company');
var rs = db.randomInfo.find({username:'28rhz8'});

rs.forEach(rs => {
    printjson(rs);
});

var runTime = new Date().getTime() - startTime;
print('[Demo] this run time is'+runTime+'ms');

// 建立索引
// db.randomInfo.ensureIndex(
//     {username:1}
// )