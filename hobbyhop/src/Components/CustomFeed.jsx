import React from "react";
import HobbyCards from "./HobbyCards";
import "../Styles/CustomFeed.css";

const CustomFeed = () => {
  const hobbyData = [
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
    {
      image: "https://example.com/image1.jpg",
      description: "Join us for a pottery class.",
      time: "10:00 AM",
      date: "August 12, 2024",
      location: "Art Studio, Downtown",
      hostedBy: "Jane Doe",
    },
  ];

  const posts = [
    "Here's a cool update! Check out the new feature we added.",
    "Just had an amazing lunch at the new cafe in town!",
    "Excited for the upcoming event this weekend!",
    "Can’t believe how quickly this week is flying by! Can’t believe how quickly this week is flying by! Can’t believe how quickly this week is flying by!",
  ];

  const columns = 4;
  const columnData = Array.from({ length: columns }, (_, columnIndex) =>
    hobbyData.filter((_, i) => i % columns === columnIndex)
  );

  return (
    <div className="feed-container1">
      {columnData.map((column, columnIndex) => (
        <div className="column" key={columnIndex}>
          {column.map((hobby, i) => (
            <HobbyCards key={`${columnIndex}-${i}`} {...hobby} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CustomFeed;
