const {user: service} = require("../../services")
const register = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const result = await service.getOne({email});
        if(result){
            res.status(409).json({
                status: "Conflict",
                code: 409,
                message: "Email in use"


            })
            return;
        }
        const newUser = await service.add({email, password});
        console.log(newUser.email)

        res.status(201).json({
            status: "Created",
            code: 201,
            message: `${newUser.email}`
        })
    } catch (error) {
        next(error)
    }
}

module.exports = register;