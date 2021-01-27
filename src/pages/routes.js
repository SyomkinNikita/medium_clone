import {Switch, Route} from 'react-router-dom'
import GlobalFeed from "./globalFeed";
import Article from "./article";
import Authentication from "./authentication";
import TagFeed from "./tagFeed";
import YourFeed from "./yourFeed";
import CreateArticle from "./createArticle";
import EditArticle from "./editArticle";
import Settings from "./settings";
import UserProfile from "./userProfile";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={GlobalFeed} exact />
            <Route path="/profiles/:slug" component={UserProfile} />
            <Route path="/profiles/:slug/favorites" component={UserProfile} />
            <Route path="/settings" component={Settings} />
            <Route path="/articles/new" component={CreateArticle} />
            <Route path="/articles/:slug/edit" component={EditArticle} />
            <Route path="/feed" component={YourFeed} exact />
            <Route path="/tags/:slug" component={TagFeed} />
            <Route path="/articles/:slug" component={Article} />
            <Route path="/login" component={Authentication} />
            <Route path="/register" component={Authentication} />
        </Switch>
    )
}
export default Routes