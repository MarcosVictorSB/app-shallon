'use strict';
import { Model } from 'sequelize';

interface TyperUserAttributes {
  name: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class TypeUser extends Model<TyperUserAttributes> implements TyperUserAttributes {
    
    name: string;

    static associate(models) {
      TypeUser.hasOne(models.Customer,{
        foreignKey: 'id_typeuser'
      })
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