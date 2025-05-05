import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "AI-Powered Planning",
    Svg: require("@site/static/img/ai.svg").default,
    description: (
      <>
        Leverage AI to automate repetitive tasks and focus on delivering real
        value. Generate user stories, epics, and sprint tasks with ease.
      </>
    ),
  },
  {
    title: "Agile Simplified",
    Svg: require("@site/static/img/scrum.svg").default,
    description: (
      <>
        Streamline your Agile workflow with intuitive tools designed for both
        technical and non-technical team members.
      </>
    ),
  },
  {
    title: "Real-Time Insights",
    Svg: require("@site/static/img/visuals.svg").default,
    description: (
      <>
        Get actionable project insights and track sprint metrics in real-time.
        Make data-driven decisions for your team.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
