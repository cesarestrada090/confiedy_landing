import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/eLearningSchool/MainBanner";
import Features from "../components/eLearningSchool/Features";
import PopularCourses from "../components/eLearningSchool/PopularCourses";
import Footer from "../components/_App/Footer";

const Index = () => {
	return (
		<>
			<Navbar />
			<MainBanner />
			<Features />
			<PopularCourses />
			<Footer />
		</>
	);
};

export default Index;
