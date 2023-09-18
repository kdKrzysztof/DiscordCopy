const hasSpecialCharacters = (input: string) => {
  const specialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/;
  return specialCharacters.test(input);
};

export default hasSpecialCharacters;
