import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";

const events = [
  {
    title: "Event 1",
    image: "/images/event1.png",
    slug: "event-1",
    location: "New York",
    date: "2024-09-15",
    time: "10:00 AM",
  },
  {
    title: "Event 2",
    image: "/images/event2.png",
    slug: "event-2",
    location: "California",
    date: "2024-09-15",
    time: "10:00 AM",
  },
];

const Home = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for every Dev
        <br />
        Event you can&apos;t miss!
      </h1>
      <p className="text-center mt-5">
        Hackathon, Conferences, Meetups, and more! All in one place!
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
