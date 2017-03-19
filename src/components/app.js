import React, { Component } from 'react';
import BookList from '../containers/book-list';

//App es un "Presentantional Component" porque se encarga únicamente del marcado, no trabaja con redux
//lee datos e invoca callbacks mediante props.

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
