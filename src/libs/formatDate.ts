interface FormatDateOptions {
  second?: boolean;
  endOfDay?: boolean;
}

const formatDate = (
  date: Date,
  options: FormatDateOptions = { second: false, endOfDay: false },
) => {
  // 일, 월, 년 추출
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  // 시, 분 추출
  let HH = String(date.getHours()).padStart(2, '0');
  let mm = String(date.getMinutes()).padStart(2, '0');
  let ss = String(date.getSeconds()).padStart(2, '0');

  if (options.endOfDay) {
    HH = '23';
    mm = '59';
    ss = '59';
  }

  return `${yyyy}-${MM}-${dd} ${HH}:${mm}${options.second ? `:${ss}` : ''}`;
};

export default formatDate;
