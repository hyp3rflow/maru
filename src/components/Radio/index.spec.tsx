import { render } from '@testing-library/react';
import React from 'react';

import Radio from '.';

describe('<Radio />', () => {
  describe('Rendering', () => {
    it('should have RadioButton', () => {
      const { getByText } = render(<Radio>Lorem Ipsum</Radio>);
      expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    });
  });
});
