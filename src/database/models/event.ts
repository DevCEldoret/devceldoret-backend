import Sequelize, { DataTypes } from "sequelize";

const sequelize = require ("../config/config");

const EventORM = sequelize.define('event', 
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    start_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_attendees: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_female_attendees: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    media_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rsvp_link: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{}
);
module.exports = { EventORM : new EventORM(sequelize, DataTypes),
}