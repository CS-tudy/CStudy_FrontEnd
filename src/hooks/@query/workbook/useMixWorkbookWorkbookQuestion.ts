import { useQueries } from '@tanstack/react-query';
import { getWorkbook, getWorkbookQuestion } from 'api/workbook';

interface MixQueryProps {
  questionId: string;
  page: number;
}

export const useMixWorkbookWorkbookQuestion = ({
  questionId,
  page,
}: MixQueryProps) => {
  const [workbookListResult, workbookQuestionListResult] = useQueries({
    queries: [
      {
        queryKey: ['workbook', { questionId }],
        queryFn: () => getWorkbook(questionId),
      },
      {
        queryKey: ['workbookQuestion', { questionId, page }],
        queryFn: () => getWorkbookQuestion(questionId, page),
        keepPreviousData: true,
      },
    ],
  });

  const workbook = workbookListResult?.data;
  const workbookQuestion = workbookQuestionListResult?.data;

  return { workbook, workbookQuestion };
};
