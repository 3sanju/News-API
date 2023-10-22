import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=[{
    "status": "ok",
    "totalResults": 70,
    "source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "Shubhangi Mathur",
    "title": "BPCL Q1 Results: Net profit comes in at Rs 10,644 crore; revenue dips 7% - Moneycontrol",
    "description": "Revenue from operations declined by 7.3 percent to Rs 1.28 lakh crore in the quarter, as against Rs 1.38 lakh crore in the year-ago period.",
    "url": "https://www.moneycontrol.com/news/business/earnings/bpcl-q1-results-net-profit-comes-in-at-rs-10644-crore-revenue-dips-7-11032571.html",
    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/12/BPCL-770x433.jpg",
    "publishedAt": "2023-07-26T09:28:24Z",
    "content": "Bharat Petroleum Corporation Limited (BPCL) on July 26 reported consolidated net profit of Rs 10,644 crore in the first quarter of the financial year 2023-24 amid higher marketing margins.\r\nThe state… [+1533 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Vidya Sreedhar",
    "title": "Bajaj Finance Q1 Results: PAT jumps 32% YoY to Rs 3,437 crore, beats estimates; NII rises 26% - Economic Times",
    "description": "Total revenue from operations grows nearly 35% on year to Rs 12,498 crore. The number of new loans booked during the quarter grew by a sharp 34% on year to 9.94 million, and were the highest ever in a quarter.",
    "url": "https://economictimes.indiatimes.com/markets/stocks/earnings/bajaj-finance-q1-results-pat-jumps-32-yoy-to-rs-3437-crore-beats-estimates/articleshow/102134681.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-102134581,width-1070,height-580,imgsize-9600,overlay-etmarkets/photo.jpg",
    "publishedAt": "2023-07-26T09:04:00Z",
    "content": "MUMBAI - Bajaj Finance Ltd on Wednesday reported a 32.4% year-on-year (YoY) rise in consolidated net profit for the quarter ended June to Rs 3,437 crore, beating an ET Now poll of Rs 3,301 crore. Tot… [+1091 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "Sunil Shankar Matkar",
    "title": "Netweb Technologies IPO: Is an impressive debut on the cards for June 27? - Moneycontrol",
    "description": "Netweb Technologies is well-positioned to benefit from the growth of the high-end computing market in India.",
    "url": "https://www.moneycontrol.com/news/business/ipo/netweb-technologies-ipo-is-an-impressive-debut-on-the-cards-for-june-27-11033551.html",
    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2020/01/Sensex_BSE_NSE_Stock-market_bull_bear_Gold-5-770x433.png",
    "publishedAt": "2023-07-26T08:57:44Z",
    "content": "Netweb Technologies, a provider of high-end computing solutions, is anticipated to deliver impressive results on its listing day, July 27. This can be attributed to strong subscription numbers during… [+3834 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Livemint"
    },
    "author": "Saurav Mukherjee",
    "title": "Reliance Strategic Investments' name changed to Jio Financial Services | Mint - Mint",
    "description": "The changed name is effective from 25 July, 2023.",
    "url": "https://www.livemint.com/companies/news/reliance-strategic-investments-name-changed-to-jio-financial-services-11690361346051.html",
    "urlToImage": "https://www.livemint.com/lm-img/img/2023/07/26/600x338/Mukesh_Ambani_1690361461014_1690361461133.jpg",
    "publishedAt": "2023-07-26T08:51:48Z",
    "content": "Reliance Industries Limited on 26 July said that the name of the Reliance Strategic Investments Limited has been changed to Jio Financial Services Limited. \"The name of the Company stands changed fro… [+1605 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "News18"
    },
    "author": "Business Desk",
    "title": "ITC shares snap three-day losing run, rebound 2% as street sees positives in hotel business demerger - News18",
    "description": "ITC shares declined nearly 6% in the three sessions after the company announced a proposal to demerge the hospitality business into a separate company named ITC Hotels Ltd.",
    "url": "https://www.news18.com/business/itc-shares-snap-three-day-losing-run-rebound-2-as-street-sees-positives-in-hotel-business-demerger-8428993.html",
    "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-2023-07-26t135712.869-169036021816x9.jpg",
    "publishedAt": "2023-07-26T08:32:00Z",
    "content": "Snapping its three-day losing run, cigarettes-to-hotels conglomerate ITC shares rebounded by more than 2% in Wednesdays trade.\r\nITC shares declined nearly 6% in the three sessions after the company a… [+1502 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "PTI",
    "title": "Punjab National Bank Q1 Results: Net profit jumps four-fold to Rs 1,255 crore - Economic Times",
    "description": "Total income in the first quarter of the current fiscal rose to Rs 28,579 crore as against Rs 21,294 crore, PNB said in a regulatory filing.The lender's interest income also increased to Rs 25,145 crore from Rs 18,757 crore in the same quarter a year ago.",
    "url": "https://economictimes.indiatimes.com/markets/stocks/earnings/punjab-national-bank-q1-results-net-profit-jumps-four-fold-to-rs-1255-crore/articleshow/102133441.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-102133501,width-1070,height-580,imgsize-2718181,overlay-etmarkets/photo.jpg",
    "publishedAt": "2023-07-26T08:28:00Z",
    "content": "New Delhi: State-owned Punjab National Bank (PNB) on Wednesday posted a four-fold surge in standalone net profit at Rs 1,255 crore in the April-June quarter, mainly due to decline in bad loans and im… [+1209 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "DNA India"
    },
    "author": "DNA Web Team",
    "title": "Mukesh Ambani, Isha Ambani's Rs 8,60,000 crore firm to get Rs 8200 crore offer from this country in return - DNA India",
    "description": "Mukesh Ambani news: The fund is willing to buy the stake for 1 billion dollars (Rs 8200 crore).",
    "url": "https://www.dnaindia.com/business/report-mukesh-ambani-isha-ambani-s-rs-860000-crore-firm-to-get-rs-8200-crore-offer-from-this-country-in-return-of-3053412",
    "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/07/26/2600903-untitled-design-2023-07-22t080433.742.png",
    "publishedAt": "2023-07-26T07:40:00Z",
    "content": "Mukesh Ambani news: The fund is willing to buy the stake for 1 billion dollars (Rs 8200 crore). Qatar Investment Authority, the country’s sovereign wealth fund, wants to buy minority in stake in Muke… [+1172 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Financial Express"
    },
    "author": "The Financial Express",
    "title": "Share Market LIVE: Nifty jumps above 19800, Sensex soars 450 pts; Bank Nifty above 45940, RIL, ITC jump - The Financial Express",
    "description": null,
    "url": "https://www.financialexpress.com/market/share-market-today-live-updates-sensex-nifty-rupee-vs-dollar-gift-nifty-bank-nifty-asia-us-markets-tata-motors-bajaj-finance-stocks-wednesday-26-july/3187024/",
    "urlToImage": null,
    "publishedAt": "2023-07-26T07:21:06Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Mangalorean.com"
    },
    "author": "Press Release",
    "title": "MRPL Becomes the largest PSU-Refinery (single location) in India - Mangalorean.com",
    "description": "MRPL Becomes the largest PSU-Refinery (single location) in India Mangaluru: The Mangalore Refinery and Petrochemicals Ltd (MRPL), a mini Ratna CPSE PSU refinery based in Coastal Karnataka and a subsidiary of ONGC, has become the single largest PSU-Refinery (s…",
    "url": "https://www.mangalorean.com/mrpl-becomes-the-largest-psu-refinery-single-location-in-india/",
    "urlToImage": "https://www.mangalorean.com/wp-content/uploads/2023/07/MRPL-Becomes-the-largest-PSU-Refinery-single-location-in-India-3-jpg.webp",
    "publishedAt": "2023-07-26T07:16:49Z",
    "content": "MRPL Becomes the largest PSU-Refinery (single location) in India\r\nMangaluru: The Mangalore Refinery and Petrochemicals Ltd (MRPL), a mini Ratna CPSE PSU refinery based in Coastal Karnataka and a subs… [+2330 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "Moneycontrol News",
    "title": "GIFT Nifty records all-time high single day turnover of $12 billion - Moneycontrol",
    "description": "Traded contract volume and turnover value recorded a significant growth of over 838 percent and 924 percent, respectively, compared to the first day full-scale operations volume of 33,570 contracts with a turnover of $1.21 billion",
    "url": "https://www.moneycontrol.com/news/business/markets/gift-nifty-records-all-time-high-single-day-turnover-of-12-billion-11032691.html",
    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/03/stocks_sensex_nifty_stockmarket1-1-770x433.jpg",
    "publishedAt": "2023-07-26T07:06:08Z",
    "content": "GIFT Nifty derivatives on the NSE International Exchange (NSE IX) witnessed a record single day trading activity on July 25 of more than 3,14,900 contracts with a turnover of $12.39 billion, the bour… [+1524 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Nikhil Agarwal",
    "title": "Suzlon Energy shares drop 10% in 2 days. Is the multibagger run over? - The Economic Times",
    "description": "Suzlon's Q1 profit declined 64% on a sequential basis to Rs 101 crore, while its revenue from operations dropped 20% QoQ to Rs 1,378 crore. Traders have been busy booking profits in the stock following weak results.",
    "url": "https://economictimes.indiatimes.com/markets/stocks/news/suzlon-energy-shares-drop-10-in-2-days-is-the-multibagger-run-over/articleshow/102130336.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-102130393,width-1070,height-580,imgsize-6138,overlay-etmarkets/photo.jpg",
    "publishedAt": "2023-07-26T07:04:05Z",
    "content": "After more than doubling investor wealth in less than 3 months, shares of Suzlon Energy dropped 10% in just two trading sessions after the renewable energy solutions provider reported a 96% drop in i… [+2457 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "News18"
    },
    "author": "Mohammad Haris",
    "title": "US Fed Expected To Hike Interest Rates For 11th Time; Highest Level Since 2009 Financial Crisis - News18",
    "description": "The 11th interest rate hike by US Fed, anticipated by investors with nearly a 100 per cent probability, would raise the benchmark overnight interest rate to the 5.25 per cent-5.50 per cent range",
    "url": "https://www.news18.com/business/us-fed-expected-to-hike-interest-rates-for-11th-time-highest-level-since-2009-financial-crisis-8427511.html",
    "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/04/us-dollar-168260283616x9.jpg",
    "publishedAt": "2023-07-26T06:45:15Z",
    "content": "The Federal Reserve is expected to raise interest rates by a quarter of a percentage point on Wednesday, marking the 11th hike in the US central banks past 12 policy meetings and possibly a last move… [+3816 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "Nisha Poddar",
    "title": "Mahindra Group buys around 4% in RBL Bank; eyes more stake: Sources - Moneycontrol",
    "description": "Mahindra Group is keen on increasing its stake in RBL Bank to 15-25% if it gets the approvals to be a strategic shareholder of RBL Bank.",
    "url": "https://www.moneycontrol.com/news/business/companies/mahindra-group-eyes-rbl-bank-to-enter-banking-sources-11032431.html",
    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/04/Mahindra-770x433.png",
    "publishedAt": "2023-07-26T06:29:09Z",
    "content": "A Mahindra Group entity likely picked approximately 4% stake in RBL Bank through open market trades, according to two independent sources with direct knowledge of the developments.\r\nWhen approached f… [+1658 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Livemint"
    },
    "author": "Ankit Gohel",
    "title": "Shree Cement Q1 Results: Net profit jumps 84% to ₹581 crore; revenue growth at 19% YoY | Mint - Mint",
    "description": "Shree Cement Q1 revenue from operations registered a growth of 18.9% to  ₹4,999.1 crore as against  ₹4,202.69 crore, YoY.",
    "url": "https://www.livemint.com/companies/company-results/shree-cement-q1-results-net-profit-jumps-84-to-rs-581-crore-revenue-growth-at-19-yoy-11690351806253.html",
    "urlToImage": "https://www.livemint.com/lm-img/img/2023/07/26/600x338/cement1--621x414_1690352034743.jpg",
    "publishedAt": "2023-07-26T06:16:01Z",
    "content": "Shree Cement Q1 Results: Shree Cement reported a sharp 84.2% on-year rise growth in its net profit for the quarter ended June 2023. The cement manufacturer posted a net profit of 581.1 crore in Q1FY2… [+1481 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Entrackr"
    },
    "author": "Entrackr",
    "title": "Myntra to lay off around 50 employees as part of restructuring - Entrackr",
    "description": null,
    "url": "https://entrackr.com/2023/07/myntra-to-lay-off-around-50-employees-as-part-of-restructuring/",
    "urlToImage": null,
    "publishedAt": "2023-07-26T06:08:14Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "CarToq.com"
    },
    "author": "Shantonil Nag",
    "title": "Toyota to launch rebadged Fronx and Ertiga soon - CarToq.com",
    "description": "Toyota has an exciting lineup of three new vehicles set to join its offerings in India by the end of this year. Among these additions, two are three-row MPVs positioned at opposite ends of the price range, while the third is a compact SUV, slotted below the U…",
    "url": "https://www.cartoq.com/toyota-to-launch-rebadged-fronx-and-ertiga-soon/",
    "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/07/toyota-rumion-1.jpg",
    "publishedAt": "2023-07-26T06:05:48Z",
    "content": "Toyota has an exciting lineup of three new vehicles set to join its offerings in India by the end of this year. Among these additions, two are three-row MPVs positioned at opposite ends of the price … [+2903 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Shivendra Kumar",
    "title": "L&T shares jump 4% to 52-week high post Q1, buyback announcement. How to trade now? - The Economic Times",
    "description": "L&T reported a 46.5% year-on-year (YoY) growth in consolidated net profit for the quarter ended June 2023 to Rs 2,493 crore. Consolidated revenue increased a sharp 34% to Rs 47,882.37 crore. The net profit and sales were way higher than the ET Now poll of Rs …",
    "url": "https://economictimes.indiatimes.com/markets/stocks/news/lt-shares-jump-4-to-52-week-high-post-q1-buyback-announcement-how-to-trade-now/articleshow/102127471.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-102127729,width-1070,height-580,imgsize-42330,overlay-etmarkets/photo.jpg",
    "publishedAt": "2023-07-26T05:55:00Z",
    "content": "Larsen &amp; Toubro (L&amp;T) shares shot up over 4% to hit their 52-week high of Rs 2,670 on the NSE on Wednesday following June quarter earnings and the announcement of share buyback. L&amp;T was t… [+2442 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "ETMarkets.com",
    "title": "These bank stocks can give up to 30% returns - Economic Times",
    "description": "The list also contains a count of analysts evaluating each banking stock for the next 12 months. For the purpose of this report, we have filtered out stocks wherein the count of analysts is up to 40 and upside potential is up to 30%.",
    "url": "https://economictimes.indiatimes.com/markets/stocks/news/these-bank-stocks-can-give-up-to-30-returns/articleshow/102127335.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-102127297,width-1070,height-580/photo.jpg",
    "publishedAt": "2023-07-26T05:46:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": null,
    "title": "Byju's Founder Broke Down In Tears As Crises Engulfed Ed-Tech Startup - NDTV",
    "description": "In late April, Indian officials in plainclothes raided the Bengaluru offices of Byju's, seizing laptops and publicly linking the world's most valuable education-technology startup with possible foreign exchange violations.",
    "url": "https://www.ndtv.com/india-news/byju-founder-broke-down-in-tears-as-crises-engulfed-the-ed-tech-startup-4240392",
    "urlToImage": "https://c.ndtvimg.com/2023-07/mt1it5a_byju-raveendran-bloomberg_625x300_26_July_23.jpg",
    "publishedAt": "2023-07-26T05:36:00Z",
    "content": "In late April, Indian officials in plainclothes raided the Bengaluru offices of Byju's, seizing laptops and publicly linking the world's most valuable education-technology startup with possible forei… [+10801 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT News Desk",
    "title": "Gold and silver prices on July 26: Check latest rates in your city today - Hindustan Times",
    "description": "The gold prices in Indian cities depend on various factors like demand, state taxes, octroi charges, interest levied, bullion associations etc.",
    "url": "https://www.hindustantimes.com/business/gold-and-silver-prices-on-july-26-check-latest-rates-in-your-city-today-101690347733440.html",
    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/07/26/1600x900/gold5_1690349015350.jpg",
    "publishedAt": "2023-07-26T05:25:59Z",
    "content": "Gold prices increased by 15 on Wednesday, July 26. According to Goodreturns, the website which tracks the prices of gold, the precious metal was being sold at 5,515 for 22 carats of gold while 24 car… [+1936 chars]"
    }
    ]
  constructor(){
    super();
    this.state={
    articles:this.articles,
    loading:false,
    }
  }
  
  /*async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2cc5afaed0bc445489f787cf7a328b50";
    let data = await fetch(url); 
    let parsedData= await data.json();
    console.log(parsedData);
  this.setState({articles:parsedData.articles})*/
  render() {
    return (
      <div>
        <div className='container my-3'>
          <h2>News Bites-Topheadlines🗓</h2>
          <div  className='row'>
          {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
             </div>
            })}
          </div>
        </div>
        </div>
    )
  }
}

export default News
