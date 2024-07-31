const express = require('express');
const cors = require('cors');
const { request } = require('express');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors());
app.use(express.json());

const newuser = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'newuser'
});

newuser.connect((err) => {

    if (err) {
        console.log('error in the connection');
        return;
    }

    console.log('database connected');

});

// app.use((err, req, res, next) => {
//     // Send a JSON response with the error code and message
//     res.status(500).json({
//       error: {
//         code: 500,
//         message: err.message || 'Internal Server Error',
//       },
//     });

async function sendConfirmationEmail(Emailid, Firstname) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'siva121855@gmail.com',
            pass: 'fvyq lebc vcwp sftj'
        }
    });

    let mailOption = {
        from: 'siva121855@gmail.com',
        to: Emailid,
        subject: 'Create your own account',
        text: `Hello ${Firstname},\n\n Your Account has be created \n\n Thankyou for using our products.\n\n Please vist our nearest shop. \n\n U.S.Polo`
    };
    await transporter.sendMail(mailOption);
}
app.post('/register', (req, res) => {
    console.log(req.body);
    const { Firstname, Lastname, Emailid, Password } = req.body;
    const q = "insert into newuser(Firstname,Lastname,Emailid,Password)values(?,?,?,?)"

    const encryptalgo = bcrypt.genSaltSync(10);
    const encryptalogopass = bcrypt.hashSync(Password,encryptalgo);

    newuser.query(q, [Firstname, Lastname, Emailid, encryptalogopass], async (error, result) => {
        if (error) {
            res.status(500).send("Creating new account is failed");
            return;
        }

        try {
            await sendConfirmationEmail(Emailid, Firstname);
            res.status(200).send("Your account has be created");
        }
        catch (emailerror) {
            console.log(emailerror);
            res.status(501).send("Account Created without Cofirm Email");
        }
    });
});

app.post('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            res.status(500).send('error logging out')
        }
        else{
            res.clearCookie('sessionID');
            res.json({message:'logged out sucessfully'});
        }
    });
});

app.post('/login' , (req,res)=>{
    const{Emailid,Password}=req.body;
    console.log(req.body);
    q="select * from newuser where Emailid=?";

    newuser.query(q,[Emailid],(error, result)=>{
        console.log(result);
        if(error){
            res.status(500).send('error logging in');
            console.log("error: " + error )
            return;
        }
            console.log(result.length)
        if(result.length > 0){
            const encryptalogopass = result[0].Password;
            if(bcrypt.compareSync(Password, encryptalogopass)){
                const Firstname = result[0].Firstname;
                console.log(Firstname);
                res.json({status:200, message:"success..!", Firstname});
            }
            else{
                res.status(201).send("Invalid Id..!")
            }}
            else{
                res.status(201).send("Invalid Id..!")
            }
    });
});

app.listen(3033, () => {
    console.log('server running and listeninig');
});