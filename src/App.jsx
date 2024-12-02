import { Box } from "@mui/material"
import "./App.css"
import Header from "./components/layout/Header"
import LandingPage from "./views/landing/LandingPage"

function App() {
  return (
    <>
      <Header />
      <Box>
        <LandingPage />
      </Box>
    </>
  )
}

export default App
