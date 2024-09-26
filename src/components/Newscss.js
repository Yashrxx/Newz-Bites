import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class Newscss extends Component {
  capitalizefirstletter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  constructor(props){
    super(props);
    this.state={
      articles:[],
      page:1,
      totalResults:68,
      loading:false
    }
    document.title=`${this.capitalizefirstletter(this.props.category)}-NewsBites`;
  }
   static defaultProps ={
    country : 'us',
    pageSize:8,
    category:'general',
   }
   static propTypes={
    country : PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
   }
   async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f16970474a5a466380c187326ed5f8c2&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url)
    let pardesdData=await data.json()
    this.setState({articles:pardesdData.articles,
      totalResults:pardesdData.totalResults,
    loading:false})
   }
  handeleNextClick= async()=>{
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/20))){
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f16970474a5a466380c187326ed5f8c2&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data=await fetch(url)
    // let pardesdData=await data.json()
    // this.setState({
    //   page:this.state.page+1,
    //   articles:pardesdData.articles,
    //   loading:false})
    //   console.log(this.state.page)
    this.setState({
      page:this.state.page+1
    })
    this.updateNews()
  }
  handelePrevClick= async()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f16970474a5a466380c187326ed5f8c2&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data=await fetch(url)
    // let pardesdData=await data.json()
    // this.setState({
    //   page:this.state.page-1,
    //   articles:pardesdData.articles,
    //   loading:false})
    this.setState({
      page:this.state.page-1
    })
    this.updateNews();
  }
  async componentDidMount(){
    this.updateNews()
    // this.setState({articles:this.articles,totalResults:this.totalResults})
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsMonkey-{this.capitalizefirstletter(this.props.category)} Headlines</h2>
        {this.state.loading&&<Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <News title={element.title?element.title.slice(0,55):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1"} newsUrl={element.url?element.url:""} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handelePrevClick} className="btn btn-dark">&larr;Prev</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" onClick={this.handeleNextClick} className="btn btn-dark">Next&rarr;</button>
        </div>
      </div>
    )
  }
}


// articles=[
//   {
//     "source": {
//       "id": "espn-cric-info",
//       "name": "ESPN Cric Info"
//     },
//     "author": null,
//     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//     "publishedAt": "2020-04-27T11:41:47Z",
//     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//   },
//   {
//     "source": {
//       "id": "espn-cric-info",
//       "name": "ESPN Cric Info"
//     },
//     "author": null,
//     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//     "publishedAt": "2020-03-30T15:26:05Z",
//     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//   },
//   {
//     "source": {
//       "id": "the-wall-street-journal",
//       "name": "The Wall Street Journal"
//     },
//     "author": "Saeed Shah",
//     "title": "Exclusive | The Sports Star and Tabloid Fixture Staring Down Pakistan’s Army",
//     "description": "Imran Khan tells The Wall Street Journal from jail that he’s battling for democracy",
//     "url": "https://www.wsj.com/world/asia/the-sports-star-and-tabloid-fixture-staring-down-pakistans-army-931e9ecb?mod=hp_lead_pos9",
//     "urlToImage": "https://images.wsj.net/im-90811819/social",
//     "publishedAt": "2024-09-23T03:00:00Z",
//     "content": "ISLAMABAD, PakistanIn August, Pakistani officials approached the party of jailed former Prime Minister Imran Khan with an urgent request: Postpone a rally planned for the following day in the capital… [+356 chars]"
//   },
//   {
//     "source": {
//       "id": "financial-post",
//       "name": "Financial Post"
//     },
//     "author": "Barbara Shecter",
//     "title": "After Rogers’ MLSE deal, powerhouse sports IPO could be close to a slam dunk, say analysts",
//     "description": "BCE's exit from MLSE has Bay Street excited by the prospect of an IPO amid record-breaking prices for sports franchises. Keep reading here.",
//     "url": "https://financialpost.com/fp-finance/rogers-mlse-deal-create-leafs-raptors-jays-ipo",
//     "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/09/leafs-matthews-gs0921.png",
//     "publishedAt": "2024-09-20T14:36:05Z",
//     "content": "Would include Toronto Maple Leafs, Toronto Raptors and Toronto Blue Jays\r\n Get the latest from Barbara Shecter straight to your inbox Sign Up\r\nAuston Matthews of the Toronto Maple Leafs shoots agains… [+10178 chars]"
//   },
//   {
//     "source": {
//       "id": "fox-sports",
//       "name": "Fox Sports"
//     },
//     "author": "John Fanta, Michael Cohen",
//     "title": "College basketball roundtable: Michigan State's tourney streak, top transfers and more",
//     "description": "Is Michigan State's NCAA Tournament streak in jeopardy? Who is the top transfer in the nation? FOX Sports' college basketball experts answer that and more.",
//     "url": "http://www.foxsports.com/stories/college-basketball/college-basketball-roundtable-michigan-states-tourney-streak-top-transfers-and-more",
//     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1",
//     "publishedAt": "2024-02-29T20:59:30Z",
//     "content": "It's almost time, ladies and gentlemen!\r\nThat long-awaited, fun-filled day when you wait to hear your team's name called before breaking out a pen and paper to fill out your NCAA Tournament bracket i… [+17577 chars]"
//   },
//   {
//     "source": {
//       "id": "bleacher-report",
//       "name": "Bleacher Report"
//     },
//     "author": null,
//     "title": "New Micah Parsons Show ",
//     "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
//     "url": "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
//     "urlToImage": null,
//     "publishedAt": "2023-11-27T20:37:24.6381564Z",
//     "content": null
//   }
// ]