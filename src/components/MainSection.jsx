import { useState, useEffect, useContext } from "react";
import TechContext from "../utils/techContext";
import { useFetch } from "../utils/useFetch";
import toast from "react-hot-toast";
import Card from "./UI/Card";

const MainSection = () => {
	const { techs, updateSharedData, activeTech } = useContext(TechContext);
	const [issues, setIssues] = useState([]);
	const [selectedValue, setSelectedValue] = useState(activeTech);
	const [localList, setLocal] = useState(techs);

	const handleChange = (event) => {
		let selected = event.target.value;
		setSelectedValue(selected);

		localList.forEach((tech) => {
			tech.active = false;
			if (tech.value === selected) {
				tech.active = !tech.active;
			}
		});

		let result = [...localList];
		setLocal(result);
		updateSharedData(result);
	};

	const { data, isError } = useFetch(
		`https://git-tracker.onrender.com/api/issues/${activeTech}`
	);

	useEffect(() => {
		toast.dismiss();
		toast.loading("Fetching issues...");

		if (data != null) {
			const newData = data;
			setIssues(newData);
			toast.dismiss();
			toast.success(`Fetched ${newData.length} ${activeTech} issues`);
		}

		if (isError) {
			toast.error("Something Went wrong with the request please try again");
		}
	}, [activeTech, data]);

	return (
		<main className='h-full pb-6 pt-24 px-6 w-full sm:max-w-[70dvw] fixed right-0 bg-primary min-h-screen overflow-y-scroll'>
			<h1 className='text-details uppercase tracking-wider text-center my-6'>
				{activeTech === "any" ? "Recent open  issues" : activeTech + " Open Issues"}
			</h1>
			<div className='w-full px-2 sm:hidden mx-auto my-6'>
				<label
					htmlFor='languages'
					className='block mb-2 text-sm font-medium text-accent dark:text-white'>
					Select a language
				</label>
				<select
					value={selectedValue}
					onChange={handleChange}
					id='languages'
					className='bg-primary border border-gray-300 text-textColor text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
					{techs.map((tech) => (
						<option key={tech.value} value={tech.value}>
							{tech.name}
						</option>
					))}
				</select>
			</div>

			<div className='flex flex-col gap-6 w-full sm:w-4/5 mx-auto'>
				{issues?.length > 0 ? (
					issues.map((issue) => <Card key={issue?.html_url} {...issue} />)
				) : (
					<p className='text-2xl text-center text-details underline mt-10'>
						No recent relevant issues found
					</p>
				)}
			</div>
		</main>
	);
};

export default MainSection;
