'use strict';
import { Model } from 'sequelize';



module.exports = (sequelize: any, DataTypes: any) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedules.init({
    horario: {
      type: DataTypes.STRING
    }}, {
    sequelize,
    modelName: 'Schedules',
  });
  return Schedules;
};