import ReactPlayer from "react-player";
import React from "react"

export default function MovieVideos({value}) {

    return (
        <div>
            {
                value &&
                <ReactPlayer width={"1000px"}
                             height={"600px"}
                             style={{margin: "0 auto", boxShadow: "20px 20px 90px 20px black", marginTop: "20px",marginBottom: "20px",}}
                             url={"https://www.youtube.com/watch?v=" + value.key}
                />
            }

        </div>
    )
}