const prisma = require("../utils/prisma");

exports.getSummary = async (req, res) => {
  const income = await prisma.financialRecord.aggregate({
    _sum: { amount: true },
    where: { type: "INCOME" }
  });

  const expense = await prisma.financialRecord.aggregate({
    _sum: { amount: true },
    where: { type: "EXPENSE" }
  });

  const categoryWise = await prisma.financialRecord.groupBy({
    by: ["category"],
    _sum: { amount: true }
  });

  const recent = await prisma.financialRecord.findMany({
    orderBy: { date: "desc" },
    take: 5
  });

  res.json({
    totalIncome: income._sum.amount || 0,
    totalExpense: expense._sum.amount || 0,
    netBalance:
      (income._sum.amount || 0) - (expense._sum.amount || 0),
    categoryWise,
    recent
  });
};