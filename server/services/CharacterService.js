import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    name: { type: String, required: true },
    author: { type: ObjectId, ref: 'User', required: true },
    stats: { type: String }
}, { timestamps: true })

export default class CharacterService {
    get repository() {
        return mongoose.model('Character', _model)
    }
}