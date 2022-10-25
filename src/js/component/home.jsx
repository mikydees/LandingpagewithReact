import React from "react";
import Navbar from "./Navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron/>
			<div className="d-flex">
			<Card title="Cat" cardText="Hello i am dog #1"/>
			<Card title="Dog" cardText="Hello i am dog #2"/>
			<Card title="Cat" cardText="Hello i am dog #3"/>
			<Card title="Dog" cardText="hello i am dog #4"/>
			</div>
<Footer />
		</div>
	);
};

export default Home;
