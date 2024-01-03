import { useContext, useState } from "react";
import TechContext from "../utils/techContext";
import Tag from "./UI/Tag";

const SideBar = () => {
	const { techs, updateSharedData } = useContext(TechContext);
	const [localList, setLocal] = useState([...techs]);

	const updateData = (newTech) => {
		localList.forEach((tech) => {
			tech.active = false;
			if (tech.value === newTech.value) {
				tech.active = !tech.active;
			}
		});
		let result = [...localList];
		setLocal(result);
		updateSharedData(result);
	};

	return (
		<aside
			className={`hidden pt-16 w-[30dvw] text-white bg-primary fixed inset-y-0 overflow-x-hidden overflow-hidden sm:block`}>
			<div className='p-4 min-h-full mt-4'>
				<div className='px-6 pb-6 flex items-start sm:flex-col'>
					<div className='hidden px-3 text-white text-base sm:block'>
						<h2 className={`text-details text-xl underline my-2`}>About Git trackr :</h2>
						<p className={`text-textColor`}>
							Fetches and lists all github repositories who have open issues and have been active
							the last 6 months.
							<br />
							Find active easy repos to help on !
						</p>
					</div>
					<div className='hidden px-3 text-white text-base sm:block mt-10'>
						<h2 className={`text-details underline my-2 text-xl`}>Filter by technology :</h2>
						<div className='my-4 flex flex-wrap gap-2 mx-auto'>
							{localList.map((tech) => (
								<Tag
									onClick={() => updateData(tech)}
									key={tech.value}
									name={tech.name}
									value={tech.value}
									active={tech.active}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default SideBar;
