import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Grid, Image, Transition } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
import {FETCH_POSTS_QUERY} from '../util/graphql';

const Home = () => {
  const {
    loading,
    data
  } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (<h1>Loading posts...</h1>) 
        : (data.getPosts &&
            data.getPosts.map((post) => (
              <Grid.Column key={post.id} style= {{ marginBottom: 20}}>
                <PostCard post={post} />
              </Grid.Column>
            ))
          )
        }
      </Grid.Row>
    </Grid>
  );
}


export default Home
