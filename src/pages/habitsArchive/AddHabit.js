import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


export default function AddHabit({setHabits}) {
  const [habitName, setHabitName ] = useState('');

  const handleChange = (event) => {
    setHabitName(event.target.value);
  };

  return (
    <div>
      <form>
      <TextField id="standard-name" label="Name" value={habitName} onChange={handleChange} />
      <IconButton variant="contained" color="primary" onClick={(e)=>{
        setHabits(prev => [...prev, {name:habitName}])
      }}>
        <AddIcon/>
      </IconButton>
      </form>
    </div>
  )
}
