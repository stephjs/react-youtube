import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import Searchbar from "./components/Searchbar";
import Videolist from "./components/Videolist";
import Videodetail from "./components/Videodetail";
const Youtube_API_KEY = "AIzaSyBmeGWj4oSi6AqrLo1z_00aHB0arbTSBTE";


// create a new component - should produce some html
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			searchTerm: "cats",
			selectedVideo: null
		};
		this.searchForvideo(this.state.searchTerm);
	}
	searchForvideo(searchTerm) {
		YTSearch({key: Youtube_API_KEY, term: searchTerm, maxResults: "25"}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		})
	}

	onVideoSelect(newVideo) {
		const firstVideo = newVideo;
		let videoList = this.state.videos;
		videoList = videoList.sort(function(x,y){ return x == firstVideo ? -1 : y == firstVideo ? 1 : 0; });
		this.setState({
			videos: videoList,
			selectedVideo: newVideo
		});
	}

	render() {
		const videoSearch = _.debounce( (term)=> {this.searchForvideo(term)}, 300);
		return (
			<div>
				<Searchbar onSearchTermChange={ term => this.searchForvideo(term) } />	
				<div className="row">	
					<Videodetail video={this.state.selectedVideo} />
					<Videolist 
						onVideoSelect={this.onVideoSelect.bind(this)}
						thevideos={this.state.videos} 
					/>
				</div>
			</div>
		);
	}
}

// take the component's generated HTML and add it to the page (in the DOM)
ReactDOM.render(<App/>, document.getElementById("app"));