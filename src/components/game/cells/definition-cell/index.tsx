import React, { InputHTMLAttributes } from "react";
import './index.css';

export const DefinitionCell = (props: InputHTMLAttributes<HTMLInputElement>) => <input className="definition-cell" type="text" {...props}/>
export default DefinitionCell;