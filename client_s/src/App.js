import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import {LandingPage} from "./pages/LandingPage/LandingPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {Layout} from "./components/Layout/Layout";
import {RegistrationPage} from "./pages/RegistrationPage/RegistrationPage";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import {SingleCoursePage} from "./pages/SingleCoursePage/SingleCoursePage";
import {check} from "./http/userAPI";
// import {check} from "./http/userAPI";


const App = observer(() => {

    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [user])

    if (loading) {
        return <div>Loading</div>
    }

    return (
      <>
          <Routes>
              <Route path={"/"} element={<Layout />}>
              <Route index element={<LandingPage />}/>
              <Route path="login" element={<LoginPage />}/>
              <Route path="registration" element={<RegistrationPage />}/>
              <Route path="courses/:courseId" element={<SingleCoursePage />}/>
              <Route path="/profiles/:profileId" element={<ProfilePage />} />
              </Route>
              <Route path="/*" element={<NotFoundPage />}/>
          </Routes>
      </>
    );
})

export {App};
