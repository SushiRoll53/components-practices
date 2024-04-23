import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>EPLabsMo</h1>
      <p>Help us</p>
      <table>
        <tbody>
          <tr>
            <td>Row 1, Col 1</td>
            <td>Row 1, Col 2</td>
            <td>Row 1, Col 3</td>
          </tr>
          <tr>
            <td>Row 2, Col 1</td>
            <td>Row 2, Col 2</td>
            <td>Row 2, Col 3</td>
          </tr>
          <tr>
            <td>Row 3, Col 1</td>
            <td>Row 3, Col 2</td>
            <td>Row 3, Col 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
