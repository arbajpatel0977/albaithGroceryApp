import mongoose from 'mongoose';


const contectDB = async () => {

    try {
        mongoose.connection.on('connected', () =>
            console.log('Database connected successfully')
        );
        await mongoose.connect(`${process.env.MONGODB_URI}/albaith`);

    } catch (error) {
        console.error('Database connection error:', error.massage);
    }
}

export default contectDB;