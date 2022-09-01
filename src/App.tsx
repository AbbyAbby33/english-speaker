import React from 'react';
import './App.scss';

function App() {

	// TODO: 看是否可以優化成一個實例，切換聲音，不要一直new SpeechSynthesisUtterance跟getVoices

	const speak = () => {
		const voices = window.speechSynthesis.getVoices();
		// console.log('voices', window.speechSynthesis.getVoices());

		const synth = window.speechSynthesis;
		const utterThis = new SpeechSynthesisUtterance('In the near future, cash could become obsolete, and your phone could completely replace your wallet.');
		utterThis.pitch = 1;
		utterThis.voice = voices[4];
		utterThis.rate = 0.8;
		synth.speak(utterThis);
	}

	return (
		<div className="App">
			<button onClick={() => { speak() }}>speak</button>
		</div>
	);
}

export default App;
