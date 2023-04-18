//database.js = arquivo de conexão com o banco de dados
//ele vai ver as variáveis de ambiente e tentar conectar ao MySQL

const {Sequelize} = require("sequelize");

//Criamos o objeto de conexão
const connection = new Sequelize(
    process.env.DB_NAME, //nome reservado para o database
    process.env.DB_USER, //usuario reservado para a conexão
    process.env.DB_PASSWORD,//senha para acesso
    {
        //Informações adicionais da conexão
        host: process.env.DB_HOST,//endereço (banco local)
        dialect: 'mysql'//o banco utilizado
    }
);

//estbelecer conexão usando o objeto
async function authenticate(connection) {
    try{
        //tentar estabelecer conexão
        await connection.authenticate();
        console.log("Conexão estabelecida com sucesso!");
    } catch (err) {
        //err = objeto que guarda detalhes sobre o erro que aconteceu
        console.log("Um erro inesperado aconteceu", err);
    }
}

module.exports = { connection, authenticate };