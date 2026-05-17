"use client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RiArrowRightLine } from "react-icons/ri";

const fieldClassNames = {
  label:
    "pb-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#7b6d66] sm:pb-2",
  description: "text-xs leading-6 text-[#8b7a72]",
  compactDescription: "text-[11px] leading-5 text-[#8b7a72] sm:hidden",
  desktopDescription: "hidden text-xs leading-6 text-[#8b7a72] sm:block",
  input:
    "h-14 rounded-2xl border border-[#eadfd4] bg-white px-4 text-sm font-medium text-[#241d1a] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] placeholder:text-[#aa9b92] transition duration-200 focus:border-[#ff6b57] focus:outline-none focus:ring-4 focus:ring-[#ff6b57]/10",
  errorInput:
    "border-[#d15b49] bg-[#fff4f1] focus:border-[#d15b49] focus:ring-[#d15b49]/10",
  errorText: "text-sm text-[#d15b49]",
};

const getInputClassName = (hasError) =>
  `${fieldClassNames.input} ${hasError ? fieldClassNames.errorInput : ""}`;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginForm = (data) => {
    console.log("Login form submitted with data:", data);
  };

  console.log("Login form errors:", errors);

  return (
    <Form
      className="w-full"
      onSubmit={handleSubmit(handleLoginForm)}
      validationBehavior="aria"
    >
      <Fieldset className="space-y-5 sm:space-y-6">
        <Fieldset.Legend className="sr-only">Login account</Fieldset.Legend>

        <div className="rounded-2xl border border-[#eadfd4] bg-[#fffdfb] px-4 py-3 sm:hidden">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#7b6d66]">
            Quick help
          </p>
          <p className="mt-1 text-[11px] leading-5 text-[#8b7a72]">
            Use the email tied to your saved stories and the password for your
            PulseWire account.
          </p>
        </div>

        <Fieldset.Group className="space-y-4 sm:space-y-5">
          <TextField
            isRequired
            className="flex flex-col gap-2"
            isInvalid={Boolean(errors.email)}
            name="email"
            type="email"
          >
            <Label
              className={fieldClassNames.label}
              isInvalid={Boolean(errors.email)}
            >
              Email address
            </Label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              aria-invalid={Boolean(errors.email)}
              className={getInputClassName(Boolean(errors.email))}
              placeholder="name@pulsewire.com"
              variant="secondary"
            />
            <Description className={fieldClassNames.desktopDescription}>
              Use the email tied to your saved stories and reading preferences.
            </Description>
            <FieldError className={fieldClassNames.errorText}>
              {errors.email?.message}
            </FieldError>
          </TextField>

          <TextField
            isRequired
            className="flex flex-col gap-2"
            isInvalid={Boolean(errors.password)}
            name="password"
            type="password"
          >
            <Label
              className={fieldClassNames.label}
              isInvalid={Boolean(errors.password)}
            >
              Password
            </Label>
            <Input
              {...register("password", {
                required: "Password is required",
              })}
              aria-invalid={Boolean(errors.password)}
              className={getInputClassName(Boolean(errors.password))}
              placeholder="Enter your password"
              variant="secondary"
            />
            <Description className={fieldClassNames.compactDescription}>
              Enter the password you created for this account.
            </Description>
            <Description className={fieldClassNames.desktopDescription}>
              Enter the password you created for your PulseWire account.
            </Description>
            <FieldError className={fieldClassNames.errorText}>
              {errors.password?.message}
            </FieldError>
          </TextField>
        </Fieldset.Group>

        <div className="flex flex-col gap-2 rounded-2xl border border-[#eadfd4] bg-[#fffdfb] p-3 text-sm sm:gap-3 sm:p-4 md:flex-row md:items-center md:justify-between">
          <span className="font-medium leading-6 text-[#6c5f58]">
            Secure sign-in for your saved stories and reading preferences.
          </span>
          <Link
            href="/register"
            className="font-semibold text-[#241d1a] transition hover:text-[#ff6b57]"
          >
            Need an account?
          </Link>
        </div>

        <Button
          type="submit"
          className="group h-14 w-full rounded-2xl bg-[#241d1a] px-6 text-base font-semibold text-white shadow-[0_24px_45px_-28px_rgba(36,29,26,0.85)] transition duration-200 hover:-translate-y-0.5 hover:bg-black"
        >
          Continue to PulseWire
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition duration-200 group-hover:translate-x-0.5">
            <RiArrowRightLine className="text-lg" />
          </span>
        </Button>
      </Fieldset>
    </Form>
  );
}
