import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import InventoryItem from "./InventoryItem";

const ManageInventory = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = React.useState(true);

	// load data from API
	useEffect(() => {
		fetch("http://localhost:5000/allInventory")
			.then((res) => res.json())
			.then((data) => {
				setItems(data);
				setLoading(false);
			});
	}, []);
	let id = 1;

	// delete item from API
	const deleteItem = (id) => {
		const confirm = window.confirm(
			"Are you sure you want to delete this item?"
		);
		if (confirm) {
			fetch(`http://localhost:5000/inventory/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					setItems(items.filter((item) => item._id !== id));
					if (data.insertedCount === 0) {
						toast.error("Item not found");
					} else {
						toast.success("Item deleted");
					}
				});
		}
	};

	return (
		<div className="bg-dark light-border">
			<div className="container text-light py-5">
				<Link to="/addItem" className="btn btn-primary">
					{" "}
					add new item
				</Link>

				<table className="table table-light mx-auto mt-3 table-striped table-responsive table-bordered">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">NAME</th>
							<th scope="col">PRICE</th>
							<th scope="col">action</th>
						</tr>
					</thead>
					<tbody className="table-hover">
						{
							//    show all inventory
							items.map((item) => (
								<InventoryItem
									key={item._id}
									id={id++}
									deleteItem={deleteItem}
									item={item}
								/>
							))
						}
					</tbody>
				</table>
				{
					//    if loading is true, show spinner
					loading && <Spinner />
				}
			</div>
		</div>
	);
};

export default ManageInventory;
