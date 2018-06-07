const mysql = require('mysql');
const config = require('../../config/database');

const pool  = mysql.createPool({
    host     : config.yinxs_a.database.HOST,
    user     : config.yinxs_a.database.USERNAME,
    password : config.yinxs_a.database.PASSWORD,
    database : config.yinxs_a.database.DATABASE,
    port     : config.yinxs_a.database.PORT
});

let query = ( sql, values ) => {

    return new Promise(( resolve, reject ) => {
        pool.getConnection( (err, connection) => {
            console.log(err);
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })

};

let test_a = () => {
    let _sql = `这里填入sql语句`;
    return query( _sql );
};

let test_b = (id) => {
    let _sql = `这里填入sql语句`;
    return query( _sql );
};


let test_c = (id) => {
    let _sql = `这里填入sql语句`;
    return query( _sql );
};


module.exports = {
    query,
    test_a,
    test_b,
    test_c
};
