"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name is too short" })
    .max(255, { message: "Name is too long" }),
  systemPrompt: z.string().min(20, { message: "System Prompt is too short" }),
  firstMessage: z.string(),
});

const NewAssistant = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      systemPrompt: "",
      firstMessage: "",
    },
  });
  const router = useRouter()

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof schema>) => {
    console.log(values);
    await axios.post("/api/assistant", values);
    form.reset()
    router.refresh()
    toast.success("Assistant Created Successfully");
  };

  return (
    <div className="flex flex-col space-y-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col py-6 px-10 ring-1 ring-neutral-200 shadow-md space-y-3 rounded-3xl"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs sm:text-sm font-bold text-muted-foreground">
                  Assitant Name
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    className="bg-neutral-100 border-0 text-sm focus-visible:ring-1
                    focus-visible:ring-neutral-200
                         text-neutral-800 focus-visible:ring-offset-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-muted-foreground">
                  First Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    className="bg-neutral-100 border-0 text-sm focus-visible:ring-1
                    focus-visible:ring-neutral-200
                         text-neutral-800 focus-visible:ring-offset-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="systemPrompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs sm:text-sm font-bold text-muted-foreground">
                  System Prompt
                </FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    className="bg-neutral-100 border-0 text-sm focus-visible:ring-1
                    focus-visible:ring-neutral-200
                         text-neutral-800 focus-visible:ring-offset-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Create Assistant</Button>
        </form>
      </Form>
    </div>
  );
};

export default NewAssistant;
