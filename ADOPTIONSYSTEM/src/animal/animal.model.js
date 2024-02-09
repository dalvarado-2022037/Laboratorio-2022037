import mongoose from 'mongoose'

const animalSchema = mongoose.Schema({
    keeper:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true,
        unique: true
    },
    age:{
        type: String,
        require: true
    },
    size:{
        type: String,
        require: true
    },
    race:{
        type: String,
        require: true
    }
})

export default mongoose.model('animal', animalSchema)