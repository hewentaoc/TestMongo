 let mongo = require('mongodb').MongoClient;
 let url = 'mongodb://127.0.0.1:27017/test';

 /*
 * 插入单条数据
 * collection 表示集合  表示插入数据到哪个集合中
 * obj 表示插入数据
 * callback 表示插入成功的回调函数
 *
 * */
 function insertOne (collection, obj, callback) {
     mongo.connect(url,function (error , db) {
         if(error == null) {
            let database = db.db('test');/*表示使用哪个数据库*/
            database.collection(collection).insert(obj,callback);
            db.close(); /* 关闭数据库*/
         }else{
             console.log(error);
         }
     })
 }
/*
* 插入多条数据
* collection代表集合
* objs 代表是一个数组 插入多条数据
*
*
* */
 function insertMany (collection , objs , callback){
     mongo.connect(url , function (error , db) {
         if(error == null){
             let database = db.db('test');
             database.collection(collection).insertMany(objs,callback);
             db.close();
         }else{
             console.log(error);
         }
     })
 }

 /*
 * 更新一条数据 updateOne
 * collection 选择操作哪个集合
 * where 更改哪条数据{name:'hwt'}
 * update 更改数据中的哪个内容,将年龄改为18{$set:{age:18}}
 *
 * */
 function update (collection , where, update , callback) {
     mongo.connect(url , function (error , db) {
            if(error == null) {
                let database = db.db('test');
                database.collection(collection).updateOne(where,update,callback);
                db.close();
            }else{
                console.log(error)
            }
     })
 }

/*
* 查询数据
* collection 操作哪个集合
* where 用什么条件进行查询
* toArray 将查询结果展示成数组
* */
 function find (collection , where , callback) {
    mongo.connect(url,function (error , db) {
        if(error == null) {
            let database = db.db('test');
            database.collection(collection).find(where).toArray(callback);
            db.close();
        }else{
            console.log(error);
        }
    })
 }
 /*
 * 删除一条数据  deleteOne
 * where 根据什么条件进行数据的删除
 *
 * */
 function deleteDate(collection,where, callback) {
    mongo.connect(url , function (error , db) {
        if(error == null) {
            let database = db.db('test');
            database.collection(collection).deleteOne(where,callback);
            db.close();
        }else{
            console.log(error)
        }
    })
 }
//  deleteDate("student",{name:"sll"},function (error , result) {
//       if(error == null) {
//           console.log("OK");
//       }else{
//           console.log(error);
//       }
//  })

//  find('student',{name:'hwt'},function (error,result) {
//     if(error == null){
//         console.log(result);
//     }else{
//         console.log(error);
//     }
//  })

//  update('student',{name:'hwt'},{$set:{age:18}},function (error, result) {
//         if(error == null){
//             console.log('OK');
//         }else{
//             console.log(error);
//         }
//  })
 // insertOne('student',{name:"hwt",age:24,sex:1},function (error,result) {
 //        if(error == null) {
 //            console.log('OK');
 //        }else{
 //            console.log(error);
 //        }
 // })
 //
 // insertMany('student',[{name:"wthe",age:23,sex:1},{name: 'sll',age:23}],function (error,result) {
 //        if(error == null) {
 //            console.log("OK");
 //        }else{
 //            console.log(error);
 //        }
 // })











 mongo.connect(url,function (error , db) {
    if(error == null){
        let database = db.db('test');
        database.collection('student').find({}).toArray(function (error,res) {
            console.log(res);
        })
    }else{
        console.log(error);
    }
 });