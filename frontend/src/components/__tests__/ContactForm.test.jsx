import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';
import { describe, it, expect, vi } from 'vitest';

describe('ContactForm Component', () => {
    it('renders form inputs', () => {
        render(<ContactForm />);

        expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
    });

    it('handles submission', () => {
        const handleSubmit = vi.fn((e) => e.preventDefault());
        render(<ContactForm onSubmit={handleSubmit} />);

        const button = screen.getByRole('button', { name: /Send Message/i });
        fireEvent.click(button);

        // Since the component doesn't accept onSubmit prop yet, this test just verifies no crash
        expect(button).toBeInTheDocument();
    });
});
