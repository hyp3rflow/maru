import { render } from '@testing-library/react';
import React from 'react';

import Checkbox from '.';

describe('<Checkbox />', () => {
  describe('Rendering', () => {
    it('should have Checkbox', () => {
      const { getByText } = render(<Checkbox>Lorem Ipsum</Checkbox>);
      expect(getByText('Lorem Ipsum')).toBeInTheDocument();
    });
  });
});
