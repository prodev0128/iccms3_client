import { mock } from '../utils/axios';
import { decode, JWT_EXPIRES_IN, JWT_SECRET, sign } from '../utils/jwt';
import randomId from '../utils/randomId';
import wait from '../utils/wait';

const users = [
  {
    avatar: '/static/images/avatars/3.jpg',
    email: 'demo@example.com',
    id: '1',
    jobTitle: 'Lead Developer',
    location: 'San Francisco, USA',
    name: 'Randy Smith',
    password: 'TokyoPass1@',
    posts: '27',
    role: 'admin',
    username: 'admin',
  },
];

mock.onPost('/api/account/login').reply(async (config) => {
  await wait(1000);

  try {
    const { email, password } = JSON.parse(config.data);

    const user = users.find((_user) => _user.email === email);

    if (!user || user.password !== password) {
      return [400, { message: 'Verify that your email and password are correct' }];
    }

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [
      200,
      {
        accessToken,
        user: {
          avatar: user.avatar,
          email: user.email,
          id: user.id,
          jobTitle: user.jobTitle,
          location: user.location,
          name: user.name,
          posts: user.posts,
          role: user.role,
          username: user.username,
        },
      },
    ];
  } catch (err) {
    console.error('Error: ', err);
    return [500, { message: 'Encountered a server error' }];
  }
});

mock.onPost('/api/account/register').reply(async (config) => {
  await wait(1000);

  try {
    const { email, name, password } = JSON.parse(config.data);

    let user = users.find((_user) => _user.email === email);

    if (user) {
      return [400, { message: 'This user already exists' }];
    }

    user = {
      avatar: null,
      email,
      id: randomId(),
      jobTitle: 'Lead Developer',
      location: null,
      name,
      password,
      posts: '56',
      role: 'admin',
      username: null,
    };

    users.push(user);

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [
      200,
      {
        accessToken,
        user: {
          avatar: user.avatar,
          email: user.email,
          id: user.id,
          jobTitle: user.jobTitle,
          location: user.location,
          name: user.name,
          posts: user.posts,
          role: user.role,
          username: user.username,
        },
      },
    ];
  } catch (err) {
    console.error('Error: ', err);
    return [500, { message: 'Encountered a server error' }];
  }
});

mock.onGet('/api/account/personal').reply((config) => {
  try {
    const { Authorization } = config.headers;

    if (!Authorization) {
      return [401, { message: 'Auth token is missing' }];
    }

    const accessToken = Authorization.split(' ')[1];
    const { userId } = decode(accessToken);
    const user = users.find((_user) => _user.id === userId);

    if (!user) {
      return [401, { message: 'Invalid auth token' }];
    }

    return [
      200,
      {
        user: {
          avatar: user.avatar,
          email: user.email,
          id: user.id,
          jobTitle: user.jobTitle,
          location: user.location,
          name: user.name,
          posts: user.posts,
          role: user.role,
          username: user.username,
        },
      },
    ];
  } catch (err) {
    console.error('Error: ', err);
    return [500, { message: 'Encountered a server error' }];
  }
});
