import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
 import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {

const [articles, setArticles]  = useState([])
const [loading, setLoading]  = useState(true)
const [page, setPage]  = useState(1)
const [totalResults, setTotalresults]  = useState(0)




  const capitalizeFirstLetter  = (string) =>{
   return string.charAt(0).toUpperCase() + string.slice(1);
 }



  const updateNews = async()=>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30)
    setLoading(true)
    let parseData = await data.json()
    props.setProgress(50)
    setArticles(parseData.articles)
    setTotalresults( parseData.totalResults)
   setLoading(false)
    
        props.setProgress(100)
  }
  



useEffect(()=>{
   document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
  updateNews()
  // eslint-disable-next-line 
},[])

  const  fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
    let data = await fetch(url)
    
     let parseData = await data.json()
     // console.log(parseData
     setArticles(articles.concat(parseData.articles))
     setTotalresults(parseData.totalResults)
       
  };

    return (
     <>
        <h1 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)}</h1>
      
         {loading && <Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element)=>{ 
               return <div className="col-md-4" key={element.url}> 
     <NewsItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0,85):""} urlToImage={!element.urlToImage?"https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202307/pti06_21_2023_000263a-sixteen_nine.jpg?VersionId=4K3JuSPWOnmhsvH3LiCbFIgfHQ7QHUm4":element.urlToImage} url={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
     </div>
          })}
          </div>
     </div>
     </InfiniteScroll>
     {/* <div className="container my-2 d-flex justify-content-between">
<button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
<button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>

</div> */}
    </>
    )
  }


export default News


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}