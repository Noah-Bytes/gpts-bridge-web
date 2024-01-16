import { Response } from "@/types/Response";

export interface GizmosResponse extends Response<Gizmos> {}

export interface Gizmos {
  id: string;
  user_id: string;
  name: string;
  image: string;
  description: string;
  welcome_message: string;
  prompt_starters: string;
  short_url: string;
  categories: string;
  updated_at: string;
  tags: string;
  tools: any;
}
