import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid'
import {pictures} from '../data/Pictures';
import {Picture} from './Picture';


export default class Gallery extends Component {
    state = {
        pictures: pictures,
        imageUpload: ''
    }
    picRef = React.createRef();

    handlePhotoUpload = () => {
        
        const img = {
            title: '',
            picture: URL.createObjectURL(this.picRef.current.files[0]),
            id: uuidv4()
        }

        this.setState({pictures: [...pictures, img]})
    }
    render() {
        return(
            <div className="grid-container">
                <div className="picture-grid">
                <div className="input-container">
                    <input ref={this.picRef} type="file" onChange={this.handlePhotoUpload}/>
                </div>
                    <h1 className="title">Gallery</h1>
                    {this.state.pictures !== undefined ? this.state.pictures.map(pictures => <Picture key={pictures.id} pic={pictures.picture} title={pictures.title} text={pictures.text}/>) : null}
                </div>
            </div>
        )
    }
}