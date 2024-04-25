import type { NextPage } from 'next';
import ComposedComponent from '../components/composedcomponent'
import HC from '../pages/Hana/hanaComponent'
import YolandComponent from '../pages/YolandaComponent/YolandaComponent'

const Home: NextPage = () => {

  const HCbuttonText = "Click Hana btn!"; // Text for the button
  const dog = {
    src:'https://upload.wikimedia.org/wikipedia/commons/b/b4/Golden_Retriever_puppy_standing.jpg',
     alt: 'Dog',
     width: '200px'
}

  return (
    <div>
      <h1>EPLabsMo</h1>
      <h2>The Demo's A Composed Component</h2>
      <p>Every Jr. Dev worked on individual Components.</p>
      <p>Which were then merged into a branch for this project.</p>
      <p>Below is a component composed from their component</p>
      <ComposedComponent>
        <HC buttonText={HCbuttonText}/>
        <YolandComponent src={dog.src} alt={dog.alt} width={dog.width}/>
      </ComposedComponent>
    </div>
  );
};

export default Home;
