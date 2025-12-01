import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import { describe, it, expect } from 'vitest';

describe('Navbar Component', () => {
    it('renders logo and links', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        expect(screen.getByText(/Project/i)).toBeInTheDocument();
        expect(screen.getByText(/Bhaasha/i)).toBeInTheDocument();
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
        expect(screen.getByText(/Services/i)).toBeInTheDocument();
        expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    });

    it('toggles mobile menu', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        // Mobile menu button is hidden on desktop, so we might need to mock viewport or just check existence
        // For simplicity, we check if the button exists (it's always rendered but hidden via CSS)
        const menuButton = screen.getByRole('button');
        fireEvent.click(menuButton);
        // In a real browser test we'd check visibility, here we check if state changes reflected in DOM
        // The mobile menu renders when isOpen is true
        const mobileLinks = screen.getAllByText(/Home/i);
        expect(mobileLinks.length).toBeGreaterThan(1); // One desktop, one mobile
    });
});
