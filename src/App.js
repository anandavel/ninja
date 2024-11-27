// App.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
	return (
	<>
	<Header />
		<main>
			<Container className="text-center my-5">
			<Row>
				<Col md={6} className="bg-primary text-white p-4">
					<h2>Column 1</h2>
					<p>This is a visually appealing layout using the grid system approach.</p>
					<Button variant="light">Click me</Button>
				</Col>
				<Col md={6} className="bg-secondary text-white p-4">
					<h2>Column 2</h2>
					<p>Responsive and stunning design to enhance user experience.</p>
					<Button variant="light">Explore</Button>
				</Col>
			</Row>
		</Container>
		</main>
		<Footer />
	</>
		
	);
}

export default App;