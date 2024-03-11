export default interface ICompanyRepository<T, ID> {
    findAll(): Promise<T[]>;
    findOne(id:any): Promise<T>;
    create(payload: any, callback: any): Promise<T>;
    update(id:any, payload: any): Promise<T>;
    delete(id: ID): Promise<T>;
}
