import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const IndividualTraineeHome = () => {
return (
	<div>
	<h1>Individual Trainee page</h1>
	<br />
	<ul>
	<li>
		<Link to="/selectcountry">Select your country</Link>
		</li>
        <li>
		<Link to="/viewtitlesandmore">View Titles, Total Hours and Ratings of the courses </Link>
		</li>
        <li>
		<Link to="/viewprice">View Course Prices </Link>
		</li>
        <li>
		<Link to="/filteronsubjectorrating2">Filter Courses on subject or rating </Link>
		</li>
        <li>
		<Link to="/filteronprice2">Filter Courses on Price </Link>
		</li>
        <li>
		<Link to="/searchforcourse">Search for a course </Link>
		</li>
        <li>
		<Link to="/getbypob">View the most popular courses </Link>
		</li>
		<li>
		<Link to="/Viewexercises"> View exercises and submit answers </Link>
		</li>
		<li>
		<Link to="/viewtraineegradeit"> View Exercise grades </Link>
		</li>
		<li>
		<Link to="/getwallet2">View the amount in my wallet </Link>
		</li>
		<li>
		<Link to="/getbyid"> Check Courses and monitor your Progress </Link>
		</li>
		<li>
		<Link to="/forgotpass">Change your password </Link>
		</li>
        <li>
		<Link to="/viewans2"> View Questions and your answers with the correct solutions </Link>
		</li>
        <li>
		<Link to="/report1IT"> View All courses and file reports </Link>
		</li>
        <li>
		<Link to="/ViewReportsIT"> View All your reports </Link>
		</li>
        <li>
		<Link to="/Viewallinstructors"> View and rate Instructors </Link>
		</li>
        <li>
		<Link to="/logout">Log Out </Link>
		</li>
	</ul>
	</div>
);
};

export default IndividualTraineeHome;