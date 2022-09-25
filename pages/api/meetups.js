import { MongoClient } from 'mongodb'

// /api/meetups

export default async function handler(req, res) {
    const data = req.body;
    
    const client = MongoClient.connect('mongodb+srv://valentin:phpuser@cluster0.mlbwcen.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = (await client).db('meetups');

    const meetupsCollection = db.collection('meetups');

    const result = meetupsCollection.find();

    (await client).close();

    res.status(200).toArray(result);

}