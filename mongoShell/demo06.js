
var db = connect('company')
var result = db.workmate.find();

// hasNext
// while(result.hasNext()){
//     printjson(result.next())
// }

//forEach
result.forEach(function(result) {
    printjson(result);
})