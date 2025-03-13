const express = require("express")
const users = require("./userdata.json");
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:false}));

//routes
app.get('/users', (req,res)=>{
    const html = `
    <ul> 
    ${users.map((user)=> `<li>${user.first_name}${user.last_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

//GET USERS
app.get('/api/users',(req,res)=>{
    return res.json(users)
});

//GET users with their id
app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user=>user.id===id);
    return res.json(user);
})

// POST - create new user 
app.post('/api/users', (req,res)=>{
    //to do create new user
    const body = req.body
    users.push({id : users.length + 1,...body });
    fs.writeFile('./userdata.json', JSON.stringify(users),(err,data)=>{
        return res.json({status:"success"})
    })
    
});

// //Patch 
// app.patch('/api/users/:id', (req,res)=>{
//     //to do edit  user with id
//     return res.json({status:"pending"})
// });


// //delete 
// app.delete('/api/users/:id', (req,res)=>{
//     //to do delete user with id
//     return res.json({status:"pending"})
// });

app.route("/api/users/:id").patch((req,res)=>{
     //to do edit  user with id
     const id = Number(req.params.id);
     const user = users.find(user=>user.id===id);
     const body = req.body;
     user.first_name = body.first_name || user.first_name;
     user.last_name = body.last_name || user.last_name;
     user.email = body.email || user.email;
     user.phone = body.phone || user.phone;
     fs.writeFile('./userdata.json', JSON.stringify(users),(err,data)=>{
        return res.json({status:"success"})
        })

    
    
})
.delete((req,res)=>{
     //to do delete  user with id
     const id = Number(req.params.id);
     const user = users.find(user=>user.id===id);
     const index = users.indexOf(user);
     users.splice(index,1);
     fs.writeFile('./userdata.json', JSON.stringify(users),(err,data)=>{
        return res.json({status:"success"})
        });
   
});

app.listen(port,()=> console.log(`Server Started at ${port}`));