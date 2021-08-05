import React, { useContext } from 'react'
import { Button, Image, Card, Icon, Label} from 'semantic-ui-react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes}}) {
  
  const { user } = useContext(AuthContext);

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
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <Button as='div' labelPosition='right' as={Link} to={`/posts/${id}`}>
          <Button color='blue' basic>
            <Icon name='comment' />
          </Button>
          <Label as='a' basic color='blue' pointing='left'>
            {commentCount}
          </Label>
        </Button>
        {user && user.username === username && (
          <Button
            as="div"
            color="red"
            onClick={() => console.log('Delete post')}
            floated="right"
          >
            <Icon name="trash" style={{ margin: 0}} />
          </Button>
        )}
      </Card.Content>
    </Card>
  );
}

export default PostCard;