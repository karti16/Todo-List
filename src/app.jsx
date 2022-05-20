import Inbox from './components/inbox/inbox';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import styles from './app.module.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Today from './components/today/today';
import Upcoming from './components/upcoming/upcoming';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className={styles.app}>
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<Inbox />} />
            <Route path="/Todo-List/inbox" element={<Inbox />} />
            <Route path="/Todo-List/today" element={<Today />} />
            <Route path="/Todo-List/upcoming" element={<Upcoming />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
