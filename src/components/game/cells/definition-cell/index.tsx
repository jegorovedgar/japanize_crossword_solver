import React from "react";
import './index.css';
export interface DefinitionCellProps {
    value?: string | number
}
export const DefinitionCell = ({ value }: DefinitionCellProps) => <div className="definition-cell">{value}</div>
export default DefinitionCell;