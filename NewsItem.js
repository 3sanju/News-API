import React, { Component } from 'react'

export class NewsItem extends Component{
  render() {
    let{title,description,imageurl,newsurl}=this.props;
    return (
    <>
    <div className="card" style={{width:"18rem"}}>
      <img src={!imageurl?"https://images.unsplash.com/photo-1690181738708-1b3807381167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80":imageurl} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title"> {title}</h5>
      <p className="card-text">{description}</p>
      <a href={newsurl} target='_blank' className="btn btn-primary">Read More</a>
      </div>
      </div>  
    </>
    )
  }
}

export default NewsItem
