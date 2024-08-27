import mongoose from 'mongoose';

const connectToDb = async () => {
    try {
        const state = mongoose.connection.readyState

        await mongoose.connect('')
    } catch (error) {
        
    }
}