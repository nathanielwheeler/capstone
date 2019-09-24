import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    authorId: { type: ObjectId, ref: 'User', required: true },
}, { timestamps: true })

export default class ChatService {
    get repository() {
        return mongoose.model('chat', _model)
    }
}