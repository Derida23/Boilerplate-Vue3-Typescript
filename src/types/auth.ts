export interface IAuth {
  user: IUser | null;
  loading: boolean;
  error: boolean;
  error_notification: unknown | Array<string>;
}

export interface IAuthRes<T> {
  user: T;
}

export interface ILogin {
  access_token: string;
  token_type: string;
}


export interface IUser {
  id: string;
  name: string;
  level: number;
  age: null;
  birthday: null;
  gender: null;
  zodiac: null;
  hometown: null;
  bio: null;
  latlong: string;
  education: Education;
  career: Career;
  user_pictures: any[];
  user_picture: null;
  cover_picture: CoverPicture;
}

export interface Career {
  company_name: null;
  starting_from: null;
  ending_in: null;
}

export interface CoverPicture {
  url: null;
}

export interface Education {
  school_name: null;
  graduation_time: null;
}
