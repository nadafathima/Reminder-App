import React,{useState,useEffect} from 'react'
import './Reminder.css'

function Reminder() {

    const [reminder, setReminder] = useState([]);
    const [newReminder, setNewReminder] = useState("");

    const handleInputChange = (event)=>{
        setNewReminder(event.target.value)
    }

    const handleAddReminder = ()=>{
        if (newReminder.trim()) {
            setReminder([...reminder,newReminder])
            setNewReminder("")
        }
        // console.log(reminder);
    }

    const handleDeleteReminder=(index)=>{
        setReminder(reminder.filter((item,itemIndex) => itemIndex !=index))
    }

  return (
    <>
      <div className="container">
        <h1>Reminder App</h1>
        <div className='Input-container'>
            <input type="text" value={newReminder} placeholder='Enter a Reminder' onChange={handleInputChange} />
            <button className='add-btn' onClick={handleAddReminder} >Add Reminder</button>
        </div>
        <div>
            {
                reminder.length > 0 ?(
             <ul className='reminder-list'>
             {
                 reminder.map((reminder,index)=>(
                     <li key={index}>
                         {reminder}
                         <button onClick={()=> handleDeleteReminder(index)} className='dlt-btn'>Delete</button>
                     </li>
                 ))
             }
         </ul>
                )

         :

            <p> No Reminders!!</p>            
            }
        </div>

      </div>
    </>
  )
}

export default Reminder
