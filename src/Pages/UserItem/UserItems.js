import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import "./css/UserItem.css";
import UserItem from "./UserItem";

const MyItem = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	// if no user found
	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user]);

	//   load my item
	useEffect(() => {
		async function getItem() {
			try {
				if (user?.email) {
					const uri = `http://localhost:5000/userItem/${user.email}`;
					const { data } = await axios.get(uri, {
						headers: {
							authorization: `Bearer ${localStorage.getItem(
								"token"
							)}`,
						},
					});
					setItems(data);
				}
			} catch (error) {
				// console.error(error);
			}
		}
		getItem();
		setLoading(false);
	}, [loading]);

	const deleteItem = async (id) => {
		const confirm = window.confirm(
			"Are you sure you want to delete this item?"
		);
		if (confirm) {
			try {
				const uri = `http://localhost:5000/inventory/${id}`;
				const { data } = await axios.delete(uri, {
					headers: {
						authorization: `Bearer ${localStorage.getItem(
							"token"
						)}`,
					},
				});
				if (data.deletedCount === 1) {
					setItems(items.filter((item) => item._id !== id));
					toast.success("Item deleted successfully");
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className="bg-dark my-item py-5 light-border">
			<div className="container">
				{items.length > 0 ? (
					<h1 className="text-center text-primary">
						YOU ADDED <b className="text-light">{items.length}</b>{" "}
						ITEM
					</h1>
				) : (
					<h1 className="no-item text-center py-3 text-danger">0</h1>
				)}

				<div className="row">
					{loading && <Spinner />}
					{items.length < 1 && (
						<h3 className="text-center text-danger py-5">
							You have not added any items
						</h3>
					)}
					<div className="row row-cols-1 my-5 row-cols-md-2 g-4">
						{items.length > 0 &&
							items.map((item) => (
								<UserItem
									key={item._id}
									deleteItem={deleteItem}
									item={item}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyItem;
