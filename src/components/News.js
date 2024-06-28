import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Anna Wilde Mathews, Joseph Walker",
      title:
        "Walgreens Plans Major U.S. Store Closures - WSJ - The Wall Street Journal",
      description:
        "Pharmacy chain plans to shutter a significant share of its roughly 8,600 stores, cut its stake in primary-care provider VillageMD",
      url: "https://www.wsj.com/health/walgreens-plans-major-u-s-store-closures-0b04a96e",
      urlToImage: "https://images.wsj.net/im-973986/social",
      publishedAt: "2024-06-27T14:31:00Z",
      content:
        "Walgreens Boots Alliance Chief Executive Tim Wentworth is taking the struggling chain in a new direction, planning to close a substantial number of poorly performing stores and pulling back on the co… [+510 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "John Fritze, Ella Nilsen",
      title:
        "Supreme Court halts Biden’s ‘good neighbor’ plan to curb smog - CNN",
      description:
        "The Supreme Court on Thursday upended a Biden administration effort to reduce smog and air pollution wafting across state lines in the latest decision from the high court that undermined the federal government’s power to protect the environment.",
      url: "https://www.cnn.com/2024/06/27/politics/epa-ohio-smog-supreme-court/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2149841182-20240626131759546.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-06-27T14:21:00Z",
      content:
        "The Supreme Court on Thursday upended a Biden administration effort toreduce smog and air pollutionwafting across state lines in the latest decision from the high court that undermined the federal go… [+2053 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "The Associated Press",
      title:
        "The Supreme Court strips the SEC of a critical enforcement tool in fraud cases - The Associated Press",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiYWh0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL3N1cHJlbWUtY291cnQtcmVndWxhdG9yeS1hZ2VuY2llcy1zZWMtMzZmMTY0NDRiMWQ0ZmM1Mjk4NWZkYjY4ODk2MzYyYmLSAQA?oc=5",
      urlToImage: null,
      publishedAt: "2024-06-27T14:14:00Z",
      content: null,
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "MARK SHERMAN",
      title:
        "The Supreme Court rejects a nationwide opioid settlement with OxyContin maker Purdue Pharma - The Associated Press",
      description:
        "The Supreme Court has rejected a nationwide settlement with OxyContin maker Purdue Pharma that would've shielded Sackler family members who own the company from civil lawsuits over the toll of opioids but also would've provided billions of dollars to combat t…",
      url: "https://apnews.com/article/supreme-court-purdue-pharma-opioid-crisis-bankruptcy-9859e83721f74f726ec16b6e07101c7c",
      urlToImage:
        "https://dims.apnews.com/dims4/default/b93db52/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa3%2Fbc%2Ff4eaa90a168c5b7270f1823015b7%2F35edf4a915ac4cc8a3625af87b9d2dda",
      publishedAt: "2024-06-27T14:11:00Z",
      content:
        "WASHINGTON (AP) The Supreme Court on Thursday rejected a nationwide settlement with OxyContin maker Purdue Pharma that would have shielded members of the Sackler family who own the company from civil… [+5317 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Sara Moniuszko",
      title:
        "Maps show dengue fever risk areas as CDC warns of global case surge - CBS News",
      description:
        "Where exactly are cases of dengue fever being detected? What to know after U.S. health officials warned doctors​ to be alert for the mosquito-borne virus.",
      url: "https://www.cbsnews.com/news/dengue-fever-map-what-to-know-global-case-surge/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2022/11/16/59eed940-8605-4556-8f4e-09f058084d90/thumbnail/1200x630/06482e22158af96316ea56d58887ca3d/gettyimages-139289970.jpg?v=e067ea40ade3f81700421307609d7aeb",
      publishedAt: "2024-06-27T14:00:07Z",
      content:
        "As dengue cases break international records, U.S. health officials warned doctors Tuesday to be alert for the mosquito-borne virus, prompting questions about where exactly the disease has been detect… [+3858 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: "POLITICO",
      title:
        "Why Hakeem Jeffries isn't that upset about Jamaal Bowman's loss - POLITICO",
      description: null,
      url: "https://www.politico.com/news/2024/06/27/hakeem-jeffries-jamaal-bowman-loss-00165292",
      urlToImage: null,
      publishedAt: "2024-06-27T13:57:31Z",
      content: null,
    },
    {
      source: {
        id: "the-hill",
        name: "The Hill",
      },
      author: "Taylor Giorno",
      title:
        "NTSB sanctions Boeing for releasing details of 737 Max investigation - The Hill",
      description:
        "The National Transportation Safety Board (NTSB) sanctioned Boeing on Thursday for disclosing nonpublic details on an investigation into a 737 Max 9 door plug that blew off during an Alaska Airlines flight in January. An unnamed Boeing executive discussed cert…",
      url: "https://thehill.com/business/4742864-ntsb-sanctions-boeing-737-max-door-plug/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2024/01/GettyImages-1910140688-e1704735421514.jpg?w=1280",
      publishedAt: "2024-06-27T13:13:00Z",
      content:
        "Skip to content\r\nThe National Transportation Safety Board (NTSB) sanctioned Boeing on Thursday for disclosing nonpublic details on an investigation into a 737 Max 9 door plug that blew off during an … [+2173 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "Yahoo Finance",
      title:
        "US economy, Micron, Amazon's $2T market cap: 3 Things - Yahoo Finance",
      description: null,
      url: "https://news.google.com/rss/articles/CBMiS2h0dHBzOi8vZmluYW5jZS55YWhvby5jb20vdmlkZW8vdXMtZWNvbm9teS1taWNyb24tYW1hem9ucy0ydC0xMzExNTkxOTguaHRtbNIBAA?oc=5",
      urlToImage: null,
      publishedAt: "2024-06-27T13:11:59Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: null,
      title:
        "I tried out RCS messages between iPhone and Android: Here's how it works - Android Authority",
      description:
        "Read receipts? Message reactions? Full-resolution photos? Is all of it enough to beat the green bubble stigma now that RCS is on iPhone?",
      url: "https://www.androidauthority.com/rcs-iphone-hands-on-3454911/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2024/06/RCS-on-iMessage-reactions.jpg",
      publishedAt: "2024-06-27T13:07:19Z",
      content:
        "After countless ads and several years of Googles pleading, RCS has finally come to Apples Messages app. Right now, its only available as part of the second iOS 18 beta, ahead of a full rollout later … [+5862 chars]",
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "David Rooney",
      title:
        "‘A Quiet Place: Day One’ Review: Lupita Nyong’o Navigates a Waking Nightmare for a Pizza in Nail-Biting Horror Prequel - Hollywood Reporter",
      description:
        "Writer-director Michael Sarnoski follows his head-turning debut, ‘Pig,’ with this third chapter of the hit sci-fi franchise, also starring Joseph Quinn, Alex Wolff and Djimon Hounsou.",
      url: "http://www.hollywoodreporter.com/movies/movie-reviews/a-quiet-place-day-one-review-lupita-nyongo-joseph-quinn-1235933652/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2024/04/AQPD1_06333R_0.jpeg?w=1013",
      publishedAt: "2024-06-27T13:01:06Z",
      content:
        "If you want to breathe new life into a horror movie built around silence as the only means of surviving an alien invasion, there are countless worse ideas than relocating the story from smalltown U.S… [+9216 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Katie Hunt",
      title:
        "Ancient bone could reveal how Neanderthals cared for a child with Down syndrome - CNN",
      description:
        "New research suggests a fossilized ear bone reveals the oldest known case of Down syndrome: a Neanderthal child who lived more than 146,000 years ago.",
      url: "https://www.cnn.com/2024/06/27/science/neanderthal-down-syndrome-scn/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/cova-negra-site-peso-reducido.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-06-27T12:56:00Z",
      content:
        "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nA fossilized ear bone unearthed in a cave in Spain has… [+5870 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Biden v Trump: What are they thinking in Moscow, Beijing and Delhi? - BBC.com",
      description:
        "Eight BBC correspondents give their view on the US election from global capitals.",
      url: "https://www.bbc.com/news/articles/cp008qzzee1o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/4549/live/2c163c00-33d5-11ef-bdc5-41d7421c2adf.jpg",
      publishedAt: "2024-06-27T12:53:09Z",
      content:
        "When Americans choose their next president, the contest is always closely watched around the world.\r\nThere are countless ways US foreign policy - and the actions of the White House - has an impact on… [+12003 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Supreme Court briefly leaks opinion allowing Idaho abortions - BBC.com",
      description:
        'Court says publication on its website was "inadvertent" and that a final ruling has not been made.',
      url: "https://www.bbc.com/news/articles/c6pp2yvnv94o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/7126/live/b7d66660-33ea-11ef-a784-8952677cdf33.jpg",
      publishedAt: "2024-06-27T12:50:49Z",
      content:
        "By Bernd Debusmann Jr, BBC News, Washington \r\nAbortion rights campaigners outside the Supreme Court building\r\nThe US Supreme Court accidentally leaked a major opinion on abortion rights, appearing re… [+4886 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "Sam Quinn",
      title:
        "2024 NBA Draft order: Complete list of second-round picks Thursday - CBS Sports",
      description:
        "The 2024 NBA Draft kicks off Wednesday night with the first round",
      url: "https://www.cbssports.com/nba/news/2024-nba-draft-order-complete-list-of-second-round-picks-thursday/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2024/06/26/2222ca68-fb16-4668-9584-fed3747cfaa8/thumbnail/1200x675/1fa0cab695f38d535460ca23f57ffd15/draft-order-getty.png",
      publishedAt: "2024-06-27T12:45:00Z",
      content:
        "The highly anticipated 2024 NBA Draft is finally here. The first 30 picks of the draft were made Wednesday night before the second round takes place on Thursday afternoon. \r\nThe NBA Draft is becoming… [+2980 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Reuters",
      title: "US weekly jobless claims drift lower - Reuters",
      description: null,
      url: "https://www.reuters.com/markets/us/us-weekly-jobless-claims-drift-lower-2024-06-27/",
      urlToImage: null,
      publishedAt: "2024-06-27T12:41:00Z",
      content: null,
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Andrew Jeong",
      title:
        "Denmark set to impose world’s first carbon tax on gassy cows - The Washington Post",
      description:
        "Denmark’s bill, which has broad consensus support, targets greenhouse gases emitted by the country’s cows, pigs and sheep. New Zealand axed plans for a similar tax.",
      url: "https://www.washingtonpost.com/world/2024/06/27/denmark-carbon-tax-cows/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TYPZHACBNNTEXQSLK45FF6QYGI_size-normalized.JPG&w=1440",
      publishedAt: "2024-06-27T12:06:35Z",
      content:
        "Denmark is set to impose the worlds first emissions tax on livestock beginning in 2030, targeting greenhouse gases emitted by the countrys cows, pigs and sheep.\r\nAccording to the plan, farmers would … [+3823 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "NBC Sports",
      title:
        'Shad Khan: "Organizational failure" late last season still stings - NBC Sports',
      description: null,
      url: "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3Lm5iY3Nwb3J0cy5jb20vbmZsL3Byb2Zvb3RiYWxsdGFsay9ydW1vci1taWxsL25ld3Mvc2hhZC1raGFuLW9yZ2FuaXphdGlvbmFsLWZhaWx1cmUtbGF0ZS1sYXN0LXNlYXNvbi1zdGlsbC1zdGluZ3PSAQA?oc=5",
      urlToImage: null,
      publishedAt: "2024-06-27T11:15:21Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Tara John, Abel Alvarado, Stefano Pozzebon",
      title:
        "Bolivian general arrested and accused of coup after dramatic showdown with president - CNN",
      description:
        "A top Bolivian general has been arrested and accused of mounting a coup against the government, after attempting to storm the presidential palace on Wednesday, before swiftly retreating and being taken into custody on live television.",
      url: "https://www.cnn.com/2024/06/26/americas/bolivia-coup-attempt-claims-intl-latam/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2158802176.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-06-27T10:52:00Z",
      content:
        "A Bolivian general has been arrested and accused of mounting a coup against the government after attempting to storm the presidential palace on Wednesday.\r\nMilitary units led by Gen. Juan Jose Zuniga… [+6030 chars]",
    },
    {
      source: {
        id: null,
        name: "Minnesota Public Radio News",
      },
      author: "Andrew Krueger, MPR News Staff",
      title:
        "Owners of flood-imperiled Rapidan Dam Store vow to reopen; community rallies to support family - MPR News",
      description:
        "Friends and neighbors are rallying to support the longtime owners of the Rapidan Dam Store near Mankato, after flooding claimed a family home adjacent to the business. The owners of the store vow to reopen.",
      url: "https://www.mprnews.org/story/2024/06/27/rapidan-home-lost-family-vows-store-remains-open",
      urlToImage:
        "https://img.apmcdn.org/7e1e37d9b02cc6a192aaa71846d6d4623a7b38d3/widescreen/b3c673-20240627-ap-flooding01-2000.jpg",
      publishedAt: "2024-06-27T10:48:07Z",
      content:
        "Friends and neighbors are rallying to support the longtime owners of the Rapidan Dam Store near Mankato, after flooding along the Blue Earth River claimed a family home adjacent to the business.\r\nThe… [+4592 chars]",
    },
    {
      source: {
        id: "axios",
        name: "Axios",
      },
      author: "Axios",
      title: "COVID is on the rise again - Axios",
      description: null,
      url: "https://www.axios.com/2024/06/27/covid-summer-surge",
      urlToImage: null,
      publishedAt: "2024-06-27T10:02:51Z",
      content: null,
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <h1 className="font-semibold text-2xl text-center p-4">
          NewsMonkey - Top Headlines
        </h1>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-8">
          {this.state.articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title}
                description={element.description}
                newsUrl={element.url}
                imageUrl={element.urlToImage}
              ></NewsItem>
            );
          })}
        </div>
      </>
    );
  }
}

export default News;
