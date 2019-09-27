import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    body: { type: String, required: true },
    author: { type: ObjectId, ref: 'User', required: true },
    chat: { type: ObjectId, ref: 'Chat', required: true },
    style: { type: ObjectId, ref: 'Character', default: '' }
}, { timestamps: true })

export default class MessageService {
    get repository() {
        return mongoose.model('Message', _model)
    }
}