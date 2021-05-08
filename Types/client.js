let database = require('/Service/database');
let exports = module.exports = {};

exports.getClientById = function (id) {
    query = `SELECT * FROM Clients WHERE id = ${id}`;
    data = database.query(query);
}

