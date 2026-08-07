const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user.repository');

class AuthService {
  async register({ name, email, password }) {
    if (!name || !email || !password) {
      throw new Error('Nome, e-mail e senha são obrigatórios');
    }
    if (password.length < 8) {
      throw new Error('Senha deve ter no mínimo 8 caracteres');
    }

    const existing = await userRepository.findByEmail(email);
    if (existing) {
      throw new Error('E-mail já cadastrado');
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await userRepository.create({ name, email, passwordHash });
    return { user };
  }

  async login({ email, password }) {
    if (!email || !password) {
      throw new Error('E-mail e senha são obrigatórios');
    }

    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      throw new Error('Credenciais inválidas');
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      token,
      user: { id: user.id, name: user.name, email: user.email }
    };
  }
}

module.exports = new AuthService();