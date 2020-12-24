import React from 'react'
import AddHabit from './AddHabit'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Styled from 'styled-components'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';

export default function HabitsArchive({habits, setHabits}) {
  console.log(habits);
  return (
    <div>
      Page listing all of the habits

      {/* Displaying an array of habit cards */}
      <List>
        {habits.map((habit, i) => {
          return(
            <StyledListItem  key={i}>{habit.name}
              <ListItemIcon>
                < DeleteIcon onClick={(e) => {
                  setHabits(prev => prev.filter(v => v != habit))
                }}/>
              </ListItemIcon>
            </StyledListItem>

          )
        })}
      </List>
      <AddHabit setHabits={setHabits} />
    </div>
  )
}

const StyledListItem = Styled(ListItem)`
  border: 1px gray solid;

`;