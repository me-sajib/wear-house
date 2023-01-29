import React, { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner";
import Item from "./Item";
import { Link } from "react-router-dom";

const Items = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	// load data from API
	useEffect(() => {
		fetch("http://localhost:5000/inventory")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setItems(data);
				setLoading(false);
			});
	}, []);

	return (
		<div className="items bg-dark py-5">
			<div className="container">
				{/* top of the text */}
				<div className="text-center text-light py-2">
					<span>DISCOVER THE</span>
					<h1>BEST BIKE</h1>
					{/* spinner show */}
					{loading && <Spinner />}
				</div>

				{/* show the all items */}
				<div className="row row-cols-1 my-5 row-cols-md-2 g-4">
					{items?.map((item) => (
						<Item key={item._id} item={item} />
					))}
				</div>

				<Link to="/inventory" className="btn btn-link">
					Manage Inventories
				</Link>
			</div>
		</div>
	);
};

export default Items;
