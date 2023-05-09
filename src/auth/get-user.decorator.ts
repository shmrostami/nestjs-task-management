// import { User } from './user.entity';
// import { createParamDecorator } from '@nestjs/common';

// export const GetUser = createParamDecorator((data, req) => {
//   return req.user;
// });

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
