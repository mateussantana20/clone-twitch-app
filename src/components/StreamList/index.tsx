import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg'

import { 
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamDescription,
  StreamCategory,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagText,
  TagView

 } from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail}/>

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar/>
            <StreamUsername numberOfLines={1}>john_doe</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com Next.js
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>

          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText>Web Development</TagText>
          </TagView>

        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
      <List>
        <StreamItem/>
        <StreamItem/>
        <StreamItem/>
      </List>
  );
};

export default StreamList;
