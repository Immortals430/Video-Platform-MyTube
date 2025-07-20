import User from "./user_schema.js";

export default class UserRepository {
    async signup(username: string, email: string, password: string) {
        let user = await User.create({
            name: username,
            email: email,
            password: password
        })
        return user
    }

    async login(email: string, password: string ){
        
    }
}
