import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
	//후크 함수, 컴포넌트의 상태를 간편히 생성 및 업데이트 해주는 도구
	 const [temp, setTemp] = useState(''); 
	 const [desc, setDesc] = useState('');
	 const [ready, setIcon] = useState('');
	 const [isReady, setReady] = useState(false);
	 
	React.useEffect(() => {
		fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API 키}')
			.then(result => result.json()) //API 응답을 JSON으로 변환
			.then(jsonResult => {
				setTemp(jsonResult.main.temp -273.15);
				setDesc(jsonResult.weather[0].main);
				setIcon(jsonResult.weather[0].icon);
				setReady(true);
			})
			.catch(err => console.error(err))
			}, [])
			
			
	if(isReady)
		{
			return(
			<div className="App">
			<p> 온도 : {temp} °C </p>
			<p> 설명 : {desc} </p>
			<img 			src={'http://openweathermap.org/img/wn/${icon}@2x.png'}
				alt = "온도 아이콘"/>
			</div>
			);
		}                                                                                                                                                                                                                                                                                                                                                                                         
	else
	{
		return <div> 데이터 로딩중입니다 </div>
	}
}

export default App;
