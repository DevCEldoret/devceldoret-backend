import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Role from "./roleModel";
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public email: string;

  @Column()
  public password: string;
  
  @ManyToOne(
    type => Role,
    role => role.id,
    { cascade: true, eager: true }
  )
  role: number;
}

export default User;
