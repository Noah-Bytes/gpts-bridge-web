'use client';

import { Card, Image, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import Paragraph from 'antd/lib/typography/Paragraph';
import { MdVerified } from 'react-icons/md';
import numeral from 'numeral';
import { GPT } from '@/types/GPT';
import styles from './index.module.sass';
import SpaceVertical from '@/components/SpaceVertical';
import Link from 'next/link';

interface IProps {
  gpt: GPT;
}

export default function RecommendCard({ gpt }: IProps) {
  return (
    <Link href={`/detail/${gpt.gizmos.id}`}>
      <Card
        style={{
          padding: 16,
          borderRadius: 20,
          background: '#eff2ef',
          border: 'none',
        }}
        className={styles.card}
        bodyStyle={{
          padding: 0,
        }}
        cover={
          <div className={styles.img}>
            <Image
              preview={false}
              src={gpt.gizmos.image || 'https://placehold.co/400x400'}
              key={gpt.gizmos.id}
              alt={gpt.gizmos.name}
            />
          </div>
        }
      >
        <Meta
          title={
            <Title className={styles.title} ellipsis={{ rows: 1 }} level={5}>
              {gpt.gizmos.name}
            </Title>
          }
          description={
            <SpaceVertical size="small">
              <Space>
                {gpt.author.is_verified && (
                  <MdVerified className={styles.icon} />
                )}
                <span>
                  <Text ellipsis style={{ width: 100 }}>
                    by {gpt.author.display_name}
                  </Text>
                </span>
                {gpt.metrics?.num_conversations_str && (
                  <Text type="secondary">
                    ({numeral(gpt.metrics?.num_conversations_str).format('0a')})
                  </Text>
                )}
              </Space>

              <Paragraph
                ellipsis={{
                  rows: 2,
                }}
                className={styles.desc}
              >
                {gpt.gizmos.description}
              </Paragraph>
            </SpaceVertical>
          }
        />
      </Card>
    </Link>
  );
}
