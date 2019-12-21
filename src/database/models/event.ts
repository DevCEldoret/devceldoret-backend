import Sequelize from "sequelize";
import Location from "./location";

import sequelize from '../config';

class Event extends Sequelize.Model {}

Event.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // We'll be added by tha association
    // location_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    // },
    title: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    start_date_time: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    end_date_time: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    total_attendees: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total_female_attendees: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    media_link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rsvp_link: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: 'event',
  },
);

Event.belongsTo(Location);

export default Event;