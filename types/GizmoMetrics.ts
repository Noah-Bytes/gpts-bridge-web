import { Response } from "@/types/Response";

export interface GizmoMetricsResponse extends Response<GizmoMetrics> {}

export interface GizmoMetrics {
  id: number;
  user_id: string;
  gizmo_id: string;
  num_conversations_str?: string;
  pv: number;
  date: string;
}
