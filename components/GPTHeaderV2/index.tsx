'use client';
import { GoLink } from 'react-icons/go';
import { Image, Button, Col, Row, Space, Tag } from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import Link from 'antd/lib/typography/Link';
import styles from './index.module.sass';
import { MdVerified } from 'react-icons/md';
import { BsChatText } from 'react-icons/bs';
import numeral from 'numeral';
import SpaceVertical from '@/components/SpaceVertical';
import { GPT } from '@/types/GPT';

interface IProps {
  gpt: GPT;
}

export default function GPTHeaderV2({ gpt }: IProps) {
  const { gizmos, author, metrics } = gpt;
  return (
    <Row gutter={40} className={styles.section}>
      <Col span={10}>
        <div className={styles.img}>
          <Image preview={false} src={gizmos.image} alt={gizmos.name} />
        </div>
      </Col>
      <Col span={14} className={styles.main}>
        <SpaceVertical>
          <Title className={styles.title} level={3}>
            {gizmos.name}
          </Title>
          <Space>
            <BsChatText
              style={{ color: '#8006a8', position: 'relative', top: '1px' }}
            />
            <b>{numeral(metrics?.num_conversations_str).format('0a')} </b>
          </Space>
          <Space>
            {author.is_verified && (
              <MdVerified
                style={{ color: '#0b57d0', position: 'relative', top: '1px' }}
              />
            )}
            <Text>{author.display_name}</Text>
          </Space>
          {author.link_to && (
            <Link href={author.link_to} target="_blank">
              <Space>
                <GoLink size={12} />
                <span>{author.link_to}</span>
              </Space>
            </Link>
          )}
          <div>
            {(gizmos?.categories || '').split('|').map((elem) => (
              <Tag key={elem}>{elem}</Tag>
            ))}
            {gizmos.tags.split('|').map((elem) => (
              <Tag key={elem}>{elem}</Tag>
            ))}
          </div>
        </SpaceVertical>
        <Button block size="large" type="primary">
          Try Now
        </Button>
      </Col>
    </Row>
  );
}
