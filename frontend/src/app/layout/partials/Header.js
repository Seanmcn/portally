import React from 'react'

class Header extends React.Component {

    state = {
        isActive: false,
    }

    toggleNav = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
    }

    render() {
        return (
          <></>
         // <h1>Header</h1>
        )
    }
}

export default Header