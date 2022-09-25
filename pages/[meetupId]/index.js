import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from 'next/head';
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                address = {props.meetupData.address}
                description = {props.meetupData.description}
                image= {props.meetupData.image}
                title = {props.meetupData.title}
            />
        </Fragment>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        'mongodb+srv://valentin:phpuser@cluster0.mlbwcen.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db('meetups');

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    
    client.close();

    return {
        fallback : 'blocking',
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        }))
    }
}

export async function getStaticProps(context) {
    // fetch data from API

    const meetupId = context.params.meetupId;
    
    const client = await MongoClient.connect(
        'mongodb+srv://valentin:phpuser@cluster0.mlbwcen.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db('meetups');

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId)
    });
    
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
                address: selectedMeetup.address
            }
        }
    }
}

export default MeetupDetails; 