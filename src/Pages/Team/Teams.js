import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner";
import team from "./images/team.jpg";
import Team from "./Team";
import "./Team.css";
const Teams = () => {
	const [teams, setTeams] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios.get("http://localhost:5000/teams").then((res) => {
			setTeams(res.data);
			setLoading(false);
		});
	}, []);
	return (
		<div className="bg-dark light-border">
			<div className="container text-white py-5">
				<div className="row">
					<div className="col-md-12 col-lg-5 align-items-center d-flex">
						<h1 className=" font-weight-bold team-text py-4">
							{" "}
							Our Team{" "}
						</h1>
					</div>
					<div className="col-md-12 col-lg-7">
						<img src={team} className="img-fluid team-img" alt="" />
					</div>
				</div>

				{/* team member show  */}
				<div className="row row-cols-1 my-5 row-cols-md-3 g-4 my-5">
					{teams.map((team) => (
						<Team key={team._id} team={team} />
					))}
				</div>
				{
					// if loading is true show loading
					loading && <Spinner />
				}
			</div>
		</div>
	);
};

export default Teams;
