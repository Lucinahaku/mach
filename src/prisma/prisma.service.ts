import { Injectable } from '@nestjs/common';
import { PrismaClient, EqualUser, Sex, Matching, Talk, Assessment } from '@prisma/client';

@Injectable()
export class PrismaService {
  public readonly prisma: PrismaClient;
  mailbox: any;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(user: EqualUser): Promise<EqualUser> {
    return this.prisma.equalUser.create({ data: user });
  }
  // async createKey(key:Key):Promise<Key>{

  // }
  async updateUser(User_ID: number, data: Partial<EqualUser>): Promise<EqualUser> {
    return this.prisma.equalUser.update({
      where: { User_ID },
      data,
    });
  }
  async sexCreateUser(sex: Sex): Promise<Sex> {
    return this.prisma.sex.create({data : sex });
  }
  async likeuserupdate(matchingid:number,matching: Matching): Promise<Matching> {
    return this.prisma.matching.update({
      where: { Matching_ID:matchingid },
      data : matching 
    });
    
  }
  async likeusercreate(matching:Matching): Promise<Matching>{
    
    return this.prisma.matching.create({data : matching});
  }
  async createtalk(talk:Talk): Promise<Talk>{
    
     return this.prisma.talk.create({data : talk});
   }
   async assessmentcreate(assessment:Assessment){
    return this.prisma.assessment.create({data:assessment})
   }


}
