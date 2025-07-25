import User from "./user_schema.js";

export default class UserRepository {

  async createAccount(username: string, email: string, password: string) {
    let user = await User.create({
      name: username,
      email: email,
      password: password,
    });
    user.password = ""
    return user;
  }

  async findUser(obj: { email?: string, _id?: string }) {
    return await User.findOne(obj);
  }
}
