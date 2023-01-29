import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import "./css/Inventory.css";

const Inventory = () => {
	const [user, loadings] = useAuthState(auth);
	const { id } = useParams();
	const [item, setItem] = useState([]);
	const [quantity, setQuantity] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user) {
			fetch(`http://localhost:5000/inventory/${id}`)
				.then((res) => res.json())
				.then((data) => {
					setItem(data[0]);
					setQuantity(data[0].quantity);
					setLoading(false);
				});
		}
	}, [item]);

	//   increase quantity

	const increaseQuantity = (e) => {
		e.preventDefault();
		const quantity = e.target.quantity.value;

		//  check if quantity is empty
		if (quantity === "" || quantity < 1) {
			toast.error("Please enter a valid quantity");
		} else if (quantity > 0) {
			//  update quantity
			fetch(`http://localhost:5000/inventory/addQuantity/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					quantity: parseInt(quantity),
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					setQuantity(data.quantity);
					// show toast
					toast.success("Quantity updated");
					//   empty the input
					e.target.reset();
				});
		}
	};

	//   mines quantity

	const delivery = (id) => {
		fetch(`http://localhost:5000/inventory/delivery/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				delivery: true,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				setQuantity(data.quantity);
				toast.success("Item delivered");
			});
	};

	return (
		<div className="bg-dark text-light py-5 checkItem">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-12 col-lg-12 py-5 ">
						<h3 className="text-uppercase text-center">
							Restock the items
						</h3>
						<form
							className="w-50 mx-auto"
							onSubmit={increaseQuantity}
						>
							<div className="form-group mb-3">
								<label htmlFor="quantity">quantity</label>
								<input
									type="number"
									className="form-control"
									name="quantity"
									id="quantity"
									placeholder="Enter quantity"
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								{" "}
								Add
							</button>
						</form>
					</div>
				</div>
				<div className="row ">
					{
						/* loading spinner */
						(loading || loadings) && <Spinner />
					}
					<div className="col-md-12 col-lg-6">
						<div className="item-image">
							<img
								src={item.image}
								className="img-fluid"
								alt=""
							/>
							{item?.logo && (
								<img
									src={item?.logo}
									alt=""
									className="image-logo"
								/>
							)}
						</div>
					</div>
					<div className="col-md-12 col-lg-6">
						<div className="item-details">
							<h1 className="text-uppercase">{item.name}</h1>
							<p>{item.details}</p>
							<p>
								<b>PRICE: </b>
								{item.price}
							</p>
							<p>
								<b>QUANTITY: </b>
								{quantity}
							</p>
							<p>
								<b>SPILLER: </b>
								{item.supplier}
							</p>
							<div className="d-flex justify-content-between">
								{
									//   if quantity is greater than 0 or more then 0
									quantity > 0 ? (
										<button
											className="btn btn-info"
											onClick={() => delivery(item._id)}
										>
											DELIVERED
										</button>
									) : (
										<button
											className="btn btn-danger"
											disabled
										>
											SOLD OUT
										</button>
									)
								}

								<Link
									to="/inventory"
									className="btn btn-primary"
								>
									Manage Inventories
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Inventory;
