import React from 'react';
import ReactDOM from 'react-dom';

/**
 3rd party scripts
*/
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');
require('../../node_modules/waypoints/lib/jquery.waypoints.js');
require('../js/app.js');

/**
 CSS
*/
require('../css/main.css');

/**
 React components
*/
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Timeline from './Timeline/Timeline';
import OtherInformation from './OtherInformation/OtherInformation';
import Social from './Social/Social';
import Contact from './Contact/ContactForm';
import MapContainer from './Map/MapContainer';
import Thanks from './Thanks/Thanks';
import Footer from './Layout/Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Hero />
				<div className="row">
					<div className="col-md-6">
						<Skills />
						<OtherInformation />
					</div>
					<div className="col-md-6">
						<Timeline />
					</div>
				</div>
				<Social />
				<Contact />
				<MapContainer />
				<Thanks />
				<Footer />
			</div>
		)
	}
}

export default App;
