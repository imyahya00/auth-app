import MemoryModel from '../models/MemoryModel.js';
import { extractMemoryMetadata } from '../utils/geminiHelper.js';

export const processMemory = async ({ userId, memory }) => {
  if (!userId || !memory) throw new Error('UserId & Memory are required');

  const aiData = await extractMemoryMetadata(memory);

  const newMemory = await MemoryModel.create({
    userId,
    memory,
    eventType: aiData.type,
    title: aiData.title,
    mood: aiData.mood,
  });

  const memoryCount = await MemoryModel.countDocuments({ userId });
  if (memoryCount === 30) {
    console.log('Trigger chapter generation here...');
  }

  const { _id, __v, userId: _, ...sanitizedMemory } = newMemory.toObject();
  return sanitizedMemory;
};


export const getUserEvents = async (userId) => {
    if (!userId) throw new Error('User ID is required');
  
    const memories = await MemoryModel.find({ userId }).select('eventType title mood memory timestamp').lean();
  
    return memories;
  };