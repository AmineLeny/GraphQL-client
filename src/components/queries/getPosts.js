// Posts.js
import React, { useState, useEffect } from 'react';
import { gql } from 'graphql-tag';

export const GET_POSTS = gql`
  query GetPosts($page: Int, $limit: Int, $orderBy: String) {
    posts(page: $page, limit: $limit, orderBy: $orderBy) {
      data {
        id
        text
        image
        likes
        publishDate
        owner {
          id
          title
          firstName
          lastName
          picture
        }
        tags
      }
      total
      page
      limit
    }
  }
`;

