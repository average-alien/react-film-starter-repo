import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default class FilmRow extends Component {
    handleDetailsClick = film => {
        console.log('fetching for details for', film)
    }
    render() {
        return (
            <div
                className='film-row'
                onClick={() => this.handleDetailsClick(this.props.film)}
            >
                <Poster
                    posterPath={this.props.film.poster_path}
                    title={this.props.film.title}
                />

                <div className='film-summary'>
                    <Fave />
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.split('-', 1)}</p>
                </div>
            </div>
        )
    }
}