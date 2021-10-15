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
                    <h1 className="title">Gallery</h1>
                    {this.state.pictures !== undefined ? this.state.pictures.map(pictures => <Picture pic={pictures.picture}/>) : null}
                </div>
            </div>
        )
    }
}