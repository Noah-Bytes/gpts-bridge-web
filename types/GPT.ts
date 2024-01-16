import { Gizmos } from '@/types/Gizmos';
import { Author } from '@/types/Author';
import { GizmoMetrics } from '@/types/GizmoMetrics';
import { Response } from '@/types/Response';

export interface GPTPageResponse extends Response<GPTPage> {}

export interface GPTResponse extends Response<GPT> {}

export interface GPTPage {
  data: GPT[];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: any;
    next: number;
  };
}

export interface GPT {
  gizmos: Gizmos;
  author: Author;
  metrics?: GizmoMetrics;
}
