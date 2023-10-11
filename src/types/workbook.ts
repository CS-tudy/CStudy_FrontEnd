export interface WorkbookFilterStoreType {
  pageNumber: number;
  title: string;
  description: string;
  setPageNumber: (pageNumber: number) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  reset: () => void;
}
