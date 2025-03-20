// 给env加类型
declare namespace NodeJS {
  interface ProcessEnv {
    B_VID: string;
    COOKIES: string;
    OID: string;
    executablePath: string;
  }
}

// AnyObject
declare type AnyObject = Record<string, any>;

declare type AnyArray = Array<any>;

declare type IComment = {
  content: string;
  author: string;
  sex: string;
  time: number;
  rpid: string;
  childList: Array<IComment>;
  replyCount: number;
  like: number;
};

declare type BilibiliDetail = {
  title: string;
  description: string;
  duration: string;
  owner: string;
  oid: number;
  view: number;
  danmaku: number;
  reply: number;
  favorite: number;
  coin: number;
  share: number;
  like: number;
  cid: number;
};
