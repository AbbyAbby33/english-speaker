import './App.scss';

function App() {

	// TODO: 看是否可以優化成一個實例，切換聲音，不要一直new SpeechSynthesisUtterance跟getVoices
	// TODO: stop speaker function
	// FIXME: 第一次的語系不對 -> 應該是還沒set好語系就開始播音了 -> 看要拆function還是處理非同步
	const speak = () => {
		const voices = window.speechSynthesis.getVoices();
		// console.log('voices', window.speechSynthesis.getVoices());

		const word = document.getElementById('wordGroup-0')?.innerText;
		console.log('word', word);

		const synth = window.speechSynthesis;
		const utterThis = new SpeechSynthesisUtterance(word);
		utterThis.pitch = 1;
		utterThis.voice = voices[4];
		utterThis.rate = 0.7;
		synth.speak(utterThis);
	}

	return (
		<div className="App">
			<table className="word-list-table">
				<tbody>
					<tr>
						<td id="wordGroup-0">mobile payments,commonplace,steadily,gaining traction,competitor,retailers,vendors,street vendors,transactions,underscores,society,dominated</td>
						<td>
							<button onClick={() => { speak() }}>speak</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
