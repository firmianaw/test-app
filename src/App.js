import React from 'react';
import Carousel from './Carousel';

const App = () => {
    return (
        <div>
            <h1>My Carousel</h1>
            <Carousel>
                <div className="card">Card 1</div>
                <div className="card">Card 2</div>
                <div className="card">Card 3</div>
                <div className="card">Card 4</div>
                <div className="card">Card 5</div>
                <div className="card">Card 6</div>
                <div className="card">Card 7</div>
                <div className="card">Card 8</div>
                <div className="card">Card 9</div>
                <div className="card">Card 10</div>
                <div className="card">Card 11</div>
                <div className="card">Card 12</div>
                <div className="card">Card 13</div>
                <div className="card">Card 14</div>
                <div className="card">Card 15</div>
                <div className="card">Card 16</div>
                {/* Add more cards as needed */}
            </Carousel>
        </div>
    );
};

export default App;