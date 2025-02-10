import React from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiChatSmileAiLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useSubmitConsultationMutation } from "~/app/messages/messages.api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { formSchema, TFormValues } from "./utils/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Consultation: React.FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phoneNumber: "" },
    mode: "onSubmit",
  });
  const { handleSubmit, control, reset } = methods;
  const [submitConsultation, { isLoading }] = useSubmitConsultationMutation();

  const onSubmit = async (data: TFormValues) => {
    try {
      await submitConsultation(data).unwrap();
      reset();
      toast.success(t("validations.submitSuccess"), {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          background: "#00b8db",
        },
      });
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error(t("validations.submitError"), {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div
      className="pb-24 px-4 w-full bg-gradient-to-r from-white to-cyan-200 text-center"
      id="consultation"
    >
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-10 backdrop-blur-lg text-center rounded-2xl max-w-2xl flex flex-col gap-6 mx-auto"
        >
          <div className="flex justify-center gap-3">
            <h2 className="text-gray-900 font-sans font-semibold text-4xl mb-6">
              {t("consultation.title")}
            </h2>
            <RiChatSmileAiLine size={40} className="text-cyan-400" />
          </div>

          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  {...field}
                  type="text"
                  placeholder={t("consultation.namePlaceholder")}
                  className="w-full text-gray-500 px-6 py-4 bg-white/60 border border-gray-300 rounded-full outline-none focus:ring-1 focus:ring-cyan-400 shadow-sm placeholder-gray-500"
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">
                    {t(fieldState.error.message as string)}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  {...field}
                  type="email"
                  placeholder={t("consultation.emailPlaceholder")}
                  className="text-gray-500 w-full px-6 py-4 bg-white/60 border border-gray-300 rounded-full outline-none focus:ring-1 focus:ring-cyan-400 shadow-sm placeholder-gray-500"
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">
                    {t(fieldState.error.message as string)}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <input
                  {...field}
                  type="tel"
                  placeholder={t("consultation.phonePlaceholder")}
                  className="text-gray-500 w-full px-6 py-4 bg-white/60 border border-gray-300 rounded-full outline-none focus:ring-1 focus:ring-cyan-400 shadow-sm placeholder-gray-500"
                />
                {fieldState.error && (
                  <p className="text-red-500 text-sm">
                    {t(fieldState.error.message as string)}
                  </p>
                )}
              </div>
            )}
          />

          <button
            type="submit"
            className="cursor-pointer text-lg px-6 py-4 text-white font-semibold bg-gradient-to-r from-cyan-200 to-cyan-500 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              t("consultation.buttonText")
            )}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Consultation;
