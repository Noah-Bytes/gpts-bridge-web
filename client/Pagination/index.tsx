'use client';
import { Pagination as AntPagination } from 'antd';
import { useRouter } from 'next/navigation';

interface IProps {
  total: number;
  pageSize: number;
  current: number;
}
export default function Pagination({ total, current, pageSize }: IProps) {
  const router = useRouter();
  return (
    <AntPagination
      total={total}
      current={current}
      pageSize={pageSize}
      showSizeChanger
      showQuickJumper
      onChange={(pageNo, pageSize) => {
        router.push(`/category?pageNo=${pageNo}&pageSize=${pageSize}`);
      }}
    />
  );
}
