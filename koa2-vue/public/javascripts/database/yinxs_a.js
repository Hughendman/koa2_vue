const mysql = require('mysql');
const config = require('../../config/database');

const pool  = mysql.createPool({
    host     : config.CommonMDM.database.HOST,
    user     : config.CommonMDM.database.USERNAME,
    password : config.CommonMDM.database.PASSWORD,
    database : config.CommonMDM.database.DATABASE,
    port     : config.CommonMDM.database.PORT
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
