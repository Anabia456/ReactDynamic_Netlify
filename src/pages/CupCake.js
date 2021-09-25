import React from 'react'
import $ from "jquery"
import { client } from "../Client"
import CupCakeDestructure from '../components/CupCakeDestructure'


class CupCake extends React.Component {

  jqueryCode = () => {
    $('html, body').animate({
        scrollTop:$('.content').offset().top
    }, 200);
};
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
        this.jqueryCode();
      }

    render(){
        return(
            <div className="content">
              <div className="d-flex">
                <CupCakeDestructure posts={this.state.articles} />
              </div>
            </div>
        )
    }
}

export default CupCake
