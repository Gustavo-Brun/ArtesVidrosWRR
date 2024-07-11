'use client'

import React from "react";

import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { format } from "date-fns"
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type CreateFormProps = {
    category: "budget" | "execution";
    name: string;
    adress: string;
    contact: string;
    date: {
        day: string
        time: string
    }
}

export const Tab_Create = (): React.JSX.Element => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<CreateFormProps>();

    const onSubmitFx: SubmitHandler<CreateFormProps> = (data) => {
        console.log(data);
    };


    return (
        <form
            onSubmit={handleSubmit(onSubmitFx)}
            className="flex flex-col bg-white rounded-2xl p-6 gap-6 lg:p-8"
        >
            <div className="flex gap-4 justify-center text-sm lg:text-base">
                <div className="flex py-2 gap-1 items-center">
                    <input
                        className="accent-color-secundary w-5 h-5"
                        type="radio"
                        id="budget"
                        value="budget"
                        defaultChecked
                        {...register("category")}
                    />
                    <label
                        className="text-sm"
                        htmlFor="budget"
                    >
                        Fazer Orçamento
                    </label>
                </div>
                <div className="flex py-2 gap-1 items-center">
                    <input
                        className="accent-color-secundary w-5 h-5"
                        type="radio"
                        id="execution"
                        value="execution"
                        {...register("category")}
                    />
                    <label htmlFor="execution">Realizar o serviço</label>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-[#82979E]">Cliente</label>
                <input
                    type="text"
                    {...register("name", { required: true })}
                    className={`rounded-2xl py-2 px-4 bg-[#F1F3F4] ${errors.name ? "border-2 border-[#CF2C20]" : ""
                        }`}
                />
                {errors.name?.type === "required" && (
                    <p className="text-xs text-[#CF2C20]">
                        Insira o nome do cliente
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-[#82979E]">Contato</label>
                <input
                    type="text"
                    {...register("contact", { required: true })}
                    className={`rounded-2xl py-2 px-4 bg-[#F1F3F4] ${errors.contact ? "border-2 border-[#CF2C20]" : ""
                        }`}
                />
                {errors.contact?.type === "required" && (
                    <p className="text-xs text-[#CF2C20]">
                        Insira o contato do cliente
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-[#82979E]">Endereço</label>
                <input
                    type="text"
                    {...register("adress", { required: true })}
                    className={`rounded-2xl py-2 px-4 bg-[#F1F3F4] ${errors.adress ? "border-2 border-[#CF2C20]" : ""
                        }`}
                />
                {errors.adress?.type === "required" && (
                    <p className="text-xs text-[#CF2C20]">
                        Insira o endereço do cliente
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-[#82979E]">Data</label>
                <Controller
                    control={control}
                    name="date.day"
                    render={({ field: { onChange, value } }) => (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !value && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />

                                    {value ? format(value, "dd/MM/yyyy") : <span>Escolha uma data</span>}

                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">

                                <Calendar
                                    mode="single"
                                    selected={value as unknown as Date}
                                    onSelect={onChange}
                                    initialFocus
                                    locale={ptBR}

                                />
                            </PopoverContent>
                        </Popover>
                    )}
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-[#82979E]">Período/Horário</label>
                <input
                    type="text"
                    {...register("date.time", { required: true })}
                    className={`rounded-2xl py-2 px-4 bg-[#F1F3F4] ${errors.date?.time ? "border-2 border-[#CF2C20]" : ""
                        }`}
                />
                {errors.date?.time?.type === "required" && (
                    <p className="text-xs text-[#CF2C20]">
                        Informe o melhor período ou horário.
                    </p>
                )}
            </div>

            <button
                type="submit"
                className='flex mx-auto text-2xl rounded-3xl shadow-md text-white mt-4 p-3 px-6 border-2 bg-black font-mono font-bold'>
                Agendar
            </button>
        </form>
    );
};