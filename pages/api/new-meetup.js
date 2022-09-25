import { MongoClient } from 'mongodb'

// /api/new-meetup

export default async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;

        const { title, image, address, description} = data;
        
        const client = MongoClient.connect('mongodb+srv://valentin:phpuser@cluster0.mlbwcen.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = (await client).db('meetups');

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        (await client).close();

        res.status(201).json({message: 'Meetup inserted'});
    }
}