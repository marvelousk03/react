// import React, { Component } from 'react';
// import Products from './Products';
// import Rating from './Rating';
// import { Button, Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 0,
//       isValid: true,
//     };
//   }

//   handleSelect = (selectedIndex, e) => {
//     this.setState({ index: selectedIndex });
//   };

//   render() {
//     const { index, isValid } = this.state;

//     // Placeholder for carousel images
//     const ExampleCarouselImage = ({ text }) => (
//       <div style={{ backgroundColor: '#777', height: '300px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <h3>{text}</h3>
//       </div>
//     );

//     return (
//       <div>
//         <Products />
//         <Button variant="primary" disabled={!isValid}>
//           Default
//         </Button>

//         {[1, 2, 3, 4, 5].map((r) => (
//           <Rating key={r} rating={r.toString()} />
//         ))}

//         <Carousel activeIndex={index} onSelect={this.handleSelect}>
//           <Carousel.Item>
//             <ExampleCarouselImage text="First slide" />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <ExampleCarouselImage text="Second slide" />
//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <ExampleCarouselImage text="Third slide" />
//             <Carousel.Caption>
//               <h3>Third slide label</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import Products from './Products';
import Rating from './Rating';
import { Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const isValid = true;

  return (
    <div className="container mt-4">
      <h1>Carousel + Your Code</h1>

      <Products />

      <Button variant="primary" disabled={!isValid} className="mb-3">
        Default
      </Button>

      <div className="mb-4">
        {[1, 2, 3, 4, 5].map(r => <Rating key={r} rating={r} />)}
      </div>

      <Carousel className="mb-4">
        <Carousel.Item>
          <img className="d-block w-100" src="/caro.jpg" alt="Slide 1" />
          <Carousel.Caption><h3>First Slide</h3></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images.jpg" alt="Slide 2" />
          <Carousel.Caption><h3>Second Slide</h3></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
