const Tag = ({ name, value, active, onClick }) => {
	return (
		<div
			className={`border-2 ${
				active ? "border-details" : "border-secondary"
			} hover:border-details py-1 px-2 max-w-fit my-2 rounded-lg`}>
			<button onClick={onClick} className='hover:underline' value={value}>
				<span className='text-details hover:text-opposite'>{name}</span>
			</button>
		</div>
	);
};

export default Tag;
