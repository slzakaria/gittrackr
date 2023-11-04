import Badge from "./Badge";

const Card = ({
	name,
	description,
	open_issues_count,
	html_url,
	pushed_at,
	stargazers_count,
	language,
}) => {
	return (
		<div
			className={`bg-primary border-2 border-details hover:bg-secondary rounded-xl p-4 flex gap-2 justify-between cursor-default`}>
			<div className='max-w-[200px] sm:max-w-[400px] '>
				<a
					href={html_url}
					target='_blank'
					className='text-xl text-details cursor-pointer truncate'>
					{name}
				</a>
				<p className='text-sm mt-4  text-textColor truncate'>{description}</p>
				<a href={html_url} target='_blank' className='text-sm mt-6 text-accent truncate'>
					<span> Visit the repo </span>
				</a>
				<div className='flex gap-6 items-center text-textColor p-1 mt-4'>
					<p className='text-sm text-textColor border-2 py-1 px-2 border-details rounded-lg '>
						{" "}
						{language}
					</p>
					<p className='text-sm text-details p-1'> {stargazers_count} Stars</p>
				</div>
			</div>
			<div className='max-w-fit flex flex-col justify-around'>
				<div className='cursor-pointer'>
					<Badge color='bg-details'>
						<a href={html_url} target='_blank'>
							<span className='text-primary'> {open_issues_count} Issues</span>
						</a>{" "}
					</Badge>
				</div>
				<div>
					<p className='text-details underline'>{pushed_at}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
