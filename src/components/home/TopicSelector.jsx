import { useState } from "react";
import { DefaultTopics } from "../../Globals";

const TopicSelector = () => {
  const [availableTopics, setAvailableTopics] = useState([
    DefaultTopics.TOPICS_ALL,
  ]);
  return <section id="section__topic-selector">Selector</section>;
};

export default TopicSelector;
