import React from 'react'

import Grid from "@mui/material/Grid"
// import {SearchBar , VideoDetail , VideoList} from "@material-ui/icons"

import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import Youtube from './components/Youtube'



class App extends React.Component {
  state = {
    videos :[],
    selectedVideo:null,
  }

  componentDidMount(){
    this.handleSubmit('pdf generation with react and node')
  }

  onvideoSelect = (video) =>{
    this.setState({selectedVideo : video})
  }
  
  handleSubmit = async (searchTerm) =>{
    try{
      const response = await Youtube.get('search',{params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBZhe3_b1PFUXnWbYx3TpLrl5jMIpt1lpc",
        q:searchTerm,
    }})
    this.setState({videos:response.data.items , selectedVideo:response.data.items[0]})
  }catch(err){
    console.log(err.response)
    console.log(err.response.data)
  }
  }
  render(){
    const {selectedVideo,videos} = this.state
    return (
      <Grid container spacing={10} justifyContent="center">
        <Grid item xs={12}>
          <Grid container spacing={16}>

            <Grid item xs={12}>
              {/* Search Bar */}
              <SearchBar onFormSubmit = {this.handleSubmit}/>
            </Grid>

            <Grid item xs={12}>
              {/* Video details  */}
              <VideoDetails video = {selectedVideo}/>
            </Grid>

            <Grid item xs={12}>
              {/* Video list */}
              <VideoList videos={videos} onVideoSelect={this.onvideoSelect} />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      // <Youtube/>
    )
  }
}

// const App = () => {
//   return (
//     <div>
//       <h1>Youtube Clone App</h1>
//       <Youtube/>
//     </div>
//   )
// }


export default App


// import React from 'react'
// import SearchBar from './components/SearchBar'
// import VideoDetails from './components/VideoDetails'

// const App = () => {
//   return (
//     <div>
//       <SearchBar/>
//       <VideoDetails/>
//     </div>
//   )
// }

// export default App
