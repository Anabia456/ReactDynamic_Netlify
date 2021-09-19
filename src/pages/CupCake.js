import React from 'react'
import { client } from "../Client"
import CupCakeDestructure from '../components/CupCakeDestructure'


class CupCake extends React.Component {

    state = {
        articles: []
      }
    
      componentDidMount() {
        client.getEntries({
        'content_type': 'cupCake',
        })
        .then((response) => {
          // console.log(response)
          this.setState({
            articles: response.items
          })
        })
        .catch(console.error)
      }

    render(){
        return(
            <div>
              <div className="d-flex">
                <CupCakeDestructure posts={this.state.articles} />
              </div>
            </div>
        )
    }
}

export default CupCake
