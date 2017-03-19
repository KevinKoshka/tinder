import React, { Component } from 'react';
import { connect } from 'react-redux';

//Se dice que BookList es un "Container Component" en lugar de un "Presentational Component" por que
//trabaja con los estados de redux, despacha acciones de Redux. 

class BookList extends Component {
    renderList() {
        return (
            this.props.books.map((book) => {
                return (
                    <li key={book.title} className="list-group-item">{book.title}</li>
                );
            })
        );
    }
    render() {
        return (
            <ul className="list-group col-sm-4" >
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    //Lo que retorne esta función se va a pasar como props en BookList gracias a "connect".
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);