const mongoose = require('mongoose');
const connectToDatabase = require('../lib/mongodb');
const User = require('../models/User');

async function seedUsers() {
  await connectToDatabase();

  const users = [
    { name: 'Penis', email: 'wenis@example.com' },
    // { name: 'Bob', email: 'bob@example.com' },
    // { name: 'Charlie', email: 'charlie@example.com' },
  ];

  try {
    await User.insertMany(users);
    console.log('Users have been added successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedUsers();