class UserService {
  async create(user) {
    console.log(user)
    return "创建用户成功"
  }
}

module.exports = new UserService();