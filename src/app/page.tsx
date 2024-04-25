import type { NextPage } from 'next';
import ComposedComponent from '../components/composedcomponent'
import HC from '../pages/Hana/hanaComponent'

const Home: NextPage = () => {

  const HCbuttonText = "Click Hana btn!"; // Text for the button

  return (
    <div>
      <h1>EPLabsMo</h1>
      <h2>The Demo's A Composed Component</h2>
      <p>Every Jr. Dev worked on individual Components.</p>
      <p>Which were then merged into a branch for this project.</p>
      <p>Below is a component composed from their component</p>
      <ComposedComponent>
        <HC buttonText={HCbuttonText}/>
      </ComposedComponent>
    </div>
  );
};

export default Home;
