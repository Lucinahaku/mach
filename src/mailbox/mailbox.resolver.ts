import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Mailbox } from '@prisma/client';
import { CreateMailboxInput } from './create-mailbox.input';

@Resolver()
export class MailboxResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async mailboxes(): Promise<Mailbox[]> {
    return this.prisma.mailbox.findMany();
  }

  @Mutation()
  async createMailbox(
    @Args('data') data: CreateMailboxInput,
  ): Promise<Mailbox> {
    return this.prisma.mailbox.create({
      data: {
        userId: data.userId,
        isOfficial: data.isOfficial,
        content: data.content,
      },
    });
  }
}
