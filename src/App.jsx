import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from 'components/Layout/Layout';

import 'react-toastify/dist/ReactToastify.css';
import { LoaderPercent } from './components/Loader/LoaderPercent';

const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ParticipantsPage = lazy(() =>
  import('pages/ParticipantsPage/ParticipantsPage')
);
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const EventPage = lazy(() => import('pages/EventPage/EventPage.jsx'));

function App() {
  return (
    <Suspense fallback={<LoaderPercent />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/participants" element={<ParticipantsPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/events" element={<EventPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}
export default App;
