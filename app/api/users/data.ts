// data.ts
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';
import crypto from 'crypto';

export async function fetchApiKey(email: string) {
  await connectToDatabase();

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  return user.apiKey;
}

export async function createNewApiKey(email: string) {
  await connectToDatabase();

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const newApiKey = crypto.randomBytes(32).toString('hex');
  user.apiKey = newApiKey;
  await user.save();

  return newApiKey;
}