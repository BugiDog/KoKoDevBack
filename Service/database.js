let exports = module.exports = {};

exports.connect = function() {
    const mysql = require("mysql2");

    const connection = mysql.createConnection({
      host: "localhost",
    user: "root",
    database: "KoKoDB",
    password: "kokoko"
    });
    return connection;
}

exports.query = function(query) {
    connection = connect();
    try {
        result = connection.query(query);
        connection.commit();
        return result;
    }
    catch(e) {
        console.log(`Database error: ${e}`);
        return {};
    }
}