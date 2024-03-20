export interface UserAttributes {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roles: object;
    status: string;
    profile_image?: string;
}
