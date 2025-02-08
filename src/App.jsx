import './App.css'
import './_css/pages.css'
import './_css/strands.css'
import './_css/enroll.css'
import './_css/enrollpage.css'
import './_css/signup.css'
import './_css/students.css'
import './_css/als.css'
import './_css/about.css'
import './_css/enrollmentprocess.css'
import AuthProvider from './AuthProvider';
import AppRouter from './AppRouter';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
