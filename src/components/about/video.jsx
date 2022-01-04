import React from 'react';



function AboutVideo() {
    return ( 
        <section id="video_sec">
            <div className="container">
                <div className="video_div">
                    <iframe width="100%" height="350px" src="https://www.youtube.com/embed/jG1g-2EXLOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
     );
}

export default AboutVideo;