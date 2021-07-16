import { render, screen } from '@testing-library/react';
import CodingExercise from './screens/CodingExercise';

test('renders learn react link', () => {
  render(<CodingExercise />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
