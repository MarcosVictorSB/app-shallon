'use strict';
import { Model } from 'sequelize';


interface CustomerAttributes {
  name: string,
  email: string,
  password: string
}

module.exports = (sequelize: any, DataTypes:any) => {
  class Customer extends Model<CustomerAttributes> implements CustomerAttributes {
    name!: string;
    email!: string;
    password!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      Customer.belongsTo(models.TypeUser, {
        foreignKey: 'id_typeuser'
      })
    }
  }
  Customer.init({
    name:  {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    } 
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};