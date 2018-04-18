import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyClK8dMJ1haT15sTTsrytI_qabqQMZAxm4';

class App extends Component {

    constructor(props){
        super(props);
        this.state = { 
            videos : [],
            selectedVideo : null
        };

        this.videoSearch("Blockchain EY Tesseract");
    };

    videoSearch(keywords) {
        YTSearch({ key: API_KEY, term: keywords }, (videos) => {
            this.setState({ videos : videos, selectedVideo: videos[0] });
        });
    };

    render(){

        const videoSearch = _.debounce((keywords) => this.videoSearch(keywords), 300);
        return (
            <div>
                <SearchBar onSearchTermChange = { videoSearch }/>
                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={ this.state.videos }/>
            </div>
        );
    };
}

ReactDom.render(<App />, document.querySelector('.container'));