import React, { Component } from 'react';
import Modal from './Modal';
import n from './News.module.css';

export default class News extends Component {

  updateState = (id, news) => {
    this.props.updateNewsId(id);
    this.props.updateNewsText(news);
  }

  render() {
    return (
      <div>
        <div> 
          <Modal {...this.props} />
        </div>
        <table className="table">
          <thead>

          </thead>
          <tbody className={n}>
            {this.props.news.map(item => (
                item.active == 1?
                <tr key={item.id} onClick={() => { 
                  this.updateState(item.id, item.news)
                  this.className={n}
                  } }
                  >
                  <td className="align-center">{item.id}</td>
                  <td className="align-center">{item.news}</td>
                </tr>: ""        
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}
