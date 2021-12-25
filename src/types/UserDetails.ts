export interface Skill {
  id: string;
  code: number;
  name: string;
  proficiency: string;
}

export interface UserDetails {
  username: string;
  realName: string;
  skills: Skill[];
  pictureUrl: string;
}
