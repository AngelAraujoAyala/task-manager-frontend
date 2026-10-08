import type { Task } from "../models/task.interface";

export const tasks: Task[] = [
    {
        id: "1",
        title: "Comprar víveres para la semana",
        status: "pending",
        createdAt: "2026-10-01T08:30:00Z",
        updatedAt: "2026-10-01T08:30:00Z"
    },
    {
        id: "2",
        title: "Revisar y responder correos pendientes",
        status: "pending",
        createdAt: "2026-10-02T09:15:00Z",
        updatedAt: "2026-10-02T11:00:00Z"
    },
    {
        id: "3",
        title: "Preparar presentación para el proyecto",
        status: "completed",
        createdAt: "2026-10-03T14:00:00Z",
        updatedAt: "2026-10-03T14:00:00Z"
    },
    {
        id: "4",
        title: "Hacer ejercicio (rutina de pierna)",
        status: "pending",
        createdAt: "2026-10-04T07:00:00Z",
        updatedAt: "2026-10-04T08:15:00Z"
    },
    {
        id: "5",
        title: "Actualizar dependencias del repositorio",
        status: "pending",
        createdAt: "2026-10-05T16:45:00Z",
        updatedAt: "2026-10-05T16:45:00Z"
    }
];