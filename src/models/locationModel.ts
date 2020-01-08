import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  venue: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  country: string;

}
