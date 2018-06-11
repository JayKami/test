var db=connect('company');
// 错误修改 整个都被替换了
// db.workmate.update({name:'MinJie'}, {sex:0});

// var workmate3={
//     name: 'MinJie',
//     age:18,
//     sex:0,
//     job:'UI',
//     skill:{
//         skillOne: 'PhotoShop',
//         skillTwo: 'UI',
//         skillThree: 'PPT'
//     },
//     regeditTime: new Date()
// }

//     db.workmate.update({name:'MinJie'}, workmate3);

//-------------------------------
// $set
// db.workmate.update({name:'MinJie'},{"$set":{sex:0, age:20}});
// db.workmate.update({name:'MinJie'},{$set:{"skill.skillThree":'word'}});

// $unset  有age直接删除
// db.workmate.update({name:'MinJie'},{$unset:{age:''}});
// 没有直接添加到末尾
// db.workmate.update({name:'MinJie'},{$set:{age:20}});

// $inc 数字才可以加减
// db.workmate.update({name:'MinJie'},{$inc:{age:-2}});

// $melti true代表查找第一个继续查找
// db.workmate.update({},{$set:{interset:[]}}, {multi: true});

// $upsert true代表没有就添加
// db.workmate.update({name: 'xiaoWang'},{$set:{age: 20}}, {upsert:true});

// $push 数组操作 集合操作也可以(会变成一个数组)
// db.workmate.update({name:'xiaoWang'}, {$push: {interest: 'draw'}})
// db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour" : 'draw'}});

// $ne 没有则进行修改  有则不修改
// db.workmate.update({name:'xiaoWang', interest:{$ne: 'Game'}}, {$push:{interest: 'playGame'}})
// $addToSet 同上
// db.workmate.update({name:'xiaoWang'}, {$addToSet:{interest: 'readBook'}})

//$each 追加数组
// var newInterests = ['Sing', 'Dance', 'Code'];
// db.workmate.update({name: 'xiaoWang'}, {$addToSet:{interest:{$each:newInterests}}})

// $pop 有两个选项 1是从末端进行删除 -1从开始的位置进行删除
// db.workmate.update({name: 'xiaoWang'}, {$pop:{interest: 1}})
// db.workmate.update({name: 'xiaoWang'}, {$pop:{interest: -1}})

// 数组定位修改 update是非应答式操作
// db.workmate.update({name:'xiaoWang'}, {$set:{"interest.2":"code"}}) //把第三个修改

//findAndModify 

//db.runCommand()


print('[update]:The data was updated successfully');