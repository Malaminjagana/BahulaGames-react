const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This part is powered by React!</p>
    </div>
  );
}

root.render(<App />);
