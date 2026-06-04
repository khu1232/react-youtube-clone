import React from 'react'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'


class SearchBar extends React.Component {
    state = {
        searchTerm : "",
    }

    handleChange = (event) => {
        this.setState({searchTerm:event.target.value})
        // console.log(event.target.value)
    }

    handleSubmit = (event) =>{
        const {searchTerm} = this.state
        // console.log(searchTerm)
        const {onFormSubmit} = this.props 

        onFormSubmit(searchTerm)
        
        event.preventDefault()
    }
    


    render(){
        return(
            <Paper elevation={6} style={{padding:"25px"}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField className='text' style={{width:"100%"}} label="Search..." onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar
