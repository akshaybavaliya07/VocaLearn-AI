import { z } from "zod";

export const companionSchema = z.object({
  name: z.string().min(1, "Name is required."),
  subject: z.string().min(1, "Subject is required."),
  topic: z.string().min(1, "Topic is required."),
  voice: z.string().min(1, "Voice is required."),
  style: z.string().min(1, "Style is required."),
  duration: z.number().min(1, "duration is required."),
});

export type CompanionFormValues = z.infer<typeof companionSchema>;