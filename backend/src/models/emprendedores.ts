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
  password:string,	
  confirmPassword:string,
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
    password!:string;	
    confirmPassword!:string;

    static associate(models: any) {
      // Company.hasMany(models.Product, {
      //   foreignKey :{
      //     allowNull:false,
      //     name:'document'
      //   }
      // })
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

      
      password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "field can't be null"
        }
      }
    },

    
    confirmPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "field can't be null"
        }
      }
    },
   
    

  }, {
    sequelize,
    modelName: 'Company',
    tableName: "Company2"
  });
  return Company;
};