import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    body: { type: String, required: true },
    authorId: { type: ObjectId, ref: 'User', required: true },
    chatId: { type: ObjectId, ref: 'Chat', required: true }
}, { timestamps: true })

export default class MessageService {
    get repository() {
        return mongoose.model('message', _model)
    }
}