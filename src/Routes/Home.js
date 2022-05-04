import React from "react"

function Home() {

    return (
        <>
        <div className="home-wrapper">
            <h1>Welcome to Hiker's Haven!</h1>
                <div className="intro">
                <img
                    class="intro-bg"
                    src="./assets/hiking-trail-sign.jpg"
                    alt=""
                />
                    <p className="intro-text">We are an online community that discusses hiking, camping, gear, trails and outdoor experiences.
                        Feel free to have a look around and join if you would like to participate.
                    </p>
                </div>
        </div>
        <div className="pinned">
            {/*pinned posts go here-need to make a function that displays posts if they are pinned
            for post if pinned == true showPost*/}
        </div>
        </>
    );
};

export default Home;