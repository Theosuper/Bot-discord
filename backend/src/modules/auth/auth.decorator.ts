import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserFromRequest = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user;
  },
);
