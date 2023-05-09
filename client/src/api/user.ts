// Local Imports
import request from './request';

// Types
import {
  RequestConfirmation,
  User,
} from '../types';

/**
 * Retrieves a user.
 *
 * @param {string} username Username of the user.
 * @returns {Promise<User | RequestConfirmation>} Promise of the action.
 */
const getUser = async (username: string): Promise<User | RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('username', username);

    const response = await request.get(`/user/get?${params.toString()}`);

    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Checks for a user session.
 *
 * @returns {Promise<User | RequestConfirmation>} Promise of the action.
 */
const checkUser = async (): Promise<User | RequestConfirmation> => {
  try {
    const response = await request.get('/user/check');

    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Logs a user in.
 *
 * @param {string} username User's username.
 * @param {string} password User's password.
 * @returns {Promise<User | RequestConfirmation>} Promise of the action.
 */
const login = async (
  username: string,
  password: string,
): Promise<User | RequestConfirmation> => {
  try {
    const response = await request.put('/user/login', {
      username,
      password,
    });

    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Logs out a user.
 *
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const logout = async (): Promise<RequestConfirmation> => {
  try {
    const response = await request.delete('/user/logout');

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Registers a new user.
 *
 * @param {string} username User's username.
 * @param {string} password User's password.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const register = async (
  username: string,
  password: string,
): Promise<RequestConfirmation> => {
  try {
    const response = await request.post('/user/register', {
      username,
      password,
    });

    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Deletes a user.
 *
 * @param {string} username User's username.
 * @returns {Promise<RequestConfirmation>} Promise of the action.
 */
const deleteUser = async (username: string): Promise<RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('username', username);

    const response = await request.delete(`/user/delete?${params.toString()}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Bans a user.
 *
 * @param {string} username User's username.
 * @returns {Promise<User | RequestConfirmation>} Promise of the action.
 */
const banUser = async (username: string): Promise<User | RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('username', username);

    const response = await request.put(`/user/ban?${params.toString()}`);

    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Removes ban from a user.
 *
 * @param {string} username User's username.
 * @returns {Promise<User | RequestConfirmation>} Promise of the action.
 */
const unbanUser = async (username: string): Promise<User | RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('username', username);

    const response = await request.put(`/user/unban?${params.toString()}`);

    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Promotes a user to an admin.
 *
 * @param {string} username User's username.
 * @returns {Promise<User | RequestConfirmation>} Promise of the action.
 */
const promoteUser = async (username: string): Promise<User | RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('username', username);

    const response = await request.put(`/user/promote?${params.toString()}`);

    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

/**
 * Revokes admin privilages.
 *
 * @param {string} username User's username.
 * @returns {Promise<User | RequestConfirmation>} Promise of the action.
 */
const demoteUser = async (username: string): Promise<User | RequestConfirmation> => {
  try {
    const params = new URLSearchParams();
    params.append('username', username);

    const response = await request.put(`/user/demote?${params.toString()}`);

    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    return {
      success: false,
    };
  }
  return {
    success: false,
  };
};

export default {
  getUser,
  checkUser,
  login,
  logout,
  register,
  deleteUser,
  banUser,
  unbanUser,
  promoteUser,
  demoteUser,
};
