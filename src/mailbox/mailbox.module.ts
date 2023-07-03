import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailboxResolver } from './mailbox.resolver';

@Module({
  providers: [PrismaService, MailboxResolver],
})
export class MailboxModule {}
