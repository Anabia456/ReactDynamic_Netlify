import React from 'react'
import CupCakeRender from './CupCakeRender'

const CupCakeDestructure = ({posts}) => {
    return (
        <div>
            <div className="categoryFlex">
                {posts.map((article, index) => <CupCakeRender article={article} key={index} /> )}
            </div>
        </div>

    )
}

export default CupCakeDestructure
