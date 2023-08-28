import React, {useState} from 'react'

function Reservations () {
const [name, setName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [numberOfGuests, setNumberOfGuests] = useState('');
const [date, setDate] = useState('');
const [occasion, setOccasion] = useState('');
const [time, setTime] = useState('');
const [availableTime, setAvailableTime] = useState({date})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,lastName,email,numberOfGuests,occasion,date);
        console.log(availableTime);
    }
    return (
        <div id="reservation" className="reservation-wrapper">
            <h1>Make a Reservation</h1>
            <form className="reservation-form"onSubmit={handleSubmit}>
               <span className="entry-container">
                <span className="left-column">
                    <label for="name">First and Last Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Enter Your First and Last Name" />
                    <label for="occasion">Occasion</label>
                    <select value={occasion} onChange={(e) => setOccasion(e.target.value)} id="occasion" placeholder="Choose an occasion" >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    </select>
                    <label for="date">Choose a Date</label>
                    <input value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="Select a date" />
                </span>
                <span className="right-column">
                    <label for="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
                    <label for="number-guests">Number of Guests</label>
                    <input value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" />
                    <label for="occasion">Select a Time</label>
                    <select value={time} onChange={(e) => setTime(e.target.value)} id="time" placeholder="Choose a Time" >
                    <option>select a time</option>
                    <option>3:00pm</option>
                    <option>4:00pm</option>
                    <option>5:00pm</option>
                    <option>6:00pm</option>
                    <option>7:00pm</option>
                    <option>8:00pm</option>
                    <option>9:00pm</option>
                    <option>10:00pm</option>
                    </select>
                </span>
                </span>
                <span className="form-button-wrapper">
                    <button type="submit">Submit Reservation</button>
                </span>
            </form>
        </div>
    )
}

export default Reservations