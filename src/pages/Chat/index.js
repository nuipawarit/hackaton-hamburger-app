import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  ConversationHeader,
  Message,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  Avatar,
  MessageInput,
  TypingIndicator,
  MessageSeparator
} from "@chatscope/chat-ui-kit-react";

const Chat = () => {


  return (
    <Box mt={5}>
      <div style={{ position: "relative", width: "375px", height: "750px" }}>
        <MainContainer>
          <ChatContainer>
            <ConversationHeader>
              <Avatar src="https://1.bp.blogspot.com/-2eb7soOwmhY/YEzpVWBouII/AAAAAAAAIuQ/nNIaS13QJRosyhUSFN56qQVP99_cndF9ACNcBGAsYHQ/s2048/renesance_%25E0%25B9%2592%25E0%25B9%2591%25E0%25B9%2590%25E0%25B9%2593%25E0%25B9%2591%25E0%25B9%2593_0.jpg" name="Emily" />

              <ConversationHeader.Content userName="Renaissance Bangkok" info="Active 10 mins ago" />
              <ConversationHeader.Actions>

                <InfoButton />
              </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList>

              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "single"
              }}>
                <Avatar src="https://fakeface.rest/face/view" name={"Frank"} />
              </Message>
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Me",
                direction: "outgoing",
                position: "single"
              }} />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first"
              }} avatarSpacer />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal"
              }} avatarSpacer />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal"
              }} avatarSpacer />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last"
              }}>
                <Avatar src="https://fakeface.rest/face/view" name={"Sam"} />
              </Message>
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "first"
              }} />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal"
              }} />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal"
              }} />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "last"
              }} />

              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first"
              }} avatarSpacer />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last"
              }}>
                <Avatar src="https://fakeface.rest/face/view" name={"Smith"} />
              </Message>

              <MessageSeparator content="Wednesday, 11 May 2022" />

              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "single"
              }}>
                <Avatar src="https://picsum.photos/id/1011/200" name={"Bill"} />
              </Message>
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Me",
                direction: "outgoing",
                position: "single"
              }} />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first"
              }} avatarSpacer />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal"
              }} avatarSpacer />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal"
              }} avatarSpacer />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last"
              }}>
                <Avatar src="https://fakeface.rest/face/view" name={"James"} />
              </Message>
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "first"
              }} />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal"
              }} />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal"
              }} />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "last"
              }} />

              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first"
              }} avatarSpacer />
              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last"
              }}>
                <Avatar src="https://picsum.photos/id/1011/200" name={"Bill"} />
              </Message>

            </MessageList>
            <MessageInput placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
      </div>

    </Box>
  );
};
export default Chat;
