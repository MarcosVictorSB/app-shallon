'use strict';
import { Model } from 'sequelize';

interface TyperUserAttributes {
  name: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class TypeUser extends Model<TyperUserAttributes> implements TyperUserAttributes {
    
    name: string;

    static associate(models) {
      // define association here
    }
  }
  TypeUser.init({
    name:{
      type: DataTypes.STRING
    } 
  }, {
    sequelize,
    modelName: 'TypeUser',
  });
  return TypeUser;
};