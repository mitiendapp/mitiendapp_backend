
import { UserAttributes } from "../models/user";
import IUserRepository from "./interfaces/user.repository.interface";
import { CompanyAttributes } from "../models/company";
import { ClientAttributes } from "../models/client";
import db from "../models";
import bcrypt from 'bcrypt';
import { CompanyRepository } from "./company.respository";

export class UserRepository implements IUserRepository<UserAttributes, string>{
    async findAll(): Promise<UserAttributes[]> {
        try {   
            const users = await db.User.findAll();
            return users;
        } catch (error) {
            throw new Error("Can't fetch all users.");
        }
    }
    async findOne(email: string): Promise<UserAttributes> {
        try {
            const user = await db.User.findOne({where: {email:email}});
            return user;
        } catch (error) {
            throw new Error("Can't find user with email: " + email);
        }
    }
    async create(payload: any, callback: any): Promise<UserAttributes> {   
       
        // console.log(payload);
        let data :any;
        let user :any;

        let { firstName, lastName, email, roles, password, status } = payload; 

        // if(roles == 'Company'){
           
        //     id=payload.companyId
        // }
        // else if(roles == 'client'){
        //     id=payload.document
        // }
        const hashedPassword = await bcrypt.hash(password, 10);
        const alreadyExist = await db.User.findOne({where:{email}});
        if (alreadyExist) {
            throw new Error('User already exist');
        }
        try {

            if("nameEmprendimiento" in payload){
                console.log('1');
                
                roles = Object.assign({}, {"Company": 4068});
                data = await db.Company.findOne({where:{email}});
                const companyId = data.dataValues.companyId;
                user = await db.User.create({
                    id:companyId,
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:hashedPassword,
                    roles:roles,
                    status:status  
                    
                });
                console.log('$$linea 63 $$',data,'$$linea 63 $$');
                console.log('$$linea 63 $$',data.Company,'$$linea 63 $$');
                console.log('$$linea 63 $$',data.Company.dataValues,'$$linea 63 $$');
                
            }
            else{
                console.log('2');
                
                data = await db.Client.findOne({where:{email}});
                user = await db.User.create({
                    id:document,
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    password:hashedPassword,
                    roles:roles,
                    status:status  
                    
                });
               
                console.log(data,"esto se trae de  db.Client.findOne({where:{email}});");
            }
          
            return user;
        } catch (error) {
            throw new Error("Error creating user (repository)");
        }
    }
    async update(id: any, payload: any): Promise<UserAttributes> {
        const alreadyExist = await this.findOne(id);
        if (alreadyExist == null) {
            throw new Error('User not found');
        }
        try {
            const newUser = await db.User.update(payload, { where: { id } });
            return newUser;
        } catch (error) {
            throw new Error("Can't update user");
        }
    }
    async delete(email: string): Promise<UserAttributes> {
        const alreadyExist = await this.findOne(email);
        if (alreadyExist == null) {
            throw new Error('User not found');
        }
        try {
            const userDeleted = await db.User.destroy({ where: { email } });
            return userDeleted;
        } catch (error) {
            throw new Error("Can't delete user");
        }
    }

}

