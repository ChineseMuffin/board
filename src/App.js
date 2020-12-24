import React from 'react';
import './App.css';

function Dot(props) {
  return (
    <rect width={props.width} height={props.height} x={props.x} y={props.y} fill={props.fill} stroke={props.stroke} onClick={props.onClick}/>
  );
}

function Display(props) {
  const x      = props.viewBox.x;
  const y      = props.viewBox.y;
  const width  = props.viewBox.width;
  const height = props.viewBox.height;
  
  const columns = props.size.columns;
  const rows    = props.size.rows;

  const dotWidth  = width  / columns;
  const dotHeight = height / rows;

  function renderDot (i) {
    const dot = props.dots[i];
    const row = Math.floor(i / columns);
    const column = i % columns;
    return (
      <Dot
        width={dotWidth} height={dotHeight}
        x={x + dotWidth * column} y={y + dotHeight * row}
        fill={dot.lighting ? "#ff0000" : "#ffffff"} stroke="#000000"
        onClick={() => props.onClick(i)} 
      />
    );
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
      dots: Array(21 * 26).fill().map(() => Object.assign({}, dot)),
    };

    this.boardProps = {
      viewBox: {
        x: 0,
        y: 0,
        height: 520,
        width: 420,
      },
      // 個数を表すいい英語を名づける
      size: {
        rows: 21,
        columns: 26,
      },
    };
  }

  handleClick = (i) => {
    const dots = this.state.dots.slice();
    dots[i].lighting = !dots[i].lighting
    this.setState({dots: dots})
  };

  render() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="2600" height="2100">
        <Display
          dots={this.state.dots}
          viewBox={this.boardProps.viewBox}
          size={this.boardProps.size}
          onClick={this.handleClick}
        />
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
