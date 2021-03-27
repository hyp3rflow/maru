import { render } from '@testing-library/react';
import React from 'react';
import Button from '.';

describe('<Button />', () => {
  describe('Rendering', () => {
    it('should have button', () => {
      const { getByText } = render(<Button>Lorem Ipsum</Button>);

      expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    });
  });
});
