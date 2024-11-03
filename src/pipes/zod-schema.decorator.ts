import { applyDecorators, UsePipes } from "@nestjs/common";
import { ZodValidationPipe } from "./zod-validation.pipes";
import { ZodSchema } from "zod";

export function ZodPipe(schema: ZodSchema) {
  return applyDecorators(UsePipes(new ZodValidationPipe(schema)));
}
