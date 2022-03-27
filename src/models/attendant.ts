'use strict';
import { Model } from 'sequelize';

interface AttendantAttributes {
  name: string,
  email: string,
  logo: string,
  password: string,
  phone: number
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Attendant extends Model<AttendantAttributes> implements AttendantAttributes {
    name: string;
    email: string;
    password: string;
    logo: string;
    phone: number;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attendant.init({
    name: {
      type: DataTypes.STRING,
    }, 
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }, 
    logo: {
      type: DataTypes.STRING,
    }, 
    phone: {
      type: DataTypes.INTEGER
    }, 
  }, {
    sequelize,
    modelName: 'Attendant',
  });
  return Attendant;
};