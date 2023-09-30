import { useState } from "react";
import TechContext from "../utils/techContext";

const TechProvider = ({ children }) => {
	const [techs, setTechs] = useState([
		{ name: "JavaScript", value: "javascript", active: true },
		{ name: "TypeScript", value: "typescript", active: false },
		{ name: "HTML", value: "html", active: false },
		{ name: "CSS", value: "css", active: false },
		{ name: "Python", value: "python", active: false },
		{ name: "Java", value: "java", active: false },
		{ name: "C#", value: "csharp", active: false },
		{ name: "C++", value: "cplusplus", active: false },
		{ name: "Ruby", value: "ruby", active: false },
		{ name: "PHP", value: "php", active: false },
		{ name: "Golang", value: "go", active: false },
		{ name: "Dart", value: "dart", active: false },
		{ name: "Swift", value: "swift", active: false },
		{ name: "Nodejs", value: "nodejs", active: false },
	]);

	const getActive = (arr) => {
		let result = "";
		arr.forEach((tech) => {
			if (tech.active) {
				result = tech.value;
			}
		});
		return result;
	};

	const [activeTech, setActive] = useState(getActive(techs));

	const updateSharedData = (newData) => {
		setTechs(newData);
		const newActiveTech = getActive(newData);
		setActive(newActiveTech);
	};

	return (
		<TechContext.Provider value={{ techs, activeTech, updateSharedData }}>
			{children}
		</TechContext.Provider>
	);
};

export default TechProvider;
