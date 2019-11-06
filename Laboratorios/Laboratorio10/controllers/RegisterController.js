const Register = require(`../models/register`);

const insert = (req, res) => {
let register = new register(req.body);
    register.save((err)=>{
        if(err) {return res.status(500).json({
            message: `Algo salio mal al tratar de insertar un registro`
        })   
        res.status(200).json({
            message: `Ìnsercion de registro exitosa`
        })
    }})
};
const update = (req,res) => {
    let register = req.body
    if(!register_id){
        return res.status(400).json({
            message: `El campo es obligatorio`
        })
    }
    Register.update({id: register_id}, register)
    .then(value => {
        res.status(200).json({
        message: `Operacion de modificar exitosa`
        })
    })
    .catch(err => {
        res.status(500).json({
            message: `Algo salio mal en la operacion modificar`
        })
    })
}


const deleteById = (req, res) => {
    let register = req.body
    if(!register_id){
        return res.status(400).json({
            message: `El campo es obligatorio`
        })
    }
    Register.deleteOne({id: register_id}, register)
    .then(value => {
        res.status(200).json({
        message: `Operacion de eliminar exitosa`
        })
    })
    .catch(err => {
        res.status(500).json({
            message: `Algo salio mal en la operacion eliminar`
        })
    })
}

const getAll = (req,res) => {
    register.find((err, registers)=>{
        if(err) return res.status(500).json({
            message: `Algo salio mal a la hora de seleccionar a todo`
        })
        if(registers){
            res.status(200).json(registers)
        } else {
            res.status(404).json({
                message: `No hay ningun registro`
            })
        }
    })
}

const getOneById = (req,res) => {
    let id = req.params.id

    Register.findById(id, (err, register)=>{
        if(err) return res.status(500).json({
            message: `Algo salio mal`
        })
    if(register){
        res.status(200).json(register)
    }else{
        res.status(404).json({
            message: `No se encontro el registro solicitado`
        })
    }
    })
}

module.exports = {
    insert,
    update,
    deleteById,
    getAll,
    getOneById
}