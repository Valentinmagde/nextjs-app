import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id:'m1',
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    title: "This is a first meetup"
  },
  {
    id:'m1',
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    title: "This is a second meetup"
  },
  {
    id:'m1',
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    title: "This is a third meetup"
  }
];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
          <title>React Meetup</title>
          <meta name='description' content='Browse a huge list of highly active React meetup!' />
      </Head>
      <MeetupList meetups={props.meetups}/>
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// } 

export async function getStaticProps() {
  //  fetch data from an API

  const client = await MongoClient.connect(
    'mongodb+srv://valentin:phpuser@cluster0.mlbwcen.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db('meetups');

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1,
  }
}

export default HomePage;
