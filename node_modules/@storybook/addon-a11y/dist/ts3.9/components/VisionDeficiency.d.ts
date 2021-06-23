import { FunctionComponent, ReactNode } from 'react';
export interface Link {
    id: string;
    title: ReactNode;
    right?: ReactNode;
    active: boolean;
    onClick: () => void;
}
export declare const VisionDeficiency: FunctionComponent;
