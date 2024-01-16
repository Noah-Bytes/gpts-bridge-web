import axios from 'axios';
import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import { GPTPageResponse } from '@/types/GPT';
import RecommendCard from '@/components/RecommendCard';
import styles from './page.module.sass';
import Pagination from '@/client/Pagination';

interface IProps {
  searchParams: {
    pageNo?: number;
    pageSize?: number;
  };
}

export default async function Page({
  searchParams: { pageNo = 1, pageSize = 20 },
}: IProps) {
  const { data: resp }: { data: GPTPageResponse } = await axios.post(
    `${process.env.API_HOST}/gpts/list`,
    {
      pageNo,
      pageSize,
      date: '2024-01-15',
    },
  );

  return (
    <div className={styles.page}>
      <div>
        <Title level={2}>工作流程与规划</Title>
      </div>
      <br />
      <Row gutter={[16, 16]}>
        {resp.data.data.map((elem) => (
          <Col span={6} key={elem.gizmos.id}>
            <RecommendCard gpt={elem} />
          </Col>
        ))}
      </Row>
      <br />
      <div className={styles.pagination}>
        <Pagination
          total={resp.data.meta.total}
          current={resp.data.meta.currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}
