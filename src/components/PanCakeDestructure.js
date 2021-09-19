import React from 'react'
import PanCakeRender from './PanCakeRender'

const PanCakeDestructure = ({posts}) => {
    return (
        <div>
            <div className="categoryFlex">
                {posts.map((article, index) => <PanCakeRender article={article} key={index} /> )}
            </div>
        </div>

    )
}

export default PanCakeDestructure