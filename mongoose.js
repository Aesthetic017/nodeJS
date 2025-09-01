const express = require("express");
const fs = require("fs");
const mongoose = require('mongoose');


const { type } = require("os");

const app = express()
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 


// MONGODB - Connection 
mongoose.connect('mongodb://127.0.0.1:27017/myapp-1')
.then(()=> console.log("MongoDB Connected"))


//Schema
const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true
    },
    lastName : {
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    jobTitle:{
        type: String
    },
    gender: {
        type: String
    }
},{timestamps:true});

const User = mongoose.model("user", userSchema);


// ---------------- ROUTES ----------------


app.get("/users", async(req, res) => {
  const allDbUsers = await User.find({});  
  const html = `
    <ul> 
      ${allDbUsers.map((user) => `<li>${user.firstName} ${user.lastName} - ${user.email}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// GET all users (API)
app.get("/api/users", async (req, res) => {
   const allDbUsers = await User.find({});
   return res.json(allDbUsers);
});

// GET single user by ID
app.get("/api/users/:id", async(req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.json(user);
});

// POST - create new user
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (!body.first_name || !body.last_name || !body.email) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const result = await User.create({
    firstName : body.first_name,
    lastName : body.last_name,
    email :body.email,
    gender : body.gender,
    jobTitle : body.job_title,
    phone : body.phone
  })
  console.log(result)
  return res.status(201).json({msg: "Success"});
  
});

// PATCH and DELETE combined
app.route("/api/users/:id")
  // PATCH - update user
  .patch(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id,{lastName:"Changed"});
    return res.json({status:"Pending"}) 
  })

  // DELETE - remove user
  .delete(async(req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    return res.json({status:"Success"})
    
  });


app.listen(port, () => console.log(`Server started at http://localhost:${port}`));

