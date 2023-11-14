import * as S from './style';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useDeleteAlarm } from 'hooks/@query/alarm/useDeleteAlarm';
import { useGetAlarms } from 'hooks/@query/alarm/useGetAlarms';
import { useDispatch } from 'react-redux';
import { setAlarms } from 'hooks/@redux/alarmSlice';

const AlarmList = () => {
  const alarms = useGetAlarms();

  const dispatch = useDispatch();
  dispatch(setAlarms(alarms));
  const { mutate: deleteAlarm } = useDeleteAlarm();

  const onClickDeleteAlarm = (e: React.MouseEvent) => {
    deleteAlarm(e.currentTarget.id);
  };

  return alarms?.content?.length !== 0 ? (
    <S.AlarmList>
      {/* {alarms?.content?.filter((alarm)=> (alarm.alarmType === 'CREATE_COMPETITION'))} */}
      {alarms?.content?.map((alarm: any) => (
        <S.AlarmItem key={alarm.id}>
          <S.Content>
            {alarm.alarmType === 'JOIN_COMPETITION'
              ? `${alarm.alarmArgs.fromMemberId}번 회원이 ${alarm.alarmArgs.alarmData}${alarm.text}`
              : alarm.alarmType === 'NEW_REQUEST_USER'
              ? `${alarm.alarmArgs.fromMemberId}${alarm.text}`
              : `${alarm.text} (${alarm.alarmArgs.alarmData})`}
          </S.Content>
          <S.ItemBottom>
            <S.Created>{alarm.createdDate}</S.Created>
            <S.DeleteButton id={alarm.id} onClick={onClickDeleteAlarm}>
              <RiDeleteBin2Line size={15} />
            </S.DeleteButton>
          </S.ItemBottom>
        </S.AlarmItem>
      ))}
    </S.AlarmList>
  ) : (
    <S.NoAlarm>새로운 알림이 없습니다.</S.NoAlarm>
  );
};

export default AlarmList;
