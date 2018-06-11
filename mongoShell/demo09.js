var startTime = new Date().getTime();

var db = connect('company')

// hint  以什么优先查找 正常数字优先会查的快
var rs = db.randomInfo.find({username:'h2wkep7', randNum0:875224}).hint({randNum0:1})

rs.forEach(rs => {
    printjson(rs);
})

var runTime = new Date().getTime() - startTime;
print('[Demo] this run time is '+runTime+'ms');

//删除索引,要用name 不要用key
db.randomInfo.dropIndex('randNum0_1');