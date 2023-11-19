export default function Square({ value, onSquareClick }) {
    return (
      <button className="cell" onClick={onSquareClick}>
        {value}
      </button>
    );
}