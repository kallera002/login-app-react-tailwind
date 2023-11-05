import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';

const AppRoutes = () => {

  return (
    <BrowserRouter basename='/' >
      <Routes>
        <Route element={<App />}>
          <Route path="sign-in" element={<>Login</>} />
          <Route path="sign-up" element={<>Sign Up</>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }