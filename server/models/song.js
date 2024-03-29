'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Song.init({
    title: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });

  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.Album, {
      foreignKey: 'albumId',
      onDelete: 'CASCADE'
    })
  };
  return Song;
};