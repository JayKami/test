// 添加用户
db.createUser({
    user: "jspang",
    pwd: "123456",
    customData: {
        name: "技术胖",
        email:"web0432@126.com",
        age:18
    },
    roles:[   //权限
        {
            role:"readWrite",
            db:"company"
        },
        'read'
    ]    
});

//删除用户
db.system.users.remove({user:"jspang"});

// 建立权限
db.auth("jspang","123456")

//打开权限库
// mogod --auth

// 登录
// mongo -u jspang -p 123456 127.0.0.1:27017/admin

//备份
// mongodump
//     --host 127.0.0.1 //IP地址
//     --port 27017 //端口号
//     --out D:/databack/backup //备份到哪里
//     --collection myCollections  //备份哪个集合
//     --db test //备份哪个数据库
//     --username username 
//     --password password

// mongodump --host 127.0.0.1 --port 27017 --out D:/backup/

//还原
// mongorestore
//     --host 127.0.0.1
//     --port 27017
//     --username username
//     --password password
//     <path to the backup>

// mongorestore --host 127.0.0.1 --port 27017 D:/backup/