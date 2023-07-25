const axios=require('axios')

 exports.homeRoutes=(req,res)=>{
   // make a get request to /api/users
   axios.get('http://localhost:3333/api/users')
   .then(function(response){
      // console.log(response.data)
      res.render('index.ejs',{users:response.data})  
   })
   .catch(err=>{
      res.send(err);
   })
    
 }

 exports.add_user=(req,res)=>{
    res.render('add_user.ejs')
 }

 exports.update_user=(req,res)=>{
   axios.get('http://localhost:3333/api/users',{params:{id:req.query.id}})
   .then(function(userdata){
      res.render("update_user",{user:userdata.data})
   })
    .catch(err=>{
      res.send(err);
    })
 }