// db.workmate.find(
//     {"skill.skillOne":"HTML+CSS"},
//     {name:true, "skill.skillOne": true, _id:false} // true 显示 false 不显示
// )

// db.workmate.find(
//     {age:{$lte:30, $gte:25}},
//     {name:true, "skill.skillOne": true, age: true, _id:false}
// )

// var startDate = new Date('01/01/2018');
// db.workmate.find(
//     {regeditTime: {$gt: startDate}},
//     {name:true, "skill.skillOne": true, age: true, _id:false}
// )

// $in 一个key多value查询
// db.workmate.find(
//     {age: {$in:[25, 33]}}, // 25和33岁的
//     {name:true, "skill.skillOne": true, age: true, _id:false}
// )

// $nin 一个key多不是value查询
// db.workmate.find(
//     {age: {$nin:[25, 33]}}, // 不是25和33岁的
//     {name:true, "skill.skillOne": true, age: true, _id:false}
// )

//$or $and
// db.workmate.find(
//     {$and:[
//         {age:{$gte:30}},
//         {'skill.skillThree': 'PHP'} //年龄大于30或者(并且)会PHP的
//     ]}, 
//     {name:true, "skill.skillOne": true, age: true, _id:false}
// )

//$not
// db.workmate.find(
//     {age: {
//         $not: {
//             $lte:30,
//             $gte:20
//         }
//     }},
//     {name:true, "skill.skillOne": true, age: true, _id:false}
// )

// 数组查找
// db.workmate.find(
//     {interest: ['画画', '聚会', '看电影']}, //全匹配
//     {name:true, interest:true, age: true, _id:false}
// )

// db.workmate.find(
//     {interest: '画画'}, //单匹配
//     {name:true, interest:true, age: true, _id:false}
// )

// $all $or
// db.workmate.find(
//     {interest: {$all:['看电影', '看书']}}, //两个value匹配
//     {name:true, interest:true, age: true, _id:false}
// )

// #in
// db.workmate.find(
//     {interest: {$in:['看电影', '看书']}}, //其中一个value匹配
//     {name:true, interest:true, age: true, _id:false}
// )

// $size
// db.workmate.find(
//     {interest: {$size: 5}}, // 数组长度为5的
//     {name:true, interest:true, age: true, _id:false}
// )

// $slice
// db.workmate.find(
//     {interest: {$size: 3}}, 
//     {name:true, interest: {$slice:-1}, age: true, _id:false} // 只显示最后一项
// )

// 分页  显示2 年龄从小到大
// db.workmate.find(
//     {},
//     {name: true, age:true, _id: false}
// ).limit(2).skip(0).sort({age:1}) 

// $where
// db.workmate.find(
//     {$where: "this.age>30"},
//     {name: true, age:true, _id: false}
// )