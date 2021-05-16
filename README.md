# WIP - Portally
Online portal / social network

## Goals
- Privacy focused.
- All data configurable to expires after X time. (Mainly for hosting cost purposes)
- Can share images/statuses with groups of friends.
- Can message friends or groups.
- RSS feed integrations

## Progress
Working toward an MVP release, you can see progress on the [MVP Release project board](https://github.com/Seanmcn/circle/projects/1)

## Setup
```bash
(cd backend && composer install)
(cd frontend && yarn install)
(cd homestead && composer install && vagrant up)
```

## Technology Used
- [Laravel](https://laravel.com/)
- [ReactJS](https://reactjs.org/)