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
                message: "Hello New friends!",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "single"
              }}>
                <Avatar src={`https://fakeface.rest/face/view?minimum_age=25&maximum_age=30&t=${Math.random()}`} name={"Frank"} />
              </Message>
              <Message model={{
                message: "Hi there!",
                sentTime: "15 mins ago",
                sender: "Me",
                direction: "outgoing",
                position: "single"
              }} />
              <Message model={{
                message: "Hi everyone!",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first"
              }} avatarSpacer />
              <Message model={{
                message: "Nice to meet you all",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal"
              }} avatarSpacer />
              {/* <Message model={{
                message: "",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal"
              }} avatarSpacer /> */}
              <Message model={{
                message: "Thanks for creating this group!",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last"
              }}>
                <Avatar src={`https://fakeface.rest/face/view?minimum_age=25&maximum_age=30&t=${Math.random()}`} name={"Sam"} />
              </Message>
              <Message model={{
                message: "You're welcome!",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "first"
              }} />

              <Message model={{
                message: "Hey!",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first"
              }} avatarSpacer />
              <Message model={{
                message: "When should we meet?",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last"
              }}>
                <Avatar src={`https://fakeface.rest/face/view?minimum_age=25&maximum_age=30&t=${Math.random()}`} name={"Smith"} />
              </Message>

              <MessageSeparator content="Wednesday, 11 May 2022" />

              <Message model={{
                message: "Should we go eat something first?",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "single"
              }}>
                <Avatar src="https://picsum.photos/id/1011/200" name={"Bill"} />
              </Message>
              <Message model={{
                message: "Let's ask everyone",
                sentTime: "15 mins ago",
                sender: "Me",
                direction: "outgoing",
                position: "last"
              }} />
              <Message model={{
                message: "Should we go drink something before we go in?",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "outgoing",
                position: "normal"
              }}>
                
              </Message>
              <Message model={{
                message: "Sorry",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "first"
              }} />
              <Message model={{
                message: "I mean feast",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal"
              }} />
              <Message model={{
                message: "Need",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal"
              }} />
              <Message model={{
                message: "Eat",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal"
              }} />
              <Message model={{
                message: "Sorry for my autocorrect",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal"
              }} />
             
              <Message model={{
                message: "Are you stil using that?",
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
