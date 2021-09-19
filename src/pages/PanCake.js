import React from 'react'
import { client } from "../Client"
import PanCakeDestructure from '../components/PanCakeDestructure'


class PanCake extends React.Component {

    state = {
        articles: []
      }
    
      componentDidMount() {
        client.getEntries({
        'content_type': 'cheeseCake',
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
                <PanCakeDestructure posts={this.state.articles} />
              </div>
            </div>
        )
    }
}

export default PanCake
