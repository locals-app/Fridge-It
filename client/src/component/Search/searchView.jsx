import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Message } from 'semantic-ui-react';

import * as searchActions from '../../actions/searchActions.js';
import SearchListEntry from './searchListEntry.jsx';

class SearchView extends Component {
  constructor(props){
    super(props);
  };

  render() {
    let { actions, ingredients, recipeList } = this.props;

    if(recipeList.length > 0) {
      return (
        <div className="card">
          <h3 itemsPerRow={3}>
            {recipeList.map(recipe => (
              <SearchListEntry key={recipe.id} recipe={recipe} />
            ))}
          </h3>
        </div>
      )
    }

    return (
      <div style={{textAlign: 'center'}}>
        <Message>
          <Message.Header content={'No Recipes to Show'} />
          <p>Try Adding in Some Ingredients in Your Fridge on the Home Page!</p>
        </Message>
      </div>
    )
  }
};

const searchState = (store) => {
  return {
    ingredients: store.items.items,
    recipeList: store.search.recipes
  }
};

const searchDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(searchActions, dispatch),
  }
};

export default connect(searchState, searchDispatch)(SearchView);