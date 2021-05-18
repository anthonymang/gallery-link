'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.collection.belongsTo(models.gallery)
      // models.collection.belongsToMany(models.work, {through: 'worksCollections'})
    }
  };
  collection.init({
    title: DataTypes.STRING,
    galleryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'collection',
  });
  return collection;
};