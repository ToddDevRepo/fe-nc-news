import { useState } from "react";
import { DefaultTopics } from "../../Globals";

const TopicSelector = () => {
  const [availableTopics, setAvailableTopics] = useState([
    DefaultTopics.TOPICS_ALL,
  ]);
  return (
    <section id="section__topic-selector">
      <select
        onChange={(event) => {
          //setSelectedTopic(event.target.value);
        }}
        name="topic-selector"
      >
        {availableTopics.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default TopicSelector;
