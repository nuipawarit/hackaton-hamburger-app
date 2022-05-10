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
              {/* <Avatar src={emilyIco} name="Emily" /> */}

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
                {/* <Avatar src={emilyIco} name={"Emily"} /> */}
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
                {/* <Avatar src={emilyIco} name={"Emily"} /> */}
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
                {/* <Avatar src={emilyIco} name={"Emily"} /> */}
              </Message>

              <MessageSeparator content="Saturday, 31 November 2019" />

              <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "single"
              }}>
                {/* <Avatar src={emilyIco} name={"Emily"} /> */}
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
                {/* <Avatar src={emilyIco} name={"Emily"} /> */}
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
                {/* <Avatar src={emilyIco} name={"Emily"} /> */}
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
