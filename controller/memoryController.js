import { processMemory } from '../services/memoryService.js';
import { getUserEvents } from '../services/memoryService.js';

export const addMemory = async (req, res) => {
  try {
    const result = await processMemory(req.body);
    res.status(200).json({
      success: true,
      message: 'Memory saved',
      processedMemory: result
    });
  } catch (error) {
    console.error('Add Memory Error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing your request',
      error: error.message
    });
  }
};



export const getAllEvents = async (req, res) => {
  try {
    const userId = req.user.userId;

    const events = await getUserEvents(userId);

    res.status(200).json({
      success: true,
      events
    });
  } catch (error) {
    console.error('Get Events Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch events',
      error: error.message
    });
  }
};