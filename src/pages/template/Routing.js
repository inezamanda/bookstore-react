import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BookDetail from '../../components/book/BookDetail'
import BookForm from '../../components/book/BookForm'
import BookList from '../../components/book/BookList'
import MemberForm from '../../components/member/MemberForm'
import MemberList from '../../components/member/MemberList'
import Home from '../Home'
import Footer from './Footer'
import Navigation from './Navigation'
import NotFound from '../../components/404/NotFound'
import { Redirect } from 'react-router'

const Routing = () => {
    return (
        <BrowserRouter>
            <Navigation />
                <section className="py-5 container mt-5">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/books" exact component={BookList} />
                        <Route path="/books/add" exact component={BookForm} />
                        <Route path="/books/edit/:id" exact component={BookForm}/>
                        <Route path="/books/:id" exact component={BookDetail}/>
                        <Route path="/members" exact component={MemberList} />
                        <Route path="/members/add" exact component={MemberForm} />
                        {/* Not found page yang perlu diredirect ke url /404 */}
                        {/* <Route path="/404" component={NotFound} />
                        <Redirect from="*" to="/404" /> */}
                        {/* not found page yang tidak perlu redirect ke url tertentu */}
                        {/* <Route component={NotFound}/> */}
                    </Switch>
                </section>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
