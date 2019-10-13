export default (today: string) => {
  if (today === 'Friday') {
    return 'TGIF';
  }
  return 'Nope';
};
