import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Error, Landing, ProtectedRoute } from './pages';
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from './pages/dashboard';

//import styled from 'styled-components'

/* const Button = styled.button`
backround: red;´
color: white;
font-size: 1rem;
`
<Button><Button> */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
