'use strict';
import { Model } from 'sequelize';


export interface CompanyAttributes {
  document: string,
  firstName: string,
  lastName: string,
  nameEmprendimiento: string,
  email: string,
  address: string,
  phoneNumber: string,
  description: string,
  img:string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Company extends Model<CompanyAttributes> implements CompanyAttributes {

    document!: string;
    firstName!: string;
    lastName!: string;
    nameEmprendimiento!: string;
    email!: string;
    address!: string;
    phoneNumber!: string;
    description!: string;
    img!:string;
    static associate(models: any) {
      // define association here
    }
  }
  Company.init({
    document: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
      validate: {
        notNull: {
          msg: "field can't be null"
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          msg: "field can't be null"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          msg: "field can't be null"
        }
      }
    },
    nameEmprendimiento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          msg: "field can't be null"
        }
      }
    },



    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notNull: {
          msg: "field can't be null"
        }
      }
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "field can't be null"
        }
      }
    },

    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "field can't be null"
        }
      }
    },


    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "field can't be null"
        }
      }
    },
     img: {
         type: DataTypes.STRING,
        validate: {
          
        }
      },


  }, {
    sequelize,
    modelName: 'Company',
    tableName: "Company2"
  });
  return Company;
};