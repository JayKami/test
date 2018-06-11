// 一个是unset 一个是multi 
// db.workmate.update({sex:1}, {$set: {money:1000}}, false, true)

// // 返回功能错误
// var resultMessage = db.runCommand({getLastError:1})

// printjson(resultMessage)

// findAndModify
var myModify = {
    findAndModify:"workmate",
    query: {name: 'jspang'},
    update: {$set:{age: 18}},
    // true更新前文档 false更新后文档
    new: true,
}

var resultMessage = db.runCommand(myModify)
printjson(resultMessage)