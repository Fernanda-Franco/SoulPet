const { DataTypes} = require("sequelize");
const { connection} = require("./database")
const Cliente = require("./cliente");

const Pet = connection.define("pet", {
    //configurar a coluna nome
    nome: { 
        //nome VARCHAR NOT NULL
        type: DataTypes.STRING(130),
        allowNull: false, //NOT NULL
    },
    tipo: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    porte: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    dataNasc: {
        //telefone VARCHAR NOT NULL
        type: DataTypes.DATE,
    },
});

//Relacionamento 1:N (Um cliente pode ter N pets)
Cliente.hasMany(Pet);
Pet.belongsTo(Cliente);//Um pet pertence a um cliente

module.exports = Pet;