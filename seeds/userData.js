const  User = require('../models/User')

const userData=[
    {
      username: "Sal",
      email: "sal@hotmail.com",
      password: "password12345"
    },
    {
      username: "Lernantino",
      email: "lernantino@gmail.com",
      password: "password12345"
    },
    {
      username: "Amiko",
      email: "amiko2k20@aol.com",
      password: "password12345"
    }
  ]

const seedUsers=()=>User.bulkCreate(userData)

module.exports=seedUsers;