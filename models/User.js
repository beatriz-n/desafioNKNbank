const { Model, DataTypes } = require('sequelize');
class infos extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            datanascimento: DataTypes.DATEONLY,
            senha: DataTypes.STRING,
            email: DataTypes.STRING,
            whatsapp: DataTypes.STRING,
        },{sequelize})
    }
}

module.exports = infos;