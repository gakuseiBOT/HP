export type MemberRole = 'Owner' | 'Engineer' | 'Adviser' | 'Moderator' | 'Creator';

export interface MemberData {
  name: string;
  avatar?: string;
  text: string;
  homepage?: string;
  twitter?: string;
  github?: string;
  role: MemberRole;
}