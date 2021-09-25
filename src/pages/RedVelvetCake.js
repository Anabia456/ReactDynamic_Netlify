import React from 'react'
import { client } from '../Client'
import RedVelvetDestructure from '../components/RedVelvetDestructure'

class RedVelvetCake extends React.Component {

    state = {
        articles: []
    }

    componentDidMount(){
        client.getEntries({
            'content_type':'redVelvet'
        })
        .then((response) =>{
            console.log(response)
            this.setState({
                articles:response.items
            })
        })
        .catch(console.error)
    }

   render() {
       return (
           <div className="content">
               <RedVelvetDestructure posts={this.state.articles}/>
           </div>
       )
   }
}

export default RedVelvetCake
