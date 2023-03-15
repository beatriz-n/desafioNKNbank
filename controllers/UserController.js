const User = require('../models/User');


module.exports = {
    async index(req, res) {

        const infos = await User.findAll();

        if (infos == "" || infos == null) {
            return res.status(200).send({ message: "Nenhum usuário cadastrado" });

        }

        return res.status(200).send({ infos });

    },
    async store(req, res) {

        const { nome, email, senha, whatsapp, datanascimento } = req.body;

        const info = await User.create({ nome, datanascimento, senha, email, whatsapp });

        const token = generateToken({ id: info.id });

        info.senha = undefined

        return res.status(200).send({
            status: 1,
            message: 'usuário cadastrado com sucesso!',
            info, token

        });

    },
}