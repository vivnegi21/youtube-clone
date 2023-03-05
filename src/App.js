import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import {Navbar,Feed , VideoDetail, ChannelDetail, SearchFeed} from './components';

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor:"#000"}}>
            <Navbar/>
            <Routes>
                <Route path="/youtube-clone/" exact element={<Feed/>}/>
                <Route path="/youtube-clone/video/:id" exact element={<VideoDetail/>}/>
                <Route path="/youtube-clone/channel/:id" element={<ChannelDetail/>}/>
                <Route path="/youtube-clone/search/:searchTerm" element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )


export default App