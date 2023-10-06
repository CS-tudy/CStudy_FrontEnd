import ContentContainer from 'components/commons/ContentContainer';
import { FieldValues, useForm } from 'react-hook-form';
import * as S from './style';
import useGetNoticeList from 'hooks/@query/board/useGetNoticeList';
import useNoticeFilter from 'hooks/Notice/useNoticeFilter';
import Pagination from 'components/commons/Pagination';
import NoticeList from 'components/unit/Board';
import { RequestNoticeList } from 'types/api';
import NoData from 'components/commons/NoData';
import ContentBodyWrapper from 'components/commons/ContentBodyWrapper';
import { useState } from 'react';
import { Button } from 'components/commons/Button/Style';
import AdminNoticeListCard from './adminNoticeListCard';
import NoticeAdminOptionGroup from './noticeAdminOption';

interface AdminNoticeListProps {
  adminnoticeList: RequestNoticeList;
}

const AdminNoticeList = ({ adminnoticeList }: AdminNoticeListProps) => {
  return (
    <>
      {adminnoticeList?.content?.map(({ id, title, content, createdDate }) => (
        <>
          <AdminNoticeListCard
            key={id}
            id={id}
            title={title}
            content={content}
            createdDate={createdDate}
          />
        </>
      ))}
      ;
    </>
  );
};

export default AdminNoticeList;
