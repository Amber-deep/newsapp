import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props) =>  {

  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(true)
  const[page, setPage] = useState(1)
  const[totalResults, settotalResult] = useState(0)

  const capatilizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // constructor(props){
  //   super(props);
    
  // }

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=0c13c1e1bd254ce98257c540551a4983&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);

    let parseData = await data.json();
    props.setProgress(70);
    setArticles( parseData.articles)
    settotalResult(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);

  }

  useEffect(() => {
      document.title = `${capatilizeFirstLetter(props.category)} - FaltuNews`;
      updateNews();
  }, [])

  // const clickPreviousBtn= async () =>{
    // console.log("previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=0c13c1e1bd254ce98257c540551a4983&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading: false
    // })
  //   setPage(page-1);
  //   updateNews();
  // }

  // const clickNextBtn= async () =>{
  //   setPage(page+1);
  //   updateNews();
  // }

  const fetchMoreData = async () => { 
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=0c13c1e1bd254ce98257c540551a4983&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    settotalResult(parseData.totalResults)
  };

    return (
      <div className='container my-3'>
        <h1 className=' text-center' style={{margin:"90px 0px 30px 0px"}}>Faltu News - Top {capatilizeFirstLetter(props.category)} HeadLines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row'>
          {!loading && articles.map((element) =>{
            return <div className='col-md-4 my-3' key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}
               imageUrl = {element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className='container my-3 d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.clickPreviousBtn}>&laquo; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.clickNextBtn}>Next &raquo;</button>
        </div> */}
      </div>
    )

}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
