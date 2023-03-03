import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import {Navbar,Feed , VideoDetail, ChannelDetail, SearchFeed, SearchBar } from './components';

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor:"#fff"}}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/video/:id" exact element={<VideoDetail/>}/>
                <Route path="/channel/:id" element={<ChannelDetail/>}/>
                <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )


export default App