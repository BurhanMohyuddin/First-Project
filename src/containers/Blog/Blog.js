import React, { Component } from "react";

import Post from "../../components/Post/Post";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";


class Blog extends Component {
    state = {
        posts: [
            {title: 'Sharks in an Aquarium',
            content: `This news is from an aquarium. The aquarium is in South Korea. 
            There are sharks in the aquarium. A big shark attacks a smaller shark. 
            The big shark eats the small shark. The small shark hangs out of the big shark’s mouth. 
            Visitors see this. They are shocked. This is rare. Usually, sharks do not eat other sharks. However,
             sharks can be territorial`,
            date: ``},
            {title: 'Canada and Television' ,
            content: `Entertainers perform in theaters in the past. They want all people to like their work.
             Today people make TV shows and movies. Companies want all people in the world to like their work.
             The USA is famous for its TV shows. However, a company says that Canada makes the most popular shows in the world.
             People like drama stories and children’s programs the best. These shows are also in English. Many people want to see shows in English.`,
            date: new Date().toLocaleDateString()},
            {title: '1 Million People Die from COVID-19',
             content: `The coronavirus or COVID-19 starts in China nine months ago. The number of people dead from COVID-19 reaches one million now.
              More than 33 million people get sick in all of the world.
              The situation is very serious. The leader of United Nations speaks in public. He says that people and countries must help each other.
              One million is a very big number. People stop thinking about every single life. However, every dead person is somebody´s family or friend.`,
            date:new Date().toLocaleDateString()},
        ]
    }

      // const currentDate = new Date().toLocaleDateString();
      onAddNewPost(newValue) {
        this.setState({
          posts: this.state.posts.concat(
            {title: newValue.title,
            content: newValue.body,
            date: newValue.date}
          )
        })

        console.log('xaxa', newValue);
      }
  render() {
      let posts = null;
      posts = (
          <div>
              {this.state.posts.map((post,index) => {
                  return <Post 
                  title ={post.title}
                  content = {post.content}
                  date = {post.date}
                  key = {index}
                  />
              })
              }

          </div>
      )
    return (
      <div>
        <section className="Posts">
            {posts}
        </section>
        <section>
          <NewPost addNewPost = {this.onAddNewPost.bind(this)}
          />
        </section>
      </div>
    );
  }
}

export default Blog;
