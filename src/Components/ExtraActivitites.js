import React from "react";

export const ExtraActivities = ({ extraActivities }) => {
  return (
    <section className="academic-experience section" id="activities">
      <h2 className="section-title">Activities</h2>
      <div className="education__container bd-grid">
        {extraActivities.map((activity) => (
          <Activity key={activity.institution} {...activity} />
        ))}
      </div>
    </section>
  );
};

const Activity = ({ title, date, occupation, activities }) => {
  return (
    <div className="education__content">
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div className="education__data bd-grid">
        <span className="education__studies">{title}</span>
        <h3 className="education__title">{occupation}</h3>
        <span className="education__year">{date}</span>
        {
          activities.map(act => <p key={act} className="education__year">{act}</p>)
        }
      </div>
    </div>
  );
};
