'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class worksCollections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  worksCollections.init({
    collectionId: DataTypes.INTEGER,
    workId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'worksCollections',
  });
  return worksCollections;
};