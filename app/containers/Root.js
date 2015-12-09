import React, { Component } from 'react';

class Root extends Component {

	renderInitialState() {
		if (this.props.initialState) {
			let innerHtml = `window.__INITIAL_STATE__ = ${JSON.stringify(this.props.initialState)}`;
			return (
				<script dangerouslySetInnerHTML={{__html: innerHtml}} />
			);
		}
	}

	render() {
		const isDeveloping = process.env.NODE_ENV !== 'production';
		const head = this.props.head;
		
		return (
			<html>
				<head>
					{head.title.toComponent()}
					{head.meta.toComponent()}
					{head.link.toComponent()}
				</head>
				<body>
					<div id='root' dangerouslySetInnerHTML={{__html: this.props.content}} />
					{this.renderInitialState()}
					{head.script.toComponent()}
					<script src={isDeveloping ? '/bundle.js' : '/bundle.min.js'}></script>
				</body>
			</html>
		);
	}
}

export default Root;