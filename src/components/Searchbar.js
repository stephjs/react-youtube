import React, {Component} from "react";

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		}
	}
	onInputChange(event) {
		this.setState({
			searchTerm: event.target.value
		});
		this.props.onSearchTermChange(this.state.searchTerm);
	}
	render() {
		return ( 
			<div className="search-bar">
				<input 
					value = {this.state.searchTerm}
					onChange={this.onInputChange.bind(this)} />
			</div>
		);
	}
}
export default Searchbar;