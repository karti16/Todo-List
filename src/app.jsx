import MainContent from './components/maincontent/mainContent';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import styles from './app.module.scss';
const App = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.app}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
