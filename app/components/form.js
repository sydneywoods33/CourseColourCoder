// app/components/form.js
import React, { useState } from "react";

export default function FormPage({ setCourseCodes, colors }) {
	const [inputs, setInputs] = useState(["", "", ""]);

	const handleInputChange = (index, value) => {
		const newInputs = [...inputs];
		newInputs[index] = value;
		setInputs(newInputs);
		setCourseCodes(newInputs);
	};

	return (
		<div style={styles.container}>
			<h1 style={styles.title}>Input Course Codes</h1>
			<form style={styles.form}>
				{inputs.map((value, index) => (
					<div key={index} style={{ display: "flex", alignItems: "center" }}>
						<input
							type="text"
							placeholder={`Input ${index + 1}`}
							value={value}
							style={styles.input}
							onChange={(e) => handleInputChange(index, e.target.value)}
						/>
						{colors && colors[index] && (
							<div
								style={{
									width: "20px",
									height: "20px",
									backgroundColor: colors[index].hex.value,
									marginLeft: "10px",
									borderRadius: "50%",
								}}
							></div>
						)}
					</div>
				))}
			</form>
		</div>
	);
}

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "20px",
	},
	title: {
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "20px",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	input: {
		width: "200px",
		padding: "10px",
		margin: "10px 0",
		border: "1px solid black",
		borderRadius: "4px",
		color: "black", // Set text color to black
	},
};
