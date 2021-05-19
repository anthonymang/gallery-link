'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class work extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.work.belongsTo(models.artist)
      models.work.belongsTo(models.user)
      models.work.belongsToMany(models.gallery, {through: 'worksGalleries'})
    }
  };
  work.init({
    title: DataTypes.STRING,
    yearCreated: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    imageFile: DataTypes.STRING,
    discipline: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'work',
  });
  return work;
};