import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
const Register = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	//from submit
	const submitHandler = async (values) => {
		try {
			setLoading(true);
			await axios.post(
				`${import.meta.env.VITE_API_URL}/users/register`,
				values
			);
			message.success("Registeration Successfull");
			setLoading(false);
			navigate("/login");
		} catch (error) {
			setLoading(false);
			message.error("something went wrong");
		}
	};

	//prevent for login user
	useEffect(() => {
		if (localStorage.getItem("user")) {
			navigate("/");
		}
	}, [navigate]);
	return (
		<>
			<div className="resgister-page">
				{loading && <Spinner />}
				<Form layout="vertical" onFinish={submitHandler}>
					<h1 className="text-center">Register Form</h1>
					<div className="card border-primary p-5 mt-4">
						<Form.Item label="Name" name="name">
							<Input />
						</Form.Item>
						<Form.Item label="Email" name="email">
							<Input type="email" />
						</Form.Item>
						<Form.Item label="Password" name="password">
							<Input type="password" />
						</Form.Item>
						<div className="d-flex justify-content-between">
							<Link to="/login">Already Register ? Click Here to login</Link>
						</div>
						<div className="text-center">
							<button className="btn btn-primary d-block mx-auto mt-4">
								Register
							</button>
						</div>
					</div>
				</Form>
			</div>
		</>
	);
};

export default Register;
