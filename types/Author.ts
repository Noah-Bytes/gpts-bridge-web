import { Response } from "@/types/Response";

export interface AuthorResponse extends Response<Author> {}

export interface Author {
  user_id: string;
  display_name: string;
  link_to: any;
  selected_display: string;
  is_verified: boolean;
  will_receive_support_emails: boolean;
  create_time: string;
  upt_time: string;
}
