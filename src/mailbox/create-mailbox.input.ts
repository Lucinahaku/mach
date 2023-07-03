import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateMailboxInput {
  @Field(() => Int)
  userId: number;

  @Field()
  isOfficial: boolean;

  @Field()
  content: string;
}
