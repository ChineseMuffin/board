import React from 'react';
import './App.css';

function Dot(props) {
  return (
    <rect width={props.width} height={props.height} x={props.x} y={props.y} fill={props.fill} stroke={props.stroke} onClick={props.onClick}/>
  );
}

function Display(props) {
  const sideLength = 100;

  function renderDot (x, y) {
    const dot = props.dots[y][x];
    return <Dot width={sideLength} height={sideLength} x={sideLength * x} y={sideLength * y} fill={dot.lighting ? "#ff0000" : "#ffffff"} stroke="#000000" onClick={() => props.onClick(x, y)} />;
  };

  function renderAllDot() {

  }

  return (
    <g id="display">
      {renderDot(0, 0)}
      {renderDot(1, 0)}
      {renderDot(0, 1)}
      {renderDot(1, 1)}
    </g>
  );
}

class Board extends React.Component {
  // TODO ドットを複製する
  constructor(props) {
    super(props);
    const dot = {lighting: false, };

    this.state = {
      dots: Array(2).fill().map(() => Array(2).fill().map(() => Object.assign({}, dot))),
    };
  }

  handleClick = (x, y) => {
    const dots = this.state.dots.slice();
    dots[y][x].lighting = !dots[y][x].lighting
    this.setState({dots: dots})
  };

  render() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1000" height="1000">
        <Display dots={this.state.dots} onClick={this.handleClick}/>
      </svg>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
