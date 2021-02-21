const Donate = (props) => {
	return (
		<div className='donate'>
			<h3 className='donatePara'>
				It is with your charitable support that we bring a change in lives of
				several dogs. Your gift today, whatever sum you choose to give, will
				definitely help us save helpless dogs from suffering and give them the
				best treatment, care and love they need.
				<br />
				<span
					style={{
						color: "#ffb37a",
						fontFamily: "'Philosopher', sans-serif ", fontSize: "20px"
					}}>
					Become a proud member of our rescue team by making a donation.
				</span>
			</h3>
			<button type='button' className='donateBtn'>
				Donate Now
			</button>
		</div>
	);
};

export default Donate;
