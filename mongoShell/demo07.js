// 生成随机数
function GetRandomNum(min, max){
    let range = max - min;
    let rand = Math.random();
    return (min + Math.round(rand * range))
}

// console.log(GetRandomNum(10000, 99999))

// 生成随机用户名
function GetRadomUserName(min, max) {
    let tempStringArray = "123456789qwertyuiopasdfghjklzxcvbnm".split("");
    let outputtext="";
    for(let i = 1; i < GetRandomNum(min, max); i++) {
        outputtext += tempStringArray[GetRandomNum(0, tempStringArray.length)]
    }
    return outputtext;
}

// console.log(GetRadomUserName(7,16));
// 插入200万条数据
var startTime = (new Date()).getTime();
var db = connect('company');
var tempInfo = [];
for (let i = 0; i < 2000000; i++) {
    tempInfo.push({
        username: GetRadomUserName(7,16),
        regediteTime: new Date(),
        randNum0: GetRandomNum(100000, 999999),
        randNum1: GetRandomNum(100000, 999999),
        randNum2: GetRandomNum(100000, 999999),
        randNum3: GetRandomNum(100000, 999999),
        randNum4: GetRandomNum(100000, 999999),
        randNum5: GetRandomNum(100000, 999999),
        randNum6: GetRandomNum(100000, 999999),
        randNum7: GetRandomNum(100000, 999999),
        randNum8: GetRandomNum(100000, 999999),
        randNum9: GetRandomNum(100000, 999999)
    })
}

db.randomInfo.insert(tempInfo);
var endTime = (new Date()).getTime();

print("[demo]:------------------"+endTime+"ms")