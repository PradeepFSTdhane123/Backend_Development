const express=require('express');
const app=express();
const router=express.Router();
app.use(express.json());
// 🛑 we can check name are present in the array or not using postman
// let users=['mohit','adnan','amit','pradeep'];

// 🛑  we can send availabe array of object user name and password
let users=[{name:"pradeep",password:"123"},{name:"adnan",password:"456"},{name:"amit",password:"899"}];
router.get('/user', function(req, res) {
const {user} = req.body;
for(let i=0; i<users.length; i++) {
if(users[i].name==user){
  // return res.send(name="pradeep",password="123455");
  return res.send(users[i]);
}
// else if(user==adnan){
//   return res.send(name="adnan",password="<PASSWORD>");
// }
// else if(user==amit){
//   return res.send(name="amit",password="<PASSWORD123 amit >");
// }
// else if(user==mohit){
//   return res.send(name="mohit",password="<PASSWORD>0987");
// }
}
return res.send('user not found');
})
app.use('/',router);
app.listen(8000,function(){
  console.log("server start at port",8000);
});