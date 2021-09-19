import React from 'react'
import RedVelvetRender from './RedVelvetRender'


const RedVelvetDestructure = ({posts}) => {
    return (
        <div>
            <div className="categoryFlex">
                {posts.map((article, index) => <RedVelvetRender article={article} key={index} />)} 
            </div>
        </div>
    )
}

export default RedVelvetDestructure
