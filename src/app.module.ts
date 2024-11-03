import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
