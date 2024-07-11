'use client'

import React, { useEffect, useState } from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import fetchSchedule from "@/functions/fetchSchedule";

export const Tab_Display = () => {

    const [schedule, setSchedule] = useState([]);

    const fetchData = async () => {
        return await fetchSchedule.getSchedule();
    };

    useEffect(() => {
        fetchData().then(data => {
            setSchedule(data);
        });
    }, []);

    type dataProps = {
        id: number;
        category: string;
        name: string;
        adress: string;
        contact: string;
        date: string
    }

    return (

        <div className="flex border p-2 rounded-sm">
            <Table>
                <TableCaption>Lista de Agendamentos.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Endereço</TableHead>
                        <TableHead>Contato</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        schedule.map((item: dataProps) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.adress}</TableCell>
                                    <TableCell>{item.contact}</TableCell>
                                </TableRow>
                            )
                        })}
                </TableBody>
            </Table>
        </div>

    );
};