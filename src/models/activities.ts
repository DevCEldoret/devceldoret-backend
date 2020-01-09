import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
 
@Entity()
export default class activities {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column({unique: true})
    type: string;

}
