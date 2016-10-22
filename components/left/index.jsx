import React, { Component } from 'react';

export default class extends Component {

	constructor() {
		super();
	}

	componentDidMount() {   
	}


    render() {

		const root_style = {
			textAlign: 'center',
			fontFamily: 'Lato',
			fontSize: '1.5em',
			color: '#fff'
		}

        return (
        	<div style={root_style}>
        		
        		<h2>Hi there!</h2><div>Welcome to TrebleMaker</div>
        		
        	</div>
        )
    }
}
