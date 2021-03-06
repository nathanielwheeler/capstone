import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    body: { type: String, required: true },
    author: { type: ObjectId, ref: 'User', required: true },
    chat: { type: ObjectId, ref: 'Chat', required: true },
    character: { type: ObjectId, ref: 'Character' },
    dialogueBool: { type: Boolean, default: false }
}, { timestamps: true })

export default class MessageService {
    get repository() {
        return mongoose.model('Message', _model)
    }
}