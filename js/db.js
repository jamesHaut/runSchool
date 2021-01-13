$(function() { //页面加载完成后绑定页面按钮的点击事件
    initDatabase();
})
function initDatabase() {
    var db = getCurrentDb(); //初始化数据库
    if(!db) {
        alert("您的浏览器不支持HTML5本地数据库");
        return;
    }
    db.transaction(function(trans) { //启动一个事务，并设置回调函数
        //执行创建表的Sql脚本
        trans.executeSql("create table if not exists my_order(name text,job text,num text,content text,money text, status_ text, timestamp text)", [], function(trans, result) {
        	trans.executeSql("select count(1) as c from my_order;", [], function(trans, result) {
        		if(result.rows[0].c === 0){
        			trans.executeSql("INSERT INTO my_order VALUES(?,?,?,?,?,?,?)", ["王同学", "代画平面图", '1', '测试下2017', '1000', 0, dateFormat(new Date())], function(trans, result) {}, function(trans, message) {
        				//消息的回调函数
//                	alert(message);
        			});
        			trans.executeSql("INSERT INTO my_order VALUES(?,?,?,?,?,?,?)", ["张同学", "代画效果图", '5', '5个房间共5张', '5000', 1, dateFormat(new Date())]);
        			trans.executeSql("INSERT INTO my_order VALUES(?,?,?,?,?,?,?)", ["李同学", "代画立面图", '1', '立面图1张', '1000', 2, dateFormat(new Date())]);
        		}
        	}, function(trans, message) {
        		//消息的回调函数
        	});
        }, function(trans, message) { 
        	//消息的回调函数
        	alert(message);	
        });
        
    });
}
function dateFormat(date, fmt) {
    var ret;
    const opt = {
        "yy+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    if(!fmt){
    	fmt = 'yyyy-mm-dd';
    }
    for (var k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}
function getCurrentDb() {
    //打开数据库，或者直接连接数据库参数：数据库名称，版本，概述，大小
    //如果数据库不存在那么创建之
    var db = openDatabase("myCAD", "1.0", "it's to save demo data!", 1024 * 1024);
    return db;
}