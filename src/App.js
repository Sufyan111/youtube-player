import logo from './logo.svg';
import './App.css';
import VideoPlayer from './Components/VideoPlayer'

function App() {
  return (
    <div className="App">
      <VideoPlayer url={"https://www.youtube.com/watch?v=ZeNyjnneq_w&t=2s"} />
    </div>
  );
}

export default App;
