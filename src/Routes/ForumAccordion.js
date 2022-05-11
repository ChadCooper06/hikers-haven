import React from "react";//, { useEffect, useState, useContext }
//import request from "../services/api.request";
//import { POSTS } from "../services/auth.constants";
import Post from "./Post";
import PostList from "./Topic";
import { Accordion} from "react-bootstrap";//, AccordionContext, useAccordionButton 
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";


export default function ForumAccordion({ forum, index }) {


    // const [activeKey, isActiveKey] = useState(false);

    // let handleClick = () => {
    //     if (activeKey === true) {
    //         return isActiveKey(true)
    //     }
    //     isActiveKey(false);

    // }

    // useEffect(() => {
    //     request({ url: POSTS, method: 'post' })
    //         .then(resp => {
    //         });
    // }, []);
    
    return (
        <Accordion>
            <AccordionItem eventKey={index}>
                <AccordionHeader>
                        {forum.topics}
                </AccordionHeader>
                <AccordionBody>
                        <div>{<Post forumId={forum.id} />}
                        {<PostList />}</div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    )
}