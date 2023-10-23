export interface myPageState {
  data?: {
    id: number;
    name: string;
    email: string;
  };
}

export interface myPageStatusState {
  content: [
    {
      id: number;
      flag: false;
      title: string;
      description: string;
      memberId: number;
      memberName: string;
      createAt: string;
    },
  ];
  pageable: {
    sort: {
      unsorted: false;
      sorted: true;
      empty: false;
    };
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: true;
    unpaged: false;
  };
  last: true;
  totalPages: number;
  totalElements: number;
  number: number;
  first: true;
  sort: {
    unsorted: false;
    sorted: true;
    empty: false;
  };
  numberOfElements: number;
  size: number;
  empty: false;
}

export interface myPageDownloadState {
  image?: any;
}
