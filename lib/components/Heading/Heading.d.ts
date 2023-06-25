import { FC } from 'react';
export interface Props {
    /** this is the contents of the heading element */
    children: React.ReactNode;
    /** a unqiue id for the element */
    id: string;
    /** an optional parameter, this is the level of heading we want to set, by default set to 2  */
    level?: Level;
}
export type Level = 1 | 2 | 3 | 4 | 5;
declare const Heading: FC<Props>;
export default Heading;
