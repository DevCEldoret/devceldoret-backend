import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import User from "./userModel";
@Entity()
class Role {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public roleName: string;

  @OneToMany(
    type => User,
    user => user.role
  )
  users: User[];
}

export default Role;
