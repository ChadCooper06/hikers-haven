import React from "react"

function Home() {

    return (
        <>
        <div className="home-wrapper">
            <h1>Welcome to Hiker's Haven!</h1>
                <div className="intro">
                {/* <img
                    className="intro-bg"
                    src="./assets/hiking-trail-sign.jpg"
                    alt=""
                /> */}
                    <div className="intro-text">
                        We are an online community that discusses hiking, camping, gear, trails and outdoor experiences.
                        Feel free to have a look around and join if you would like to participate.
                    </div>
                </div>
        </div>
        <div className="pinned"><h2>Pinned Posts</h2>
            <div className="pinned-post"></div>
            <h3 className="pin-title">Goose Chase</h3>
                <p className="pin-text">I was chased by a mother goose who was VERY mad I was near her nest. 
                    In my defense I only wanted to see the eggs but apparently she was not okay with that. 
                    Chased me a full 50 yards and it's scary to look back and see a big goose throwing wings.
                </p>
            {/*pinned posts go here-need to make a function that displays posts if they are pinned
            for post if pinned == true showPost*/}
        </div>
        </>
    );
};

export default Home;