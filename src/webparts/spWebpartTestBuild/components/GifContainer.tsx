import * as React from 'react';
import { connect } from 'react-redux';
import GifItem from './GifItem';

import {
	fetchGifs
} from '../actions';

class GifContainer extends React.Component<any,{}> {

	constructor(props) {
		super(props);

		// Place bindings here
	}

	componentWillMount() {
		this.props.fetchGifs();
	}

	renderRow(trendingGifObjects) {
		if (trendingGifObjects != null) {
			const gifRows = trendingGifObjects.map(function (element) {

				return (
					<GifItem
						key={element.id}
						gifUrl={element.images.fixed_height.url}
						gifOrigLink={element.url}
					/>
				)
			});
			return gifRows;
		}
	}

	render() {

		return (
			<div className="gif-image-display">
				{this.renderRow(this.props.gifObject)}
			</div>
		);
	}
}

const mapStateToProps = state => {

	const {
    gifObject
  } = state.gifObject

	return {
		gifObject
	};

};

export default connect(mapStateToProps, { 
	fetchGifs
})(GifContainer);