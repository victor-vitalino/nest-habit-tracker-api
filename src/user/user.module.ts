import { Module } from "@nestjs/common";
import { CreateAccountController } from "./controllers/create-account.controller";
import { PrismaService } from "src/database/database.service";
import { DatabaseModule } from "src/database/database.module";

@Module({
  controllers: [CreateAccountController],
  imports: [DatabaseModule],
})
export class UserModule {}
