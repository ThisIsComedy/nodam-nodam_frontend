const getCurrentDate = (): string => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고, 두 자릿수로 패딩
  const day = String(currentDate.getDate()).padStart(2, '0'); // 두 자릿수로 패딩

  return`${year}-${month}-${day}`;
}

export default getCurrentDate;