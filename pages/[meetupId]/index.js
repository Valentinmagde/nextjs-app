import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            address = "Meetupstreet 5, 12345 Meetup City"
            description = "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
            image ="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
            title = "This is a first meetup"
        />
    )
}

export default MeetupDetails;