import React from 'react';
import './App.css';

function Dot(props) {
  return (
    <rect width={props.width} height={props.height} x={props.x} y={props.y} fill={props.fill} stroke={props.stroke} onClick={props.onClick}/>
  );
}

function Display(props) {
  const sideLength = 100;
  const columns = 2;

  function renderDot (i) {
    const dot = props.dots[i];
    const row = Math.floor(i / columns);
    const column = i % columns;
    return <Dot width={sideLength} height={sideLength} x={sideLength * column} y={sideLength * row} fill={dot.lighting ? "#ff0000" : "#ffffff"} stroke="#000000" onClick={() => props.onClick(i)} />;
  };

  function renderAllDot() {
    // TODO listをpropsから取得する
    return props.dots.map((dot, index) => renderDot(index));
  }

  return (
    <g id="display">
      {renderAllDot()}
    </g>
  );
}

class Board extends React.Component {
  // TODO ドットを複製する
  constructor(props) {
    super(props);
    const dot = {lighting: false, };

    this.state = {
      dots: Array(4).fill().map(() => Object.assign({}, dot)),
    };
  }

  handleClick = (i) => {
    const dots = this.state.dots.slice();
    dots[i].lighting = !dots[i].lighting
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
