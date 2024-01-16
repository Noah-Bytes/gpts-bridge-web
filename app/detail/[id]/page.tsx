import axios from 'axios';
import GPTOverview from '@/components/GPTOverview';
import styles from './page.module.sass';
import { GPTResponse } from '@/types/GPT';
import dayjs from 'dayjs';
import { YYYYMMDD } from '@/config/Date';
import GPTHeaderV2 from '@/components/GPTHeaderV2';

interface IProps {
  params: { id: string };
}

export default async function Page({ params }: IProps) {
  const { data: gptResp }: { data: GPTResponse } = await axios.post(
    `${process.env.API_HOST}/gpts/first`,
    {
      id: params.id,
      date: dayjs().subtract(2, 'days').format(YYYYMMDD),
    },
  );

  return (
    <div>
      <GPTHeaderV2 gpt={gptResp.data} />
      <GPTOverview info={gptResp.data.gizmos} />
    </div>
  );
}
