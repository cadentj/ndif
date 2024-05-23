import mongoose from 'mongoose';
import connectToDatabase from '../lib/mongodb.ts';
import User from '../models/User.ts';
import crypto from 'crypto';

async function seedUsers() {
  await connectToDatabase();

  const apiKey = crypto.randomBytes(32).toString('hex');

  const users = [
    { name: 'Caden J', email: 'kh4dien@gmail.com', apiKey: apiKey},
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