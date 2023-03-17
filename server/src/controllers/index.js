const prisma = require('../database')

module.exports = {
    async read(req, res) {
        try {
            const { id } =req.query;
            if(id) {
                const student = await prisma.students.findUnique({where: {id: Number (id)}});
                if(!student) return res.status(400).json("Aluno não encontrado");
                return res.json(student);

            } else{
                const students = await prisma.students.findMany();
                return res.json(students);
            }
        } catch (error) {
            console.error(error);
        }
    },

    async create(req, res) {
        try {
            const { name, email, phone, city } = req.body;
            if ( !name || !email || !phone || !city || 
                name == "" || email == "" || phone == "" || city == "") {
                return res.status(400).json("Por Favor preencha todos os dados");
            }

            const studentEmail = await prisma.students.findUnique({where: {email}});
            if(studentEmail) return res.status(400).json("Email já em uso")

            await prisma.students.create({data: {name, email, phone, city}});

            return res.json("Aluno cadastrdo com sucesso");

        } catch (error) {
            console.error(error);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email, phone, city } = req.body;
            if (!name || 
                !email || 
                !phone || 
                !city || 
                name == "" || 
                email == "" || 
                phone == "" || 
                city == ""
                ) {
                return res.status(400).json("Por Favor preencha todos os dados");
            }

            const student = await prisma.students.findUnique({where: {id: Number(id)}});
            if(!student) return res.status(400).json("Aluno não encontrado");            

            const studentEmail = await prisma.students.findUnique({where: {email}});
            if(studentEmail && (studentEmail.email != studentEmail.email)) return res.status(400).json("Email já em uso")

            await prisma.students.update({data: {name, email, phone, city}, where: {id: Number(id)}});

            return res.json("Aluno atualizado com sucesso");

        } catch (error) {
            console.error(error);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;                   
            const student = await prisma.students.findUnique({where: {id: Number(id)}});
            if(!student) return res.status(400).json("Aluno não encontrado");            
            await prisma.students.delete({where: {id: Number(id)}});
            return res.json("Aluno deletado com sucesso");

        } catch (error) {
            console.error(error);
        }
    },
};