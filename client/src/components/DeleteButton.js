import React, { useState } from 'react'
import { Button, Icon, Confirm } from "semantic-ui-react";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const DeleteButton = ({postId}) => {
  const [confirmOpen, setConfirmOpen ] = useState(false);
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    update(){
      setConfirmOpen(false);
    },
    variables: {
      postId
    }
  })
  return (
    <>
      <Button
        as="div"
        color="red"
        onClick={() => setConfirmOpen(true)}
        floated="right"
      >
        <Icon name="trash" style={{ margin: 0}} />
      </Button>
      <Confirm
        open={confirmOpen}
        onCange={() => setConfirmOpen(false)}
        onConfirm={deletePost}
      />
    </>
  )
}

const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!){
    deletePost(postId: $postId)
  }
`;

export default DeleteButton