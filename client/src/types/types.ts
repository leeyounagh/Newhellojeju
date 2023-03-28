export default interface ModalType {
  title: string;
  latitude: number;
  longitude: number;
  contentsid: string;
  tag: string;
  introduction: string;
  roadaddress: string;
  thumbnailpath: string;
  imgpath: string;
}

export interface PostType {
  Communutydesc: string;
  Communutytitle: string;
  comment: [
    {
      comment: string;
      date: number;
      writer: string;
    }
  ];
  images: string[];
  writer: {
    name: string;
    _id: string;
  };
  _v: number;
  _id: string;
}
