import express, { Request, Response, NextFunction } from "express";
import { Error } from "mongoose";
import { ObjectId } from "mongodb";
import Task from "../models/task";
import { asyncWrapper } from "../middlewares/async";
import ApiError from "../errors/ApiError";
import { nextTick } from "process";
export const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.status(200).json({
    status: "Success",
    amount: tasks.length,
    data: {
      tasks,
    },
  });
});

export const createTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    status: "Success",
    data: {
      task,
    },
  });
});

export const getTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return next(new ApiError(`No task with ID of ${req.params.id}`, 404));
    }
    res.status(200).json({
      status: "Success",
      data: {
        task,
      },
    });
  }
);

export const updateTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate(
      { _id: new ObjectId(id) },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return next(new ApiError(`No task with ID of ${req.params.id}`, 404));
    }

    res.status(200).json({
      status: "Success",
      data: {
        task,
      },
    });
  }
);

export const deleteTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return next(new ApiError(`No task with ID of ${req.params.id}`, 404));
    }
    res.status(200).json({
      status: "Success",
      task: null,
    });
  }
);
