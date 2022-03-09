import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Post from '../models/Post';

export default {
    async index(req: Request, res: Response) {
        const postsRepository = getRepository(Post);

        const posts = await postsRepository.find();

        return res.json(posts);
    },
    async show(req: Request, res: Response) {
        const { id } = req.params;

        const postsRepository = getRepository(Post);

        const post = await postsRepository.findOneOrFail(id);

        return res.json(post);
    },
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const postsRepository = getRepository(Post);

        if (!await postsRepository.findOne(id)) {
            return res.status(400).json(Error("Post doesn't exist").message);
        }

        await postsRepository.delete(id);

        return res.status(204).end();
    },
    async create(req: Request, res: Response) {
        const {
            title,
            description,
            content
        } = req.body;

        const postsRepository = getRepository(Post);

        const post = postsRepository.create({
            title,
            description,
            content
        });

        await postsRepository.save(post);

        return res.status(201).json(post);
    },
    async update(req: Request, res: Response) {
        const {
            id,
            title,
            description,
            content
        } = req.body;

        const postsRepository = getRepository(Post);

        const post = await postsRepository.findOne(id)

        if (!post) {
            return res.status(400).json(Error("Post doesn't exist").message);
        }

        post.title = title.trim() ? title : post.title;
        post.description = description.trim() ? description : post.description;
        post.content = content.trim() ? content : post.content;

        await postsRepository.save(post);

        return res.json(post);
    }
}