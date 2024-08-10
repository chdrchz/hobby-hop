import React from "react";

function SortFeed() {
  return (
    <div>
      <div className="accordion-item">
        <div className="accordion-header">
          <h5>Explore Hobby Hop</h5>
          <svg
            width="15"
            height="15"
            viewBox="0 0 60 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 3C60 2.2 59.69 1.45 59.12 0.880001C57.95 -0.289999 56.05 -0.289999 54.88 0.880001L33 22.76C32.23 23.53 31.14 23.97 30 23.97C28.86 23.97 27.77 23.53 27 22.76L5.12 0.880001C4.54 0.300001 3.77 0 3 0C2.23 0 1.46 0.290001 0.879999 0.880001C0.299999 1.47 0 2.2 0 3C0 3.8 0.309999 4.55 0.879999 5.12L22.76 27C24.69 28.93 27.27 30 30 30C32.73 30 35.31 28.93 37.24 27L59.12 5.12C59.69 4.55 60 3.8 60 3Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="accordion-content">
          <div className="content-links">
            <a href="#">
              <p>Most Popular</p>
            </a>
            <a href="#">
              <p>Near Me</p>
            </a>
            <a href="#">
              <p>View All</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortFeed;
