import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY= 'AIzaSyDCTmtPY6X1Mzv9sRj3-4w04rsjhtSMVgM';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("javascript");
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
             console.log(videos);
             this.setState({
               videos: videos,
               selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <div className="col-md-8 title" >
                    <h1><strong>YouTube <span className="api">API</span></strong></h1>
                </div>
              <SearchBar onSearchTerm = {videoSearch}/>
                <div className="row">
                    <VideoDetail selectedVideo={this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos}
                    onSelectVideo = {(selectedVideo) => this.setState({selectedVideo})} />
                </div>
            </div>
        );
      }
    }

export default App;
