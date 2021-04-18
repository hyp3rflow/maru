import { render } from '@testing-library/react';
import React from 'react';

import ButtonBase from '.';

describe('<ButtonBase />', () => {
  describe('Rendering', () => {
    it('should render children properly', () => {
      const { queryByText } = render(<ButtonBase>Lorem Ipsum</ButtonBase>);
      expect(queryByText('Lorem Ipsum')).toBeInTheDocument();
    });
  });
});
