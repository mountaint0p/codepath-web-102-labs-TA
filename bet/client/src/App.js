import "./App.css";
import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import ReadPosts from "./pages/ReadPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import { Link } from "react-router-dom";
import { supabase } from "./client";

const App = () => {
	const descr =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			const { data } = await supabase
				.from("Posts")
				.select()
				.order("created_at", { ascending: true });
			setPosts(data);
		};
		fetchPost();
	}, []);

	// Sets up routes
	let element = useRoutes([
		{
			path: "/",
			element: <ReadPosts data={posts} />,
		},
		{
			path: "/edit/:id",
			element: <EditPost data={posts} />,
		},
		{
			path: "/new",
			element: <CreatePost />,
		},
	]);

	return (
		<div className="App">
			<div className="header">
				<h1>👍 Bet 1.0</h1>
				<Link to="/">
					<button className="headerBtn"> Explore Challenges 🔍 </button>
				</Link>
				<Link to="/new">
					<button className="headerBtn"> Submit Challenge 🏆 </button>
				</Link>
			</div>
			{element}
		</div>
	);
};

export default App;
