"use client";

import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { sendEmail as sendEmailAction } from "@/actions/contact";
import {
  Button,
  Paper,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const formSchema = z.object({
    name: z.string().min(1, { message: t("validation.name") }),
    email: z
      .string()
      .min(1, { message: t("validation.email") })
      .email({ message: t("validation.emailInvalid") }),
    message: z.string().min(1, { message: t("validation.message") }),
  });

  type FormValues = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const {
    mutate: sendEmail,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: sendEmailAction,
  });

  const onSubmit = (data: FormValues) => {
    sendEmail(data);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      shadow="sm"
      p="md"
      withBorder
      maw={380}
      mx="auto"
    >
      <Stack gap="md">
        <Title order={3}>{t("title")}</Title>

        <TextInput
          {...register("name")}
          placeholder={t("name")}
          error={errors.name?.message}
          variant="filled"
        />

        <TextInput
          {...register("email")}
          type="email"
          placeholder={t("email")}
          error={errors.email?.message}
          variant="filled"
        />

        <Textarea
          {...register("message")}
          placeholder={t("message")}
          error={errors.message?.message}
          minRows={6}
          variant="filled"
          autosize
        />

        <Button
          type="submit"
          loading={isPending}
          disabled={isSuccess}
          variant="filled"
          fullWidth
        >
          {isSuccess ? t("sent") : isPending ? t("sending") : t("send")}
        </Button>

        {isError && <Text c={"red"}>{t("unhandledError")}</Text>}
      </Stack>
    </Paper>
  );
}
