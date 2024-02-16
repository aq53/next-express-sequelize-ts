'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Album.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Album',
  });

  Album.associate = function(models) {
    // associations can be defined here
    Album.hasMany(models.Song, {
      foreignKey: 'albumId',
    })
  };
  return Album;
};