import CssBaseline from '../src/components/CssBaseline';

export const decorators = [
  Story => (
    <>
      <CssBaseline />
      {Story()}
    </>
  ),
];
