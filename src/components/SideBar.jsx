import { useContext, useState } from "react";
import Tag from "./UI/Tag";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import TechContext from "../utils/techContext";

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
			className={`hidden pt-16 w-[30dvw] text-white bg-primary fixed inset-y-0 overflow-x-hidden overflow-hidden sm:block border-r-2 border-details`}>
			<div className='p-4 min-h-full mt-4'>
				<div className='px-6 pb-6 flex items-start sm:flex-col'>
					<div className='hidden px-3 text-white text-base sm:block'>
						<h2 className={`text-details text-xl underline my-2`}>About Git trackr :</h2>
						<p className={`text-textColor`}>
							Fetches and lists all github repositories who have open issues and have been
							active the last 3 months.
							<br />
							Find active easy repos to help on !
						</p>
					</div>
					<div className='hidden px-3 text-white text-base sm:block mt-10'>
						<h2 className={`text-details underline my-2 text-xl`}>
							Filter by technology :
						</h2>
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
					<div className='hidden px-3 text-white text-base sm:block mt-10'>
						<h2 className={`text-details my-2 text-xl`}>
							Noticed a bug to fix or feature to add ? Reach me here :
						</h2>
						<div className='my-4 flex gap-6 justify-center items-center mx-auto text-xl'>
							<a
								href='https://github.com/Zackaria-Slimane'
								target='_blank'
								className={`text-details transform origin-center hover:text-opposite hover:scale-125`}>
								<FaGithub />
							</a>

							<a
								href='https://twitter.com/gitignorer'
								target='_blank'
								className={`text-details transform origin-center hover:text-opposite hover:scale-125`}>
								<FaSquareXTwitter />
							</a>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default SideBar;
