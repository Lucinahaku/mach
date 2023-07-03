import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUser } from './CreateUser/CreateUser.service';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './CreateUser/CreateUser.controller';
import { LoginUserService } from './loginUser/LoginUser.service';
import { LoginUserController} from './loginUser/loginUser.controller';
import { EncryptionService } from './encryption/encryption.service';
import { UpdateuserService } from './updateuser/updateuser.service';
import { UpdateuserController } from './updateuser/updateuser.controller';
import { SexuserService } from './sexuser/sexuser.service';
import { SexuserController } from './sexuser/sexuser.controller';
import { join } from 'path';
import { SeeuserResolver } from './seeuser/seeuser.resolver';

import { JwtModule } from '@nestjs/jwt/dist';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { LikeuserModule } from './likeuser/likeuser.module';
import { MatchingchatController } from './matchingchat/matchingchat.controller';
import { MatchingchatResolver } from './matchingchat/matchingchat.resolver';
import { MatchingchatService } from './matchingchat/matchingchat.service';
import { AssessmentController } from './assessment/assessment.controller';
import { AssessmentService } from './assessment/assessment.service';

import { MailboxController } from './malibox/mailbox.controller';
import { MailboxService } from './mailbox/mailbox.service'

@Module({
  imports: [
    JwtModule.register({
      global:true,
      secret:'jfjebhcjfoet38586dhgtoi5ydnjh4g3d4u6igjf',
      signOptions:{expiresIn: '1h'}
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground:true,
      installSubscriptionHandlers: true,
    }),
    LikeuserModule,

  ],
  controllers: [AppController,UserController,LoginUserController,UpdateuserController, SexuserController, MatchingchatController, AssessmentController, MailboxController],
  providers: [MailboxService ,AppService,CreateUser,PrismaService,LoginUserService,EncryptionService, UpdateuserService, SexuserService, SeeuserResolver, MatchingchatResolver, MatchingchatService, AssessmentService],
})
export class AppModule {}
