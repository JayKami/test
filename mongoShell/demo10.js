db.info.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})

// 全文索引
// db.info.ensureIndex({contextInfo:'text'})

// 全文搜索
// db.info.find({$text:{$search:"programmer family diary -drink"}})  //不是与是或的关系 减号为不查找

// db.info.find({$text:{$search:"\"love PlayGame\" drink"}}) //两个词需要转意符