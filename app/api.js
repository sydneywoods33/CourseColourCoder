// app/api.js
export async function fetchColorScheme(courseCodes) {
	try {
		// Generate a random hex color
		const randomHex = Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, "0");

		const mode = "triad"; // Set mode to "complement"

		const count = courseCodes.length;

		const response = await fetch(
			`https://www.thecolorapi.com/scheme?hex=${randomHex}&mode=${mode}&count=${count}`
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data.colors;
	} catch (error) {
		console.error("Failed to fetch color scheme:", error);
		return [];
	}
}
