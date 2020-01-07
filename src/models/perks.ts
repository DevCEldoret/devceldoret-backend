import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
 
@Entity()
export default class perks {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column({unique: true})
    type: string;

}
