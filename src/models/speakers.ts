import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
 
@Entity()
export default class speakers {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({length: 1})
    gender: string;

    @Column({nullable: true})
    bio?: string;

    @Column({nullable: true})
    job_title?: string;

    @Column({type: 'bytea', nullable: true})
    image?: string

}
