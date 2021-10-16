import React, { Component } from 'react';
import {pictures} from '../data/Pictures';
import {Picture} from './Picture';


export default class Gallery extends Component {
    state = {
        pictures: pictures
    }
    render() {
        return(
            <div className="grid-container">
                <div className="picture-grid">
                <div className="input-container">
                    <input type="file"/>
                </div>
                    <h1 className="title">Gallery</h1>
                    {this.state.pictures !== undefined ? this.state.pictures.map(pictures => <Picture pic={pictures.picture} title={pictures.title}/>) : null}
                </div>
            </div>
        )
    }
}