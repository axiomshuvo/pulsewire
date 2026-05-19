"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Checkbox,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { RiArrowRightLine } from "react-icons/ri";

const fieldClassNames = {
  label:
    "pb-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#7b6d66] sm:pb-2",
  description: "text-xs leading-6 text-[#8b7a72]",
  compactDescription: "text-[11px] leading-5 text-[#8b7a72] sm:hidden",
  desktopDescription: "hidden text-xs leading-6 text-[#8b7a72] sm:block",
  input:
    "h-14 rounded-2xl border border-[#eadfd4] bg-white px-4 text-sm font-medium text-[#241d1a] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] placeholder:text-[#aa9b92] transition duration-200 focus:border-[#ff6b57] focus:outline-none focus:ring-4 focus:ring-[#ff6b57]/10",
  inputGroup:
    "h-14 rounded-2xl border border-[#eadfd4] bg-white text-[#241d1a] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition duration-200 focus-within:border-[#ff6b57] focus-within:ring-4 focus-within:ring-[#ff6b57]/10",
  inputGroupField:
    "px-4 text-sm font-medium text-[#241d1a] placeholder:text-[#aa9b92]",
  errorInput:
    "border-[#d15b49] bg-[#fff4f1] focus:border-[#d15b49] focus:ring-[#d15b49]/10",
  errorInputGroup:
    "border-[#d15b49] bg-[#fff4f1] focus-within:border-[#d15b49] focus-within:ring-[#d15b49]/10",
  errorText: "text-sm text-[#d15b49]",
};

const getInputClassName = (hasError) =>
  `${fieldClassNames.input} ${hasError ? fieldClassNames.errorInput : ""}`;

const getInputGroupClassName = (hasError) =>
  `${fieldClassNames.inputGroup} ${
    hasError ? fieldClassNames.errorInputGroup : ""
  }`;

const validatePhotoUrl = (value) => {
  const normalizedValue = value?.trim();

  if (!normalizedValue) {
    return true;
  }

  try {
    const imageUrl = new URL(normalizedValue);

    return imageUrl.protocol === "https:" || "Enter a valid https image URL";
  } catch {
    return "Enter a valid https image URL";
  }
};

export default function RegisterForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      terms: false,
    },
  });

  const handleRegisterForm = async (formData) => {
    console.log("Register form submitted with data:", formData);

    const redirectPath = "/dashboard";
    const imageUrl = formData.photoUrl?.trim() || undefined;

    const { data, error } = await authClient.signUp.email({
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      image: imageUrl,
      callbackURL: redirectPath,
    });

    if (error) {
      alert(`Registration error: ${error?.message || "Something went wrong"}`);
      return;
    }
    if (data) {
      alert("Registration successful!");
      window.location.assign(redirectPath);
    }

    console.log("Sign-up response:", { data, error });
  };

  console.log("Register form errors:", errors);

  return (
    <Form
      className="w-full"
      onSubmit={handleSubmit(handleRegisterForm)}
      validationBehavior="aria"
    >
      <Fieldset className="space-y-5 sm:space-y-6">
        <Fieldset.Legend className="sr-only">Register account</Fieldset.Legend>

        <div className="rounded-2xl border border-[#eadfd4] bg-[#fffdfb] px-4 py-3 sm:hidden">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#7b6d66]">
            Quick help
          </p>
          <p className="mt-1 text-[11px] leading-5 text-[#8b7a72]">
            Add your real name, a public photo URL, your sign-in email, and a
            secure password.
          </p>
        </div>

        <Fieldset.Group className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          <TextField
            isRequired
            className="flex flex-col gap-2"
            isInvalid={Boolean(errors.fullName)}
            name="fullName"
            type="text"
          >
            <Label
              className={fieldClassNames.label}
              isInvalid={Boolean(errors.fullName)}
            >
              Full name
            </Label>
            <Input
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Full name must be at least 3 characters",
                },
              })}
              aria-invalid={Boolean(errors.fullName)}
              className={getInputClassName(Boolean(errors.fullName))}
              placeholder="Pradipta Sarker"
              variant="secondary"
            />
            <Description className={fieldClassNames.desktopDescription}>
              This is how your profile name will appear across PulseWire.
            </Description>
            <FieldError className={fieldClassNames.errorText}>
              {errors.fullName?.message}
            </FieldError>
          </TextField>

          <TextField
            className="flex flex-col gap-2"
            isInvalid={Boolean(errors.photoUrl)}
            name="photoUrl"
            type="url"
          >
            <Label
              className={fieldClassNames.label}
              isInvalid={Boolean(errors.photoUrl)}
            >
              Photo URL
            </Label>
            <Input
              {...register("photoUrl", {
                validate: validatePhotoUrl,
              })}
              aria-invalid={Boolean(errors.photoUrl)}
              className={getInputClassName(Boolean(errors.photoUrl))}
              placeholder="https://example.com/profile.jpg"
              variant="secondary"
            />
            <Description className={fieldClassNames.compactDescription}>
              Use a public image link.
            </Description>
            <Description className={fieldClassNames.desktopDescription}>
              Use a public image link so your avatar loads correctly.
            </Description>
            <FieldError className={fieldClassNames.errorText}>
              {errors.photoUrl?.message}
            </FieldError>
          </TextField>

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
              We will use this for sign-in and important account updates.
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
          >
            <Label
              className={fieldClassNames.label}
              isInvalid={Boolean(errors.password)}
            >
              Password
            </Label>
            <InputGroup
              className={getInputGroupClassName(Boolean(errors.password))}
              variant="secondary"
            >
              <InputGroup.Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                aria-invalid={Boolean(errors.password)}
                className={fieldClassNames.inputGroupField}
                placeholder="Create a secure password"
                type={isPasswordVisible ? "text" : "password"}
              />
              <InputGroup.Suffix>
                <Button
                  isIconOnly
                  type="button"
                  aria-label={
                    isPasswordVisible ? "Hide password" : "Show password"
                  }
                  className="h-10 w-10 text-[#8b7a72] transition hover:text-[#241d1a]"
                  size="sm"
                  variant="ghost"
                  onPress={() =>
                    setIsPasswordVisible((isVisible) => !isVisible)
                  }
                >
                  {isPasswordVisible ? (
                    <IoEyeOffOutline className="size-4" />
                  ) : (
                    <IoEyeOutline className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description className={fieldClassNames.compactDescription}>
              Use at least 6 characters.
            </Description>
            <Description className={fieldClassNames.desktopDescription}>
              Use at least 6 characters to secure your reader profile.
            </Description>
            <FieldError className={fieldClassNames.errorText}>
              {errors.password?.message}
            </FieldError>
          </TextField>
        </Fieldset.Group>

        <div
          className={`rounded-2xl border bg-[#fffdfb] p-3 sm:p-4 ${
            errors.terms ? "border-[#d15b49] bg-[#fff4f1]" : "border-[#eadfd4]"
          }`}
        >
          <Controller
            control={control}
            name="terms"
            rules={{
              validate: (value) =>
                value || "You must accept the terms and conditions",
            }}
            render={({ field }) => (
              <Checkbox
                isRequired
                isInvalid={Boolean(errors.terms)}
                isSelected={Boolean(field.value)}
                inputRef={field.ref}
                name={field.name}
                className="group flex items-start gap-3"
                onBlur={field.onBlur}
                onChange={field.onChange}
              >
                <Checkbox.Control
                  className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-[10px] border bg-[#fffdfb] text-white transition group-data-[selected=true]:border-[#241d1a] group-data-[selected=true]:bg-[#241d1a] group-data-[indeterminate=true]:border-[#241d1a] group-data-[indeterminate=true]:bg-[#241d1a] ${
                    errors.terms ? "border-[#d15b49]" : "border-[#d5c7bc]"
                  }`}
                >
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content className="space-y-1">
                  <span className="block text-sm font-semibold text-[#241d1a]">
                    Accept terms and conditions
                  </span>
                  <span className="block text-[11px] leading-5 text-[#8b7a72] sm:text-xs sm:leading-6">
                    You confirm that the details above are yours and agree to
                    PulseWire account policies.
                  </span>
                </Checkbox.Content>
              </Checkbox>
            )}
          />
          <FieldError className={`mt-3 ${fieldClassNames.errorText}`}>
            {errors.terms?.message}
          </FieldError>
        </div>

        <Fieldset.Actions className="flex flex-col gap-3 border-t border-[#eadfd4] pt-5 sm:gap-4 sm:pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-sm text-sm leading-6 text-[#6c5f58]">
            Your account keeps saved stories and preferences synced every time
            you come back.
          </p>

          <Button
            type="submit"
            className="group h-14 w-full rounded-2xl bg-[#241d1a] px-6 text-base font-semibold text-white shadow-[0_24px_45px_-28px_rgba(36,29,26,0.85)] transition duration-200 hover:-translate-y-0.5 hover:bg-black md:w-auto"
          >
            Create account
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition duration-200 group-hover:translate-x-0.5">
              <RiArrowRightLine className="text-lg" />
            </span>
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}
