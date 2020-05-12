import { Data } from '@angular/router';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

export interface Main {
  user: string;
  id: number;
  role: string;
  timeStamp?: any;
}