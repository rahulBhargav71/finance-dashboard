const prisma = require("../utils/prisma");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashed, role }
    });

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};