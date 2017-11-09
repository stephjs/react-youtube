import React from "react";
import VideolistItem from "./VideolistItem";

const Videolist = (props) => {
	const videoItems = props.thevideos.map( (video) =>{

		return  (
			<VideolistItem 
				key={video.etag} 
				video={video} 
				onVideoSelect = {props.onVideoSelect}
			/>
		);
	})
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>	
	);
}

export default Videolist;