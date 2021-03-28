# 2021-03-28
- Not super motivated the last week, but we do now have a basic user update page working.
- Need to think about the front-end error message handling, right now we are returning validation errors fine, but errors outside that (eg network) are causing crashes.
- I'm aiming to have a user system completed before moving on to anything else so I can use this project as a template for others.

# 2021-03-21
- After further thought and more reading on directory structures for ReactJS, I've gone with something alike to what's suggested here: https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76.
- Have refactored the JS over to path based component naming, have added in 'screens' and will be grouping components by module/feature.


# 2021-03-15
- Productive day, took a day of annual leave to focus on this.
- Have decided to use AWS for hosting.
- Using AWS SES to handle emails. 
- Added MobX persisting state in local storage
- Finished up the forgot/reset password loop
- Pulled some more Bulma components in to visualise how this will all look


# 2021-03-07
- Lots done today, mainly surrounding login & registration 
- Now have validation errors from backend appearing on the frontend.
- Register, Login and Logout now working as I want.
- Added ESlint to the project, as code formatting was becoming annoying, I've disabled a number of rules I'll re-enable later when I've sorted out the JS structure a bit more. 
- Started work on forgot password functionality, should be fun to test locally.

# 2021-02-28
- https://mobx.js.org/about-this-documentation.html
- After much reading about MobX vs Redux, I've decided to go with MobX. Seems marginally better / easier to get setup.

# 2021-02-27
- https://boxy-svg.com/ useful for prototype logo in SVG.
- Worked on supporting different layouts for authenticated vs non-authenticated users.
- Worked on login page design.
- Starting to think if I should add Redux in at this point or wait.

# 2021-02-26
- Most of this evening was spent sorting out the work from 2021-01-04 into nice commits.
- Have resolved issues between osx / windows local environments
- Have started considering design, purchased https://friendkit.cssninja.io/ as a source of inspiration. Would be nice if I could just use that, but paying for a template and then open sourcing it seems rude? ^_^

# 2021-01-04
- https://medium.com/hackernoon/building-a-website-with-react-and-bulma-d655214bff2a helpful for adding Bulma into the mix without having to dive into getting away from `react-scripts start` yet.
- Focusing on getting a basic design running in Bulma, makes sense to me to start this earlier as the front-end code will rely on UI existing.
- Looked into React Native and Iconic, as I want an app of this at some point. However right now I don't see either as particularly useful to me. I like the idea of Iconic and one code base, but it has performance issues, probably fine for my use case, but why bother. React Native has plugins to deal with web, but it just seems wrong. PWA focused for now.

# 2021-01-03
- Article was helpful on working through CORS issues etc.
- Have homestead setup now to support both running with LiveReload and standard builds.
- Basic authentication system in place.


# 2020-10-05
- Going through https://laravel-news.com/using-sanctum-to-authenticate-a-react-spa which seems to be a good example of how to use a laravel/sanctum/reactJS setup.
- Having issues with getting homestead/vagrant to properly load the front-end with routing.