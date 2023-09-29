// import { ROUTE } from 'constants/Route';
// import {
//   reset,
//   setNoticeFilterSearchTitle,
//   setNoticeFilterSearchContent,
//   setNoticeFilterSearchReset,
//   setPageNumber,
//   setQuery,
// } from 'hooks/@redux/filterSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { FieldValues, SubmitHandler } from 'react-hook-form';
// import { useCallback, useState } from 'react';

// const useNoticeFilter = () => {
//   // const [selectedSearchOption, setSelectedSearchOption] = useState('title');
//   const dispatch = useDispatch();
//   const comment = useSelector(
//     (state: any) => state.rootReducer.Noticefilter,
//   );

//   // Define your isActive variable as you have done

//   const onSubmit: SubmitHandler<FieldValues> = useCallback(
//     formData => {
//       const { searchOption, title, content } = formData; // Destructure searchOption from formData

//     },
//     [noticeFilter],
//   );

//   return {
//     comment,
//     onSubmit,
//   };
// };

// export default useNoticeFilter;
