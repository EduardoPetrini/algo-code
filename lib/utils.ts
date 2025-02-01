export const randomString = (length: number) => {
  return Math.random().toString(36).substring(2, length + 2);
};

export const randomNumber = (length: number) => {
  return Math.floor(Math.random() * 10 ** length);
};
