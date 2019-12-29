import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, Index, JoinColumn} from "typeorm";
import Locations from "./locations";
import Activities from "./activities";
import Perks from "./perks";
import Speakers from "./speakers";

@Entity()
export default class events {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;
 
    @Column({nullable: true})
    description: string;
 
    @ManyToOne(type => Locations, location => location.id, { cascade: true, eager: true })
    location: number;

    @Index()
    @Column({type: 'timestamp'})
    start_datetime: Date

    @Index()
    @Column({type: 'timestamp'})
    end_datetime: Date

    @Column({nullable: true})
    attendees?: number

    @Column({nullable: true})
    female_attendees?: number

    @Column({nullable: true})
    media_link?: string

    @Column({nullable: true})
    rsvp_link: string

    @ManyToMany(type => Activities,{nullable:true, cascade: true})
    @JoinTable()
    activities?: Activities[]

    @ManyToMany(type => Perks,{nullable: true, cascade: true})
    @JoinTable()
    perks?: Perks[]

    @ManyToMany(type => Speakers,{nullable: true, cascade: true, eager: true})
    @JoinTable()
    speakers?: Speakers[]


}
