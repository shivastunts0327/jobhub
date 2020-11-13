import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import EmployerRegistration from '../components/EmployerRegistration';
import '../styles/style.scss';
import '../../node_modules/normalize.css/normalize.css';
import Resume from '../components/Resume';
import JobSeekerRegistration from '../components/JobSeekerRegistration';
import Login from '../components/Login';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import BlogGrid from '../components/BlogGrid';
import Blog from '../components/Blog';
import MasterForm from '../components/PostAJob';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/resume" component={Resume} />
                <Route path="/login" component={Login} />
                <Route path="/jobseeker/register" component={JobSeekerRegistration} />
                <Route path="/employer/register" component={EmployerRegistration} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/blog-grid" component={BlogGrid} />
                <Route path="/blog" component={Blog} />
                <Route path="/post-a-job" component={MasterForm} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;