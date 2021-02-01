import React, { Component } from 'react'
import Images from '../components/Images/Images';
import { createApi } from "unsplash-js";
import Buttons from '../components/Buttons/Buttons';

const unsplash = createApi({
    accessKey: "gbKV8W57vMKJPDdqv3ZrdsUVd5NAY42ZrsHx9Nri3ns",
});

class Home extends Component {
    state = { requestresult: [] }
    searchPhotos = e => {
        unsplash.search.getPhotos({ query: e.target.innerText }).then(res => {
            if(res.type === "success"){
                this.setState({ requestresult: res.response.results })
            }
        });
    }

    render() {
        return (
            <div className="mt-4">
                <Buttons searchPhotos={this.searchPhotos} />
                <Images imageList={this.state.requestresult}/>
            </div>
        )
    }
}

export default Home;