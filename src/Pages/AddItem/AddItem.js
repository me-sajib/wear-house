import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const AddItem = () => {
	const [user] = useAuthState(auth);

	const addBike = (e) => {
		e.preventDefault();

		if (user) {
			const email = user.email;
			const name = e.target.bikeName.value;
			const price = e.target.price.value;
			const quantity = e.target.quantity.value;
			const description = e.target.description.value;
			const details = e.target.details.value;
			const image = e.target.image.value;
			const supplier = e.target.supplier.value;

			if (
				email === "" ||
				name === "" ||
				price === "" ||
				quantity === "" ||
				description === "" ||
				details === "" ||
				image === "" ||
				supplier === ""
			) {
				return toast.error("Please fill all fields");
			}
			const item = {
				name,
				price,
				quantity,
				description,
				details,
				image,
				supplier,
				email,
			};

			fetch("http://localhost:5000/addItemByUser", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(item),
			})
				.then((res) => res.json())
				.then((data) => {
					toast.success("Item added successfully");
					e.target.reset();
				});
		}
	};
	return (
		<div className="bg-dark text-light py-5 light-border">
			<div className="container">
				<h2 className="text-center text-primary py-3">ADD ITEM</h2>
				<form onSubmit={addBike} className="form-user">
					<div className="form-group mb-3">
						<label htmlFor="nameInput">Name</label>
						<input
							type="text"
							className="form-control"
							id="nameInput"
							name="bikeName"
							placeholder="Enter item name"
						/>
					</div>
					<div className="form-group mb-3">
						<label htmlFor="priceInput">Price</label>
						<input
							type="text"
							className="form-control"
							id="priceInput"
							name="price"
							placeholder="Enter item price"
						/>
					</div>
					<div className="form-group mb-3">
						<label htmlFor="quantityInput">Quantity</label>
						<input
							type="number"
							className="form-control"
							id="quantityInput"
							name="quantity"
							placeholder="Enter item quantity"
						/>
					</div>
					<div className="form-group mb-3">
						<label htmlFor="Description">Description</label>
						<input
							type="text"
							className="form-control"
							id="Description"
							name="description"
							placeholder="Enter item Description"
						/>
					</div>
					<div className="form-group mb-3">
						<label htmlFor="details">Details Item</label>

						<textarea
							name="details"
							id="details"
							className="form-control"
							placeholder="enter your item details"
						></textarea>
					</div>
					<div className="form-group mb-3">
						<label htmlFor="image">Image URL</label>
						<input
							type="text"
							className="form-control"
							id="image"
							name="image"
							placeholder="Enter item image url"
						/>
					</div>
					<div className="form-group mb-3">
						<label htmlFor="supplier">Supplier Name</label>
						<input
							type="text"
							className="form-control"
							id="supplier"
							name="name"
							placeholder="Enter item supplier name"
						/>
					</div>
					<button className="btn btn-primary">
						ADD ITEM <i className="fa-solid fa-circle-plus"></i>
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddItem;
