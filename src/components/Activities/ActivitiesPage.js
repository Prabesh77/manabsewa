import React from "react";
import ActivityCard from "./All/ActivityCard";
import Shape from "./../Common/Shape";

const ActivitiesPage = () => {
  return (
    <div className="container">
      <Shape title="OUR ACTIVITIES" />
      <div className="activity-card-wrapper">
        <div className="latest-post-tag">
          <p>Latest Post</p>
        </div>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  );
};

export default ActivitiesPage;
