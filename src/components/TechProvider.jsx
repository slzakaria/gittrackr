import { useState, useMemo } from "react";
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
		{ name: "C++", value: "cpp", active: false },
		{ name: "Ruby", value: "ruby", active: false },
		{ name: "Rust", value: "rust", active: false },
		{ name: "PHP", value: "php", active: false },
		{ name: "Golang", value: "go", active: false },
		{ name: "Dart", value: "dart", active: false },
		{ name: "Swift", value: "swift", active: false },
		{ name: "Bash", value: "bash", active: false },
		{ name: "Shell", value: "shell", active: false },
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

	const contextValue = useMemo(() => {
		return { techs, activeTech, updateSharedData };
	}, [techs, activeTech, updateSharedData]);

	return <TechContext.Provider value={contextValue}>{children}</TechContext.Provider>;
};

export default TechProvider;
