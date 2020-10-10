import React, { Component } from 'react';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        date: new Date().toLocaleDateString()
    }

    newPostHandler = (event) => {
        event.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.content,
            date: this.state.date
        }
        this.setState({
            title: '',
            content: ''})
       console.log(post);
       this.props.addNewPost(post);
    } 
    render () {
        return (
            <div className="NewPost">
                <h1>Add an Article</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <button onClick ={this.newPostHandler.bind(this)}>Add </button>
            </div>
        );
    }
}

export default NewPost;