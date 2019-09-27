import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    author: { type: ObjectId, ref: 'User', required: true },
    subscribers: [{ type: ObjectId, ref: 'User' }],
    messageCount: { type: Number, default: 0 }
}, { timestamps: true })

export default class ChatService {
    get repository() {
        return mongoose.model('Chat', _model)
    }
}