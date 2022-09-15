import { useEffect, useState } from 'react';
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

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups}/>
}

export default HomePage;
