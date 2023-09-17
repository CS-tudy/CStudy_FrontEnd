export interface PaginationProps {
  totalPages: number;
  handlePage: (page: number) => void;
  page: number;
  white?: boolean;
}
