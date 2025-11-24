"use client";

import { submitWaitListAction } from "@/actions/submit-waitlist";
import Form from "@/components/form";
import FormField from "@/components/form-field";
import PageComponent from "@/components/layouts/root-layout";
import InputComponent from "@/components/ui/input";
import { addToast, Button, Checkbox } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  submitWaitlistSchema,
  SubmitWaitListValues,
} from "@repo/packages/schemas/submit-watlist.zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function NewWaitlist() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitWaitListValues>({
    resolver: zodResolver(submitWaitlistSchema),
    defaultValues: {
      sendEmail: true,
    },
  });

  const { isPending, error, mutate } = useMutation({
    mutationFn: submitWaitListAction,
    onSuccess: () => {
      addToast({
        title: "WaitList created",
        description: "Your waitlist has been created successfully",
        color: "success",
      });
    },
  });

  const onSubmit = (data: SubmitWaitListValues) => {
    mutate(data);
  };

  return (
    <PageComponent className="pt-12">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
        error={error}
      >
        <FormField
          title="Waitlist Name"
          description="This shows up to Signups in the no-code widget, when they sign up, and in any emails."
          error={errors.name}
          isRequired
        >
          <InputComponent
            placeholder="My waitlist name"
            maxLength={30}
            {...register("name")}
          />
        </FormField>

        <hr />

        <FormField
          title="Waitlist URL"
          description="If you're using a Waitlist no-code widget or the API, then write the exact URL where you will host your Waitlist. Leave it blank if you're going to use a hosted page from Waitlist."
          error={errors.url}
        >
          <InputComponent
            placeholder="example.com/waitlist"
            type="url"
            {...register("url")}
          />
        </FormField>

        <FormField
          title="Send email to new signups"
          description="New Signups on your Waitlist will receive an email containing their referral link and Waitlist status."
          error={errors.sendEmail}
        >
          <Checkbox size="sm" {...register("sendEmail")} defaultChecked={true}>
            Activate email sending
          </Checkbox>
        </FormField>

        <FormField
          title="Add security to your WaitList"
          description="We prevent fake emails from being sent to your WaitList. "
          isPremiumFeature
          error={errors.addSecurity}
        >
          <Checkbox size="sm" isDisabled>
            Add extra security
          </Checkbox>
        </FormField>

        <Button
          color="primary"
          className="w-fit h-[38px]"
          isDisabled={isPending}
          isLoading={isPending}
          type="submit"
        >
          Create WaitList
        </Button>
      </Form>
    </PageComponent>
  );
}
