import React from 'react'
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed,  TwitterTweetEmbed } from 'react-twitter-embed';


function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
        <div className="widgets__widgetContainer">
          <h2>Search Twitter</h2>
          <TwitterTweetEmbed tweetId={'956334418653835265'}/>
          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TheWhaleReports"
          options={{ height: 400 }}
        />
        
        </div>
    </div>
  );
}

export default Widgets;     