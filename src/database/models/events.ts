module.exports = (sequelize: { define: (arg0: string, arg1: { id: { type: any; primaryKey: boolean; autoIncrement: boolean; }; location_id: any; title: any; description: any; start_dateTime: any; end_dateTime: any; total_attendees: any; total_female_attendees: any; media_link: any; rsvp_link: any; }, arg2: {}) => any; }, DataTypes: { INTEGER: any; TEXT: any; DATE: any; }) => {
    const Event = sequelize.define('event', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement:true
        },
      location_id: DataTypes.INTEGER,
      title: DataTypes.TEXT,
      description: DataTypes.TEXT,
      start_dateTime: DataTypes.DATE,
      end_dateTime: DataTypes.DATE,
      total_attendees:DataTypes.INTEGER,
      total_female_attendees:DataTypes.INTEGER,
      media_link:DataTypes.TEXT,
      rsvp_link:DataTypes.TEXT,
    }, {});
    Event.associate = function(models: { Location: any; }) {
      // associations can be defined here
      Event.hasMany(models.Location,{
        foreignKey: 'location_id',
        as: 'location',
        onDelete: 'CASCADE',
      });
    };
    return Event;
  };