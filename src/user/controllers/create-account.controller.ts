import { Body, ConflictException, Controller, Post } from "@nestjs/common";
import { hash } from "bcrypt";
import { PrismaService } from "src/database/database.service";
import {
  CreateAccountBody,
  createAccountSchema,
} from "../validators/create-account.validator";
import { ZodPipe } from "src/pipes/zod-schema.decorator";

@Controller("/accounts")
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @ZodPipe(createAccountSchema)
  async handle(@Body() body: CreateAccountBody) {
    const { name, email, password } = body;

    const userWithSameEmail = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new ConflictException("Email already in use!");
    }

    const hashedPassword = await hash(password, 8);
    return await this.prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
  }
}
