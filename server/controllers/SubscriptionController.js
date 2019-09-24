import express from 'express'
import ChatService from '../services/ChatService';
import { Authorize } from '../middleware/authorize.js'
import UserService from '../services/UserService';

let _userService = new UserService().repository
let _chatService = new ChatService().repository

export default class SubscriptionController {
    constructor() {
        this.router = express.Router()
            //NOTE all routes after the authenticate method will require the user to be logged in to access
            .use(Authorize.authenticated)
            .get('', this.getSubscriptions)
            .post('', this.create)
            // .put('/:id', this.edit)
            .delete('/:id', this.delete)
    }

    // NOTE This function returns an array with the most recent message at index 0
    async getSubscriptions(req, res, next) {
        try {
            let data = await _userService.find({ id: req.session.uid })
            return res.send(data)
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