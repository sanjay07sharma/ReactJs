import User from '../User'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetch from 'cross-fetch';

describe('User Component', () => {
   it("should render the user component", async () => {
        await render(<User />);
        const userElement = screen.getByText(/Logged in User :/);
        expect(userElement).toBeInTheDocument();
   });
   
   it("should should have user image", async () => {
      await render(<User />);
      const userImage = screen.getByRole("img");
      expect(userImage).toBeInTheDocument();
 });
});
