
require('../core/CommonUtil');
var pool=require('../jdbc').pool;

/**
 * jdbc model 客户端
 */
SqlClient=function(){};
SqlClient.prototype={

	//根据id获取
	getById : function(obj,callback,selectWhat,join){
		pool.getConnection(function(err, connection) {
			var sql = 'SELECT ';
			if(selectWhat) sql += selectWhat;
			else sql += ' A.*';
			sql += ' FROM '+obj['tablename']+' AS A';

			if(join) sql += join;
			sql += ' WHERE A.ID = '+obj['id'];

			console.log('##    sql: '+sql);
			connection.query(sql, function(err, result) {
				if(err){
		        	console.log('[getById error] - ',err.message);
		        	return;
		        }
				if(result != null && result.length > 0){
					obj = result[0];
					callback(obj);
				}else{
					callback(null);
				}
	        });
			connection.release();
		});
	},

	//查询列表
	query : function(obj, callback, where, limit, count, selectWhat, join){
		pool.getConnection(function(err, connection) {
			var sql = 'SELECT ';
			if(count) sql += ' count(A.id)';
			else if(selectWhat) sql += selectWhat;
			else sql += ' A.*';
			sql += ' FROM '+obj['tablename']+' AS A';

			if(join) sql += join;
			if(where) sql += where;
			if(limit) sql += limit;

			// console.log('##    sql: '+sql);
			connection.query(sql, function(err, result) {
				if(err){
		        	console.log('[query error] - ',err.message);
		        	return;
		        }
	            callback(result);
	        });
			connection.release();
		});
	},

	//创建
	create : function(obj,callback){
		var cols = [];
		var params = [];
		var paramValues = [];
		for(var name in obj){
			if(obj.hasOwnProperty(name) && name != 'tablename'){
				if(name == 'id' && CommonUtil.isStrEmpty(obj[name])){//mysql id 自增处理
				}else{
					// console.log(obj.hasOwnProperty(name));
					cols.push(name);
					params.push('?');
					if(obj[name] == 'null' || obj[name] == 'undefined') obj[name] = null;
					paramValues.push(obj[name]);
				}
			}
	    }
		pool.getConnection(function(err, connection) {
			var sql = 'INSERT INTO '+obj['tablename']+'('+cols.join(',')+') VALUES('+params+')';
			console.log('##    sql: '+sql);
			console.log('## values: '+paramValues);
			connection.query(sql,paramValues,function (err, result) {
		        if(err){
		        	console.log('[create error] - ',err.message);
		        	return;
		        }
		        callback(result.insertId);//插入的id
			});
			connection.release();
		});
	},

	//更新，如果不为null就更新
	update : function(obj,callback){
		var cols = [];
		var paramValues = [];
		for(var name in obj){
			if(obj.hasOwnProperty(name) && name != 'tablename' && name != 'id' && obj[name] != null){
				cols.push(name+"=?");
				paramValues.push(obj[name]);
			}
	    }
		pool.getConnection(function(err, connection) {
			var sql = 'UPDATE '+obj['tablename']+' SET '+cols.join(',') + ' WHERE ID = ' + obj['id'];
			console.log('##    sql: '+sql);
			console.log('## values: '+paramValues);
			connection.query(sql,paramValues,function (err, result) {
		        if(err){
		        	console.log('[update error] - ',err.message);
		        	return;
		        }
		        callback(result.affectedRows);//影响的行数
			});
			connection.release();
		});
	},

	//删除
	deleteById : function(obj,callback){
		pool.getConnection(function(err, connection) {
			var sql = 'DELETE FROM '+obj['tablename']+' WHERE ID = '+obj['id'];
			console.log('##    sql: '+sql);
			connection.query(sql, function(err, result) {
				if(err){
		        	console.log('[deleteById error] - ',err.message);
		        	return;
		        }
				callback(result.affectedRows);//影响的行数
	        });
			connection.release();
		});
	},

	//执行SQL
	queryBySql : function(sql,paramValues,callback){
		pool.getConnection(function(err, connection) {
			console.log('##    sql: '+sql);
			console.log('## values: '+paramValues);
			connection.query(sql,paramValues,function (err, result) {
				if(err){
		        	console.log('[queryBySql error] - ',err.message);
		        	return;
		        }
	            callback(result);
			});
			connection.release();
		});
	}

};



