import React from "react";
import Post from "./Post";
import PostList from "./PostList";
import { Accordion} from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

// The accordion layout of the list of forum topics that have posts and the ability to add a post in each item
// https://react-bootstrap.github.io/components/accordion/

export default function ForumAccordion({ forum, index }) {

  return (
    <Accordion className="accordion">
      <AccordionItem className="acccordion-item" eventKey={index}>
        <AccordionHeader className="accordion-header">
          {forum.topics}
        </AccordionHeader>
        <AccordionBody className="accordion-body">
          <div>
            {<Post forumId={forum.id} />}
            {<PostList forumId={forum.id} />}
          </div>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}