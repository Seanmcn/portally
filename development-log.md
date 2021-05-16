# 2021-05-16
- Merged feat.mobile-design branch into master now I've decided on direction, re-added Bulma until I get around to redoing the settings page into new design
- Switched icons over to https://fonts.google.com/icons, should have realised earlier that would be something that exists.

# 2021-05-15
- https://fontisto.com/icons
- Have navigation menu working now for mobile/desktop/tablet. Tablet design still needs some work, mainly around automatically entering that mode when screen size is tablet.
- Flexbox is great! ^_^
- I need to consider multiple users on one device as everything sort of relies upon local storage right now.


# 2021-05-14
- After more thought, why do I want my layout as a dependency. Change of plan, flexbox time!
- https://www.npmjs.com/package/react-responsive 
- https://www.npmjs.com/package/react-device-detect
- https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
- https://iconic.app
- https://www.figma.com/file/irKuqCDE1HP07qYOinudU3/Portally-Responsive-Design?node-id=0%3A1

# 2021-05-03
- I've been doing a lot of thinking about mobile-first design, after a rabbit hole into lots of CSS frameworks, I'm now ripping Bulma.io out (which I use on my blog) and switching to use https://github.com/material-components/material-components-web-components. Using web components within React does seem a little odd, but this library does provide everything I expect this project need in order for it to feel like an app while being a PWA.  
- https://material.io/components/navigation-drawer#usage

# 2021-04-26
- After researching e2e encryption implementations, I'm going to avoid getting into that right now, it would be nice to have, but this isn't meant to be a secure messaging app, so the overhead doesn't seem worthwhile right now, especially with this being web-first rather than mobile-first.

# 2021-04-19
- Have decided to veer into messaging first, I figure that will lay the groundwork for the status system with them both sharing a similar text input (auto embeds, file uploads) & the need to broadcasting events to the front-end.
- Started looking into e2e encryption https://virgilsecurity.com/pricing/ free for up to 250 users and looks like it would be okay to implement, would rather not be limited to 250 users by a product though. 

# 2021-04-12
- Fixed an issue where after registration the front-end thought it was authenticated
- Added ability to change password to user settings page
- Added "User Invites" concept, have `.env` for backend, so it is toggleable there, didn't bother adding a toggle into the front-end as that will be significantly changed anyway.
- Wondering how best to share `.env` variables between backend and frontend, I'd rather not maintain two files.

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
