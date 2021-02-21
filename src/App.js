import { useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/home";
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";
import About from "./components/About/about";
import Donate from "./components/Donate/donate";

const App = () => {
	const homeBg = "https://www.tapeciarnia.pl/fotki/d/20263_1574538308_7761.jpg";
	const aboutBg =
		"https://img4.goodfon.com/wallpaper/nbig/8/8d/sobaka-drug-ulitsa-1.jpg";
	const donateBg =
		"https://www.wallpapertip.com/wmimgs/44-443804_lonely-sad-dog-in-the-rain-wallpaper-data.jpg";
	const [path, setPath] = useState("");
	const [bg, setBg] = useState("");
	useEffect(() => {
		setPath(window.location.pathname);
		path === "/about"
			? setBg(aboutBg)
			: path === "/donate"
			? setBg(donateBg)
			: setBg(homeBg);
	}, [path, bg]);
	return (
		<Router>
			<div
				className='body-container'
				style={{ backgroundImage: `url('${bg}')` }}>
				<Header />
				<Switch>
					<Route path='/about' exact>
						<About />
					</Route>
					<Route path='/donate' exact>
						<Donate />
					</Route>
					<Route path='/' exact>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
