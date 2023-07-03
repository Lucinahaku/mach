import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Mailbox } from '@prisma/client';
import { CreateMailboxInput } from './create-mailbox.input';

@Injectable()
export class MailboxService {
  constructor(private prisma: PrismaService) {}

  async createMailbox(data: CreateMailboxInput): Promise<Mailbox> {
    const { userId, isOfficial, content } = data;
    return this.prisma.mailbox.create({
      data: {
        userId,
        isOfficial,
        content,
      },
    });
  }

  async getMailboxes(): Promise<Mailbox[]> {
    return this.prisma.mailbox.findMany();
  }
}
