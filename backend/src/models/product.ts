'use strict';
import {
  Model
} from 'sequelize';

export interface ProductsAttributes{
  name:string,
  description:string,
  price:number,
  image:string,
  stock:number,
  category:string
}

module.exports = (sequelize:any, DataTypes:any) => {
  class Product extends Model implements ProductsAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    name!:string;
    description!: string;
    price!: number;
    image!: string;
    stock!: number;
    category!: string;

    static associate(models:any) {
      // define association here
    }
  }
  Product.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        notNull:{
          msg:"field can't null"
        }
      }
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"field can't null"
        }
      }
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg:"field can't null"
        }
      }
    },
    image: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"field can't null"
        }
      }
    },
    stock: {
      type:DataTypes.BIGINT,
      allowNull:false,
      validate:{
        notNull:{
          msg:"field can't null"
        }
      }
    },
    category:{
      type:DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
//cc