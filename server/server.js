require("dotenv").config({ path: `${process.cwd()}/.env`});
const express = require ('express');
const cors = require('cors');
const PORT = 5000;

const userRouter = require('./routes/user.routes.js');
const customerRouter = require('./routes/customer.routes.js');
const transactionRouter = require('./routes/transaction.routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users",userRouter);
app.use("/api/customers",customerRouter);
app.use("/api/transactions",transactionRouter);

app.use((req,res)=>{
    res.status(404).send("Invalid route Path");
})

app.listen(PORT,()=>{
    console.log('Server is running in port:',PORT);
});

