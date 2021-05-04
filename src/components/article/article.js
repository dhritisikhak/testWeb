import React from "react"
import "./style.scss"
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

class ArticlePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dateTimeAgo: moment(this.props.articlePost.pub_date).fromNow()
    }
  }
  

  render() {
  return (
    <div className="card-body">
      
    <Grid item xs={12} style={{margin:`0 auto`, display:`flex`, justifyContent:`center`}}>  
      <div className="card" style={{marginTop:`20px`, border:`none`, cursor:`pointer`, overflow:`hidden`}}>
        <div>
        <img className="postImage" src={this.props.articlePost.feature_img} alt={this.props.articlePost.title}
         />
        </div>
        
        <div className="pt-4">
        <p className="postCategoryText pl-1">{this.props.articlePost.category}</p>
        <p className="postTitle pl-1">{this.props.articlePost.title}</p>
        <p className="postAuthor pl-1">
          {this.props.articlePost.auth_display.display_name}
        </p>
        <p className="postAuthorDate pl-1">
          {this.state.dateTimeAgo} | {this.props.articlePost.readtime}
        </p>
        </div>
      </div>
    </Grid>
    
    </div>
  )
  }
  }

class Articles extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
    articlePosts: [],
    page: 0,
    pageNum:0
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.infiniteScroll); // this is to call the infinite scroll function when the component is mounted
    this.fetchPostsArticles(this.state.page); //this is to call the fetch function the first time when the component is mounted with offset=0
  }

  infiniteScroll = () => {
    if (window.innerHeight +  window.scrollY >= document.body.offsetHeight){ // to check when we will reach the bottom of the page
      let newPage = this.state.page; // if we are at the bottom of the page then the offset is incremented to 10
      this.setState({
            page: newPage + 10,
      });
      this.fetchPostsArticles(newPage); //pass the offset (page) value to the API fetch function and call the function
    }
  }

  fetchPostsArticles = () => { //function to fetch the API data and assigned it to an array state for mapping
    console.log(this.state.page)
    let articlePostUrl = `https://www.scoopwhoop.com/api/v4/read/all/`;
    fetch((`${articlePostUrl}?offset=${this.state.page}&limit=8`))
    .then(res=>res.json())
    .then(data => {
      this.setState({
          articlePosts: [...this.state.articlePosts,...data.data],
      })
      console.log(this.state.articlePosts)
    })
  }


  render() {
    return (
      <div className="content-wrapper">
        <div className="pl-2">
        <div className="freshText">
                <p style={{color:`#ffffff`}}>
                    FRESH
                </p>
            </div>
        </div>
        <Grid container >
          {this.state.articlePosts.map((articlePostdata,idx) => (<ArticlePost key={idx} articlePost={articlePostdata} />))}
        </Grid>
        <div>
      </div>
      </div>
    );
  }
}

export default Articles ;

