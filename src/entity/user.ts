import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn() public id: number;
  @Column() public firstName: string;
  @Column() public lastName: string;
  @Column() public email: string;
  @Column() public isAdmin: boolean;
  @Column() public username: string;
  @Column() public password: string;
}

export default User;
