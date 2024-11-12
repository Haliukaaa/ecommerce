"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TitleSubtitle } from "./";
import Form from "rc-field-form";
import { Field } from "rc-field-form";

interface SignupValues {
  email: string;
  password: string;
  confirmPassword: string;
}

// Validation rules
const emailValidation = () => [
  { required: true, message: "И-мэйл оруулна уу" },
  { type: "email", message: "Зөв и-мэйл оруулна уу" }
];

const passwordValidation = () => [
  { required: true, message: "Нууц үг оруулна уу" },
  { min: 8, message: "Нууц үг доод тал нь 8 тэмдэгт байх ёстой" }
];

const confirmPasswordValidation = (form: any) => [
  { required: true, message: "Нууц үгээ давтан оруулна уу" },
  {
    validator: (_: any, value: string) => {
      if (!value || form.getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject("Нууц үг таарахгүй байна");
    }
  }
];

export const SignupSection = (): JSX.Element => {
  const [form] = Form.useForm();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onFinish = (values: SignupValues) => {
    console.log("Success:", values);
    setErrors({});
  };

  const onFinishFailed = ({ errorFields }: any) => {
    const newErrors: Record<string, string> = {};
    errorFields.forEach(({ name, errors }: any) => {
      newErrors[name[0]] = errors[0];
    });
    setErrors(newErrors);
  };

  return (
    <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/4">
      <TitleSubtitle
        addClass="text-blue-500"
        spanText="Бүртгэлтэй"
        title="Бүртгүүлэх"
        subtitle="Бүртгүүлэх?"
      />
      
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="w-full flex flex-col gap-4"
      >
        <div className="form-control">
          <Field name="email" rules={emailValidation()}>
            {(control: any, meta: any) => (
              <div>
                <input
                  {...control}
                  type="email"
                  placeholder="И-мэйл хаяг"
                  className={`input input-primary w-full text-black ${
                    errors.email ? 'input-error' : ''
                  }`}
                />
                {errors.email && (
                  <div className="text-error text-sm mt-1">{errors.email}</div>
                )}
              </div>
            )}
          </Field>
        </div>

        <div className="form-control">
          <Field name="password" rules={passwordValidation()}>
            {(control: any, meta: any) => (
              <div>
                <input
                  {...control}
                  type="password"
                  placeholder="Нууц үг"
                  className={`input input-primary w-full text-black ${
                    errors.password ? 'input-error' : ''
                  }`}
                />
                {errors.password && (
                  <div className="text-error text-sm mt-1">{errors.password}</div>
                )}
              </div>
            )}
          </Field>
        </div>

        <div className="form-control">
          <Field name="confirmPassword" rules={confirmPasswordValidation(form)}>
            {(control: any, meta: any) => (
              <div>
                <input
                  {...control}
                  type="password"
                  placeholder="Нууц үг давтах"
                  className={`input input-primary w-full text-black ${
                    errors.confirmPassword ? 'input-error' : ''
                  }`}
                />
                {errors.confirmPassword && (
                  <div className="text-error text-sm mt-1">{errors.confirmPassword}</div>
                )}
              </div>
            )}
          </Field>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-14 text-white text-lg"
        >
          Бүртгүүлэх{" "}
          <span className="ml-12">
            <Image
              src="/right-arrow.png"
              alt="бүртгүүлэх"
              width={19}
              height={14}
            />
          </span>
        </button>
      </Form>
    </div>
  );
};