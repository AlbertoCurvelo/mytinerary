const Joi = require('joi')

const validator = {
    validNewAccount: (req, res, next) => {
        const schema = Joi.object({
            firtsName: Joi.string().trim().required().min(2).max(15),
            lastName: Joi.string().trim().required().pattern(/(?=.*\d)/).min(5),
            userName: Joi.string().trim().required().min(2).max(15),
            mail: Joi.string().trim().required().email({ tlds: {allow: false} }),
            urlPic: Joi.string().trim().required().min(2).max(50),
            contry: Joi.string().trim().required().min(2).max(20),
            password: Joi.string().trim().required().min(2).max(15),
            typeAccount: Joi.string().trim().required().min(2).max(8)
        })

        const validation = schema.validate(req.body, {abortEarly: false})

        if (!validation.error) {
            next()
        } else {
            res.json({success: false, errores: ['Hubo un error en los datos, verifique.']})
        }
    }
}

module.exports = validator