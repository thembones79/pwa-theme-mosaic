import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

import { postPropType } from '../../views/PostsCarousel/reducer';
import PostCard from '../PostCard/index';
import './style.css';

const SinglePost = props => (
  <Grid>
    <GridColumn>
      <GridRow>
        <PostCard post={props.postsList[0]} key={Math.random()} />
      </GridRow>
    </GridColumn>
  </Grid>
);

SinglePost.propTypes = {
  postsList: PropTypes.arrayOf(postPropType).isRequired,
};
export default SinglePost;
