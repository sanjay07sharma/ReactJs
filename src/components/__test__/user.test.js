import User from '../User'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetch from 'node-fetch';

describe('User Component', () => {
   it("should render the user component", async () => {
        await render(<User />);
        const userElement = screen.getByText(/Logged in User :/);
        expect(userElement).toBeInTheDocument();
   });
});
