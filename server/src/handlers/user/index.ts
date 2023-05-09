// Local Imports
import { Handler } from '../handler';
import { BanUserHandler } from './ban-user-handler';
import { CheckUserHandler } from './check-user-handler';
import { DeleteUserHandler } from './delete-user-handler';
import { DemotesUserHandler } from './demote-user-handler';
import { GetUserHandler } from './get-user-handler';
import { LoginHandler } from './login-handler';
import { LogoutHandler } from './logout-handler';
import { PromoteUserHandler } from './promote-user-handler';
import { RegisterHandler } from './register-handler';
import { UnbanUserHandler } from './unban-user-handler';

export default {
  'check': CheckUserHandler,
  'get': GetUserHandler,
  'login': LoginHandler,
  'logout': LogoutHandler,
  'register': RegisterHandler,
  'delete': DeleteUserHandler,
  'ban': BanUserHandler,
  'unban': UnbanUserHandler,
  'promote': PromoteUserHandler,
  'demote': DemotesUserHandler,
} as Record<string, typeof Handler>;
