// import { useState, useMemo } from 'react';
// import { Form, useNavigate, useParams } from 'react-router-dom';
// import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

// import { ProblemContent } from 'types/api';

// import Button from 'components/@shared/Button';
// import ContentContainer from 'components/@shared/ContentContainer';
// import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
// import FormBody from 'components/@shared/Admin/FormBody';
// import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
// import Table from 'components/ProblemSet/Table';
// import { useAddWorkbookQuestion } from 'hooks/@query/workbook/useAddWorkbookQuestion';
// import { useMixProblemWorkbookQuestion } from 'hooks/@query/@GETmixed/useMixProblemWorkbookQuestion';
// import AdminWorkbookTableLists from 'components/Admin/AdminWorkbookTableLists';

// const WorkbookProblemAdd = () => {
//   const { questionId } = useParams();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const { problem, workbookQuestion } = useMixProblemWorkbookQuestion({
//     questionId,
//   } as { questionId: string });
//   const filterQuestion = problem?.content?.filter(
//     ({ questionId: problemQuestionId }: { questionId: number }) => {
//       return !workbookQuestion?.content?.some(
//         ({ questionId: workbookQuestionId }: { questionId: number }) =>
//           problemQuestionId === workbookQuestionId,
//       );
//     },
//   );

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FieldValues>({
//     defaultValues: {
//       questionIds: [],
//     },
//   });

//   const handleIsLoading = (isLoading: boolean) => {
//     setIsLoading(isLoading);
//   };

//   const AddWorkbookQuestion = useAddWorkbookQuestion({ handleIsLoading });

//   const onSubmit: SubmitHandler<FieldValues> = data => {
//     const isArray = Array.isArray(data.questionIds);
//     const customQuestionIds = isArray
//       ? data.questionIds?.map((questionId: (string | number)[]) => ({
//           id: +questionId,
//         }))
//       : (data.questionIds = [{ id: +data.questionIds }]);

//     const formData = {
//       workbookId: parseInt(questionId as string),
//       questionIds: customQuestionIds,
//     };

//     AddWorkbookQuestion(formData);
//     reset();
//   };

//   const tableColRate = useMemo(() => ['15%', '65%', '20%'], []);
//   const tableTitle = useMemo(() => ['선택', '문제목록', '카테고리'], []);

//   return (
//     <ContentContainer>
//       <ContentHeaderWrapper title="문제집 문제추가" />
//       <ContentBodyWrapper>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <FormBody>
//             <Table white colRate={tableColRate} title={tableTitle}>
//               <AdminWorkbookTableLists
//                 filterQuestion={filterQuestion as ProblemContent[]}
//                 register={register}
//                 errors={errors}
//               />
//             </Table>
//             <Button
//               type="submit"
//               className="mt navy xl style"
//               disabled={isLoading}
//             >
//               문제등록하기
//             </Button>
//             <Button
//               type="button"
//               className="gray style ml xl"
//               onClick={() => navigate(-1)}
//               disabled={isLoading}
//             >
//               돌아가기
//             </Button>
//           </FormBody>
//         </Form>
//       </ContentBodyWrapper>
//     </ContentContainer>
//   );
// };

// export default WorkbookProblemAdd;
export {};
