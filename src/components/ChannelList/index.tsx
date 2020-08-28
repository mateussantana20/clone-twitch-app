import React from 'react';
import { Text } from 'react-native';

import { List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  UserName,
  Info,
  RightSide,
  WhiteCircle
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem= () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar/>
        <Column>
          <UserName>rockseat_oficial</UserName>
          <Info>36 news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle/>
      </RightSide>

    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
