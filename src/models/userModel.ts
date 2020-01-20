import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public country: string;

  @Column()
  public city: string;

  @Column()
  public email: string;

  @Column()
  public password: string;
}

export default User;
