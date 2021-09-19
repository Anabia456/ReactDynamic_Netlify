import React from 'react'

const RedVelvetRender = ({ article }) => {
    console.log(article)
    const { thumbnail, title, price } = article.fields
    return (
        <div>
            <div className="mt-2">
                <div className="content">
                    <img src={thumbnail.fields.file.url} className="mt-3" alt="" />
                    <h4 className="mt-3" style={{color:'#fff'}}>{title}</h4>
                    <h5 className="mt-3">{price}</h5>
                    <button className="showBtn mt-3">Show</button>
                </div>
            </div>
            <div className="mt-5"></div>
        </div>
    )
}

export default RedVelvetRender
