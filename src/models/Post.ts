import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export default class Post {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    content: string;
}