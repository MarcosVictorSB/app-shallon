import { Model } from 'sequelize';
module.exports = (sequelize: any, DataTypes: any) => {
  class Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Services.init({
    name: {
      type:DataTypes.STRING,
    },
    value: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Services',
  });
  return Services;
};