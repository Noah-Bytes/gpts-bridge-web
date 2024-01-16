'use client';
import { Gizmos } from '@/types/Gizmos';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import { Divider, Typography } from 'antd';

interface IProps {
  info: Gizmos;
}

export default function GPTOverview({ info }: IProps) {
  return (
    <Typography>
      <Paragraph>{info.welcome_message}</Paragraph>
      <Divider />
      <Title level={3}>Description</Title>
      <Paragraph>{info.description}</Paragraph>
      <Divider />
      <Title level={3}>Prompt</Title>
      <Paragraph>
        <ul>
          {info.prompt_starters.split('|').map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </Paragraph>
    </Typography>
  );
}
