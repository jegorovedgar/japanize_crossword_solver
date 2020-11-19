import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "./index.css";

export const AddCell = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => <button className="add-cell" {...props}><span></span></button>