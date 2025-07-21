const express = express();
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users",userRouter);
app.use("/api/customers",userRouter);
app.use("/api/transactions",userRouter);

app.use((req,res)=>{
    res.status(404).send("Invalid route Path");
})

app.listen(PORT,()=>{
    console.log('Server is running in port : ',PORT);
});

