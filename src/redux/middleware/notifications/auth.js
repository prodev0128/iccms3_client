const auth = (action) => {
  const { data, error, status } = action.payload;
  const type = `${action.type}/${status}`;

  switch (type) {
    case 'auth/login/success':
      return { message: 'Login Successfully', type: 'success' };
    case 'auth/login/failed':
      return { message: error, type: 'error' };
    case 'auth/fetchProfile/success':
      return { message: `${data.name}, Congratulations!!!`, type: 'success' };
    default:
      return null;
  }
};

export default auth;
