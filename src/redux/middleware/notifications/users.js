const users = (action) => {
  const { error, status } = action.payload;
  const type = `${action.type}/${status}`;

  switch (type) {
    case 'users/fetchUsers/success':
      return { message: 'Page Load Successfully', type: 'success' };
    case 'users/fetchUsers/failed':
      return { message: error, type: 'error' };

    case 'users/createUser/success':
      return { message: 'User Created Successfully', type: 'success' };
    case 'users/createUser/failed':
      return { message: error, type: 'error' };

    case 'users/updateUser/success':
      return { message: 'User Changed Successfully', type: 'success' };
    case 'users/updateUser/failed':
      return { message: error, type: 'error' };

    case 'users/deleteUser/success':
      return { message: 'User Deleted Successfully', type: 'success' };
    case 'users/deleteUser/failed':
      return { message: error, type: 'error' };

    case 'users/resetPassword/success':
      return { message: 'Reset Password Successfully', type: 'success' };
    case 'users/resetPassword/failed':
      return { message: error, type: 'error' };

    default:
      return null;
  }
};

export default users;
