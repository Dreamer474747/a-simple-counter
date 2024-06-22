import { useState, useEffect } from "react";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import type { Value } from "react-multi-date-picker"


function App() {
	
	const [value, setValue] = useState<Value>(new Date());
	
	const [second, setSecond] = useState(0);
	const [minute, setMinute] = useState(0);
	const [hour, setHour] = useState(0);
	const [day, setDay] = useState(0);
	const [week, setWeek] = useState(0);
	const [month, setMonth] = useState(0);
	const [myInterval, setMyInterval] = useState(0);
	
	useEffect(() => {
	
		if (second) {
			
			if (myInterval) {
				clearInterval(myInterval);
			}
			
			let intervalId = setInterval(() => {
				
				setSecond(second + 1);
			}, 1000)
			
			setMyInterval(intervalId);
			
		}
		
	}, [second])
	
	
	
	const changeHandler = (event: any) => {
		const date = new Date(event);
		setValue(date);
		
		const totalTimeInMilliSeconds = new Date().getTime() - date.getTime();
		
		const totalTimeInSeconds = Number((totalTimeInMilliSeconds / 1000).toFixed());
		const totalTimeInMinutes = Number((totalTimeInSeconds / 60).toFixed());
		const totalTimeInHours = Number((totalTimeInMinutes / 60).toFixed());
		const totalTimeInDays = Number((totalTimeInHours / 24).toFixed());
		const totalTimeInWeeks = Number((totalTimeInDays / 7).toFixed());
		const totalTimeInMonths = Number((totalTimeInDays / 30).toFixed());
		
		setSecond(totalTimeInSeconds);
		setMinute(totalTimeInMinutes);
		setHour(totalTimeInHours);
		setDay(totalTimeInDays);
		setWeek(totalTimeInWeeks);
		setMonth(totalTimeInMonths);
	}
	
	return (
		
		<div className="container">
		
			<h3>روز تولد خود را انتخاب کنید.</h3>
			<DatePicker
				calendar={persian}
				locale={persian_fa}
				calendarPosition="bottom-right"
				value={value}
				onChange={(event) => changeHandler(event)}
			/>
			
			{
				second ? (
					<>
						<h3>چقدر از زمان تولدم گذشته؟</h3>
						<h2>{`${second.toLocaleString()} ثانیه`}</h2>
						<p>یا</p>
						
						<h2>{`${minute.toLocaleString()} دقیقه`}</h2>
						<p>یا</p>
						
						<h2>{`${hour.toLocaleString()} ساعت`}</h2>
						<p>یا</p>
						
						<h2>{`${day.toLocaleString()} روز`}</h2>
						<p>یا</p>
						
						<h2>{`${week.toLocaleString()} هفته`}</h2>
						<p>یا</p>
						
						<h2>{`${month.toLocaleString()} ماه`}</h2>
					</>
				) : ""
			}
		
		</div>
	)
}

export default App;
