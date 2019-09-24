import express from 'express'
import ChatService from '../services/ChatService';
import { Authorize } from '../middleware/authorize.js'
import MessageService from '../services/MessageService';

let _characterService = new CharacterService().repository

export default class CharacterController {
    constructor() {
        this.router = express.Router()
            //NOTE all routes after the authenticate method will require the user to be logged in to access
            .use(Authorize.authenticated)
            .get('/:id', this.getByUser)
            .post('', this.create)
            .delete('/:id', this.delete)
        // .put('/:id', this.edit)

    }

    async getByUser(req, res, next) {
        try {
            let data = await _characterService.findById(req.session.uid)
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
            let data = await _characterService.create(req.body)
            res.send(data)
        } catch (error) { next(error) }
    }

    async delete(req, res, next) {
        try {
            await _characterService.findOneAndRemove({ _id: req.params.id, author: req.session.uid })
            res.send("deleted character")
        } catch (error) { next(error) }

    }

    // async edit(req, res, next) {
    //     try {
    //         let data = await _characterService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
    //         if (data) {
    //             return res.send(data)
    //         }
    //         throw new Error("invalid id")
    //     } catch (error) {
    //         next(error)
    //     }
    // }

}
