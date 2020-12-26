import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard'
import HabitsArchive from './pages/habitsArchive/HabitsArchive'
import Bar from './pages/components/Bar'
import { StylesProvider , createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Styled from 'styled-components'
import{ GlobalProvider} from './context/GlobalProvider'
import useDB from './database/useDB'



let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


export default function App() {
  const db = useDB;
  const [habits, setHabits] = useState([])

 



  return (
    <GlobalProvider>
        <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container maxWidth="sm">
        <Router>
          <Switch>
            <Route exact path="/" component={()=> <Dashboard habits={habits} setHabits={setHabits} />}/>
            <Route path="/habits" component={()=> <HabitsArchive db={db} habits={habits} setHabits={setHabits} />}/>
          </Switch>
          <Bar/>
        </Router>
        </Container>
        </ThemeProvider>
        </StylesProvider>
    </GlobalProvider>

  )
}
