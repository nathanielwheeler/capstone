import express from 'express'
import ChatService from '../services/ChatService';
import { Authorize } from '../middleware/authorize.js'
import MessageService from '../services/MessageService';

let _chatService = new ChatService().repository
let _messageService = new MessageService().repository

export default class ChatController {
    constructor() {
        this.router = express.Router()
            //NOTE all routes after the authenticate method will require the user to be logged in to access
            .use(Authorize.authenticated)
            .get('', this.getAll)
            .get('/:id', this.getById)
            .get('/:id/messages', this.getMessages)
            .post('', this.create)
            // .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }

    async getAll(req, res, next) {
        try {
            //only gets boards by user who is logged in
            let data = await _chatService.find({ author: req.session.uid }).populate('author', 'name')
            return res.send(data)
        }
        catch (err) { next(err) }
    }

    async getMessages(req, res, next) {
        try {
            let data = await _messageService.find({ chatId: req.params.id }).populate('chatId', '_id').populate('author', 'name')
            return res.send(data)
        } catch (error) { next(error) }

    }

    async getById(req, res, next) {
        try {
            let data = await _chatService.findById(req.params.id)
            if (!data) {
                throw new Error("Invalid Id")
            }
            res.send(data)
        } catch (error) { next(error) }
    }

    async create(req, res, next) {
        try {
            //NOTE the user id is accessable through req.body.uid, never trust the client to provide you this information
            req.body.author = req.session.uid
            let data = await _chatService.create(req.body)
            res.send(data)
        } catch (error) { next(error) }
    }

    // async edit(req, res, next) {
    //     try {
    //         let data = await _chatService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
    //         if (data) {
    //             return res.send(data)
    //         }
    //         throw new Error("invalid id")
    //     } catch (error) {
    //         next(error)
    //     }
    // }

    async delete(req, res, next) {
        try {
            await _chatService.findOneAndRemove({ _id: req.params.id, author: req.session.uid })
            res.send("deleted chat")
        } catch (error) { next(error) }

    }

}