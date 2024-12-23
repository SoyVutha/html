import express from 'express';
const users=[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "age": 30,
    "location": "New York",
    "isActive": true
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com",
    "age": 25,
    "location": "Los Angeles",
    "isActive": false
  },
  {
    "id": 3,
    "name": "Charlie",
    "email": "charlie@example.com",
    "age": 35,
    "location": "Chicago",
    "isActive": true
  },
  {
    "id": 4,
    "name": "David",
    "email": "david@example.com",
    "age": 28,
    "location": "Miami",
    "isActive": true
  },
  {
    "id": 5,
    "name": "Eva",
    "email": "eva@example.com",
    "age": 40,
    "location": "San Francisco",
    "isActive": false
  },
  {
    "id": 6,
    "name": "Frank",
    "email": "frank@example.com",
    "age": 22,
    "location": "Seattle",
    "isActive": true
  },
  {
    "id": 7,
    "name": "Grace",
    "email": "grace@example.com",
    "age": 29,
    "location": "Austin",
    "isActive": true
  },
  {
    "id": 8,
    "name": "Hannah",
    "email": "hannah@example.com",
    "age": 33,
    "location": "Boston",
    "isActive": false
  },
  {
    "id": 9,
    "name": "Isaac",
    "email": "isaac@example.com",
    "age": 27,
    "location": "Denver",
    "isActive": true
  },
  {
    "id": 10,
    "name": "Jack",
    "email": "jack@example.com",
    "age": 31,
    "location": "Dallas",
    "isActive": false
  }

];


export const router = express.Router();

router.get('/',(req,res)=>{
  res.json(users);
})
