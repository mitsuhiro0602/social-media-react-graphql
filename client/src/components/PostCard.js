import React from 'react'
import { Button, Image, Card, Icon, Label} from 'semantic-ui-react';
import moment from 'moment';
import {Link} from 'react-router-dom';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes}}) {
  function likePost(){
    console.log('Like Post!')
  }

  function commentOnPost(){
    console.log('comments on Post')
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image 
          floated='right' 
          size='size' 
          src='https://react.semantic-ui.com/images/avvatar/large/molly.png' 
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`post/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={likePost}>
          <Button color='teal' basic>
            <Icon name='heart' />
          </Button>
          <Label as='a' basic color='teal' pointing='left'>
            {likeCount}
          </Label>
        </Button>
        <Button as='div' labelPosition='right' onClick={commentOnPost}>
          <Button color='blue' basic>
            <Icon name='comment' />
          </Button>
          <Label as='a' basic color='blue' pointing='left'>
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;