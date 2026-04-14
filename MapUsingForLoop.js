
let users = [
    {name: "Abinand", age : 25 , address : { city : "abcfdg"}},
    {name: "Ajay", age : 20 , address : { city : "vbhjikl"}},
    {name: "Arjun", age : 23, address : { city : "omnsfmd"}}

]

// let count = 1 ;        another way to display number

for(let i = 0 ; i < users.length ; i++){

   let User = users[i];

   console.log(i + 1);                   // simple method
   console.log("Name =" + User.name);
   console.log("Age = "+ User.age);
   console.log( "Address =" + User.address.city); 

//    count ++                                         another way to display number

   
}

   







