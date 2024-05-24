import MOCK_DATA from '../mocks/resCardMock.json';
import { render, screen } from '@testing-library/react';
import { RestrauntCard } from '../RestrauntCard';

describe("RestrauntCard Component", () => {
   
    it("should render the restraunt card component", () => {
        render(<RestrauntCard resData={MOCK_DATA} />);
        // const cardElement = screen.getByText("Cafe Amudham");
        // expect(cardElement).toBeInTheDocument();
    });
});
