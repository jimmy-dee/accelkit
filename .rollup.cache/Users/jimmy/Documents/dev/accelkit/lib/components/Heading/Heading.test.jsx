import { render, screen } from '@testing-library/react';
import React from 'react';
import Heading from './Heading';
const text = 'Hello World!';
const levels = [1, 2, 3, 4, 5];
describe('Heading', () => {
    levels.map((level) => {
        test(`Render a h${level} element`, () => {
            render(<Heading id="testing-heading" level={level}>
          {text}
        </Heading>);
            const heading = screen.getByRole('heading', { level });
            expect(heading).toBeDefined();
            expect(screen.findByText(text)).toBeDefined();
        });
    });
});
//# sourceMappingURL=Heading.test.jsx.map