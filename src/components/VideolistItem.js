import React from "react";

const VideolistItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;
	//console.log(video);
	return (

		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={imageUrl} alt="" className="media-object"/>
				</div>
				<div className="media-body">
					<div className="media-heading">{videoTitle}</div>
				</div>
			</div>
		</li>
	);
}

export default VideolistItem;