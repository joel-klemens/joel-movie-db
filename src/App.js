import React from 'react';
import styled from 'styled-components'; 

const MainPage = styled.div`
	position: relative;
	height: 100vh;
	background-color: #20232a;
	.main-section {
		color: white;
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;

		.search-field {
			padding: 5px;
		}
	}
`;



function App() {
	return (
		<MainPage>
			<div className='main-section'>
				<input type="search" className='search-field'></input>
			</div>
		</MainPage>
	);
}

export default App;
