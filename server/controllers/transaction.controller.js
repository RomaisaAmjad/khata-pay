const { Transaction, Customer } = require("../models");
const { asyncWrapper } = require("../middlewares/asyncWrapper.middleware.js");

exports.recordTransaction = asyncWrapper(async (req, res) => {
  const { fk_customer_id, cashIn = 0, cashOut = 0 } = req.body;
  const customer = await Customer.findOne({
    where: {
      id: fk_customer_id,
      fk_user_id: req.user.id
    }
  });

  if (!customer) {
    return res.status(404).json({ message: "Customer not found.Check Again!" });
  }
  const transaction = await Transaction.create({
    fk_customer_id,
    cashIn,
    cashOut,
  });
  customer.runningBalance += (cashIn - cashOut);
  await customer.save();

  res.status(201).json({ transaction, updatedBalance: customer.runningBalance });
});
