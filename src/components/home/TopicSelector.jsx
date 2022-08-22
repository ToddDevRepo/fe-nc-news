import { useEffect, useState } from "react";
import { DefaultTopics } from "../../Globals";
import { getAllTopics } from "../../utils/http/nc-api";

const TopicSelector = ({ selectedTopic, setSelectedTopic }) => {
  const [availableTopics, setAvailableTopics] = useState([
    DefaultTopics.TOPICS_ALL,
  ]);
  useEffect(() => {
    getAllTopics().then(({ topics }) => {
      topics.unshift(DefaultTopics.TOPICS_ALL);
      setAvailableTopics(topics);
      console.log(topics);
    });
  }, []);

  return (
    <section id="section__topic-selector">
      <select
        onChange={(event) => {
          const topic = availableTopics.find((topic) => {
            return topic.slug === event.target.value;
          });
          setSelectedTopic(topic);
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
      <span>{selectedTopic.description}</span>
    </section>
  );
};

export default TopicSelector;
