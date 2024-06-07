import logo from './logo.svg';
import './App.css';
import AddPhotoapp from './components/AddPhotoapp';
import SearchPhotoapp from './components/SearchPhotoapp';
import DeletePhotoapp from './components/DeletePhotoapp';
import ViewPhotoapp from './components/ViewPhotoapp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPhotoapp/>}/>
      <Route path='/search' element={<SearchPhotoapp/>}/>
      <Route path='/delete' element={<DeletePhotoapp/>}/>
      <Route path='/view' element={<ViewPhotoapp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
