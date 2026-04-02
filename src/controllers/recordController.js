const prisma = require("../utils/prisma");

exports.createRecord = async (req, res) => {
  try {
    const record = await prisma.financialRecord.create({
      data: {
        ...req.body,
        createdBy: req.user.id
      }
    });
    res.json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRecords = async (req, res) => {
  const { type, category, startDate, endDate } = req.query;

  const records = await prisma.financialRecord.findMany({
    where: {
      type,
      category,
      date: {
        gte: startDate ? new Date(startDate) : undefined,
        lte: endDate ? new Date(endDate) : undefined
      }
    }
  });

  res.json(records);
};

exports.updateRecord = async (req, res) => {
  const id = Number(req.params.id);

  const updated = await prisma.financialRecord.update({
    where: { id },
    data: req.body
  });

  res.json(updated);
};

exports.deleteRecord = async (req, res) => {
  const id = Number(req.params.id);

  await prisma.financialRecord.delete({ where: { id } });

  res.json({ message: "Deleted" });
};