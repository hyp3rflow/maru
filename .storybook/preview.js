import CssBaseline from '../src/components/CssBaseline';
import SpoqaHanSans from '../src/components/SpoqaHanSans';

export const decorators = [
  Story => (
    <>
      <CssBaseline />
      <SpoqaHanSans />
      {Story()}
    </>
  ),
];
