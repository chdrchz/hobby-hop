import React, { useState, useEffect } from "react";
import HobbyCards from "./HobbyCards";
import PostCards from "./PostCards";
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
  ];

  const posts = [
    {
      content: "This is a sample post",
      image: "https://example.com/post-image.jpg",
      location: "Online",
      date: "August 15, 2024",
      linkToClass: "https://example.com/class-link",
    },
    {
      content: "This is a sample post",
      image: "https://example.com/post-image.jpg",
      location: "Online",
      date: "August 15, 2024",
      linkToClass: "https://example.com/class-link",
    },
    {
      content: "This is a sample post",
      image: "https://example.com/post-image.jpg",
      location: "Online",
      date: "August 15, 2024",
      linkToClass: "https://example.com/class-link",
    },
    {
      content: "This is a sample post",
      image: "https://example.com/post-image.jpg",
      location: "Online",
      date: "August 15, 2024",
      linkToClass: "https://example.com/class-link",
    },
    {
      content: "This is a sample post",
      image: "https://example.com/post-image.jpg",
      location: "Online",
      date: "August 15, 2024",
      linkToClass: "https://example.com/class-link",
    },
    {
      content: "This is a sample post",
      image: "https://example.com/post-image.jpg",
      location: "Online",
      date: "August 15, 2024",
      linkToClass: "https://example.com/class-link",
    },
    {
      content: "This is a sample post",
      image: "https://example.com/post-image.jpg",
      location: "Online",
      date: "August 15, 2024",
      linkToClass: "https://example.com/class-link",
    },
  ];
  
  function getColumnsForScreenWidth() {
    const width = window.innerWidth;
  
    if (width >= 1650) {
      return 7;  // Very large screens
    } else if (width >= 1400) {
      return 5;  // Large screens
    } else if (width >= 1200) {
      return 5;  // Medium-large screens
    } else if (width >= 925) {
      return 5;  // Medium screens
    } else if (width >= 600) {
      return 3;  // Small-medium screens
    } else {
      return 2;  // Small screens (mobile)
    }
  }

  // set state for column switches
  const [columns, setColumns] = useState(getColumnsForScreenWidth());
  
  useEffect(() => {
    const handleResize = () => setColumns(getColumnsForScreenWidth());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const interleavedData = [];
  const maxLength = Math.max(hobbyData.length, posts.length);

  for (let i = 0; i < maxLength; i++) {
    if (hobbyData[i]) {
      interleavedData.push({ type: "hobby", ...hobbyData[i] });
    }
    if (posts[i]) {
      interleavedData.push({
        type: "post",
        content: posts[i],
        image: hobbyData[i]?.image, // Access optional image from hobbyData
        location: hobbyData[i]?.location,
        linkToClass: hobbyData[i]?.linkToClass,
      });
    }
  }

  const columnData = Array.from({ length: columns }, (_, columnIndex) =>
    interleavedData.filter((_, index) => index % columns === columnIndex)
  );

  return (
    <div className="feed-container1">
      {columnData.map((column, columnIndex) => (
        <div className="column" key={columnIndex}>
          {column.map((item, index) => (
            <div
              key={`${columnIndex}-${index}`}
              className={`item ${item.type}`}
            >
              {item.type === "hobby" ? (
                <HobbyCards key={index} {...item} />
              ) : (
                <PostCards key={index} content={item.content} {...item} /> // Pass additional props if needed
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CustomFeed;
