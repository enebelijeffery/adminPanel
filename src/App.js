import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/constacts";
import Invoice from "./scenes/invoice";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import BarChart from "./scenes/barchart";
import PieChart from "./scenes/piechart";
import LineChart from "./scenes/linechart";
import Map from "./scenes/map";
import { ColorModeContext, useChangeMode } from './theme';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import Topbar from "./global/TopBar";
import MySidebar from "./global/SideBar";






function App() {
  const [theme, changeMode] = useChangeMode()
  const themee = theme()
  console.log(themee.palette)
  return (
    <ColorModeContext.Provider value={changeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MySidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<BarChart />} />
              <Route path="/pie" element={<PieChart />} />
              <Route path="/line" element={<LineChart />} />
              <Route path="/map" element={<Map/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
