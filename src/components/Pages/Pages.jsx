// import { loremIpsum } from 'lorem-ipsum';

const BuildPage = (index) => (
  <>
    <h3>Page {index}</h3>
    <div>
      hello
    </div>
  </>
);

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);
export const PageThree = () => BuildPage(3);