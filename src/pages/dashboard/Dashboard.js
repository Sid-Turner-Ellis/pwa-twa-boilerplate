import React, {useContext, useEffect} from 'react'
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components'


export default function Dashboard({habits, setHabits}) {
 

  return (

    <div>
      <Typography variant="h3" align="center">Dashboard</Typography>
      <div>
        {
          habits.map((h,i)=> <p key={i}>{h.name}</p>)
        }
      </div>

    </div>

  )
}
