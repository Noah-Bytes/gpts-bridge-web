'use client';
import { Avatar, Button, Col, Row, Space, Tag } from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import Link from 'next/link';
import styles from './index.module.sass';
import { MdVerified } from 'react-icons/md';
import numeral from 'numeral';
import SpaceVertical from '@/components/SpaceVertical';
import { GPT } from '@/types/GPT';

interface IProps {
  gpt: GPT;
}

export default function GPTHeader({ gpt }: IProps) {
  const { gizmos, author, metrics } = gpt;
  return (
    <SpaceVertical className={styles.section}>
      <div className={styles.main}>
        <Row gutter={16} align="middle">
          <Col>
            <Avatar src={gizmos.image} shape="square" size={60} />
          </Col>
          <Col>
            <Title style={{ margin: 0 }} level={2}>
              {gizmos.name}
            </Title>
          </Col>
        </Row>
        <Space>
          {author.link_to && (
            <Link href={author.link_to} target="_blank">
              <Button type="primary">View website</Button>
            </Link>
          )}
          <Link href={`https://chat.openai.com/g/${gizmos.id}`} target="_blank">
            <Button type="primary">Try Now</Button>
          </Link>
        </Space>
      </div>
      <div>
        <Space>
          {author.is_verified && <MdVerified className={styles.icon} />}
          <Text>{author.display_name}</Text>
          <Text type="secondary">
            {numeral(metrics?.num_conversations_str).format('0a')} conversations
          </Text>
        </Space>
      </div>
      <div>
        {(gizmos?.categories || '').split('|').map((elem) => (
          <Tag key={elem}>{elem}</Tag>
        ))}
        {gizmos.tags.split('|').map((elem) => (
          <Tag key={elem}>{elem}</Tag>
        ))}
      </div>
    </SpaceVertical>
  );
}
