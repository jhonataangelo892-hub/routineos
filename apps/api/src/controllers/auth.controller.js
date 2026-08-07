const authService = require('../services/auth.service');

class AuthController {
  async register(req, res) {
    try {
      const result = await authService.register(req.body);
      res.status(201).json({ success: true, message: 'Usuário criado com sucesso', data: result });
    } catch (error) {
      const statusCode = error.message.includes('já cadastrado') ? 409 : 400;
      res.status(statusCode).json({ success: false, error: error.message });
    }
  }

  async login(req, res) {
    try {
      const result = await authService.login(req.body);
      res.json({ success: true, message: 'Login realizado com sucesso', data: result });
    } catch (error) {
      res.status(401).json({ success: false, error: error.message });
    }
  }
}

module.exports = new AuthController();