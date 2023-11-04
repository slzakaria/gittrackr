const Badge = ({ children, color }) => {
	return (
		<div
			className={`rounded-lg p-1 text-center hover:scale-110 transition-all ${color} text-sm`}>
			{children}
		</div>
	);
};

export default Badge;
